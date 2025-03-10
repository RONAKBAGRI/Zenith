import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div className='px-5'>
      <div className='text-4xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full max-w-[450px]' src={assets.about_img} alt="about_img" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Zenith, we believe in delivering a seamless shopping experience that blends quality, affordability, and convenience. Our eCommerce platform offers a diverse range of products, carefully curated to meet the needs of modern consumers. Whether you're looking for the latest fashion, cutting-edge electronics, or everyday essentials, we ensure that every purchase is smooth, secure, and satisfying.</p>
          <p>Our mission is to redefine online shopping with innovation and customer-centric services. With a focus on fast delivery, exceptional support, and premium products, Zenith strives to become your go-to destination for all your shopping needs. We are committed to excellence, making sure that every customer enjoys a hassle-free and enjoyable shopping journey.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Zenith, our mission is to revolutionize the online shopping experience by offering high-quality products, exceptional service, and seamless convenience. We strive to build a platform that prioritizes customer satisfaction, ensuring fast delivery, secure transactions, and a hassle-free shopping journey. Our goal is to connect people with the best products at the best prices, making online shopping more accessible, reliable, and enjoyable for everyone.</p>
          </div>
      </div>
      <div className='text-4xl  py-4'>
        <Title text1={'Why Choose'} text2={'Us'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>We ensure top-notch products by maintaining strict quality checks and sourcing from trusted suppliers.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>A seamless shopping experience with easy navigation, secure payments, and fast delivery at your fingertips.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Our dedicated support team is always ready to assist, ensuring a smooth and satisfying shopping journey.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
