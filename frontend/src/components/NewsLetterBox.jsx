import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <div className='text-center px-4'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get flat 20% off</p>
            <p className='text-gray-400 mt-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, enim labore at hic non quis.
            </p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 px-4 py-2 rounded-full'>
                <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none py-2 px-2' required />
                <button type='submit' className='bg-black text-white text-xm px-5 py-3 rounded-full'>Subscribe</button>
            </form>
        </div>
    );
}

export default NewsLetterBox;
