import React, { useState, useEffect, useContext } from "react";
import Title from "../components/Title";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import axios from "axios";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/shopContext";

const PlaceOrders = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const [method,setMethod]=useState('cod');
  const {navigate}=useContext(ShopContext);

  // Fetch countries
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((res) => {
        const countryOptions = res.data.data.map((country) => ({
          label: country.country,
          value: country.country,
        }));
        setCountries(countryOptions);
      })
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  // Fetch states when a country is selected
  useEffect(() => {
    if (selectedCountry) {
      axios
        .post("https://countriesnow.space/api/v0.1/countries/states", {
          country: selectedCountry.value,
        })
        .then((res) => {
          const stateOptions = res.data.data.states.map((state) => ({
            label: state.name,
            value: state.name,
          }));
          setStates(stateOptions);
          setSelectedState(null); // Reset state selection
        })
        .catch((err) => console.error("Error fetching states:", err));
    }
  }, [selectedCountry]);

  // Fetch cities when a state is selected
  useEffect(() => {
    if (selectedState) {
      axios
        .post("https://countriesnow.space/api/v0.1/countries/state/cities", {
          country: selectedCountry.value,
          state: selectedState.value,
        })
        .then((res) => {
          const cityOptions = res.data.data.map((city) => ({
            label: city,
            value: city,
          }));
          setCities(cityOptions);
          setSelectedCity(null); // Reset city selection
        })
        .catch((err) => console.error("Error fetching cities:", err));
    }
  }, [selectedState]);

  // Email validation
  const validateEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setError(emailPattern.test(value) ? "" : "Invalid email format (example: user@example.com)");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t pl-6">
      {/* ----------Left Side ------------ */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"Delivery"} text2={"Information"} />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First Name" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last Name" />
        </div>

        <input  className="border border-gray-300 rounded py-1.5 px-3.5 w-full"  type="email"  placeholder="Email Address"  value={email}  onChange={validateEmail}  required/>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />

        <div className="flex gap-3">
          {/* Country Selection */}
        <Select className="w-[50%]" options={countries}  value={selectedCountry}  onChange={setSelectedCountry}  placeholder="Select Country"/>

        {/* State Selection */}
        <Select className="w-[50%]" options={states}  value={selectedState}  onChange={setSelectedState}  placeholder="Select State"  isDisabled={!selectedCountry}/>
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-[50%]" type="number" placeholder="Pin Code" />
          {/* City Selection */}
        <Select className="w-[50%]" options={cities} value={selectedCity} onChange={setSelectedCity} placeholder="Select City" isDisabled={!selectedState}/>
        </div>

        {/* Phone Number with Country Code */}
        <PhoneInput  country={"in"}  value={phone}  onChange={setPhone}/>
      </div>

      {/* ----------Right Side */}
      <div className="mt-8 pr-6">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        <div className="mt-12">
          <Title text1={'Payment'} text2={'Method'}/>
          {/* Payment method selection div */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'?'bg-green-400':''}`}></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="stripe_logo" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay'?'bg-green-400':''}`}></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="razorpay_logo" />
            </div>
            <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'?'bg-green-400':''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div> 
          <div className="w-full text-end mt-8">
          <button 
            onClick={() => navigate('/orders')} 
            className={`px-16 py-3 text-sm ${email && !error && selectedCountry && selectedState && selectedCity && phone ? 'bg-black text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`} disabled={!email || error || !selectedCountry || !selectedState || !selectedCity ||!phone}>
            Place Order
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrders;
