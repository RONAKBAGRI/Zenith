import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className='px-4'>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'Contact'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[450px]' src={assets.contact_img} alt="contact_img" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>1234 Horizon Street <br />Tech Park, Sector 9 <br />New Delhi, India - 110001</p>
          <p className='text-gray-500'> 📞 Phone : +91 99999 88888 <br /> 📧 Email : contact@zenithstore.com</p>
          <p className='font-semibold text-gray-600 text-xl'>Careers at Zenith</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button onClick={() => navigate('/jobs')} className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-lg'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default Contact;
