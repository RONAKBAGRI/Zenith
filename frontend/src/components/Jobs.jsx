import React from 'react';
import Title from '../components/Title';

const Jobs = () => {
  return (
    <div className="px-4 text-center mt-10 h-[100vh]">
      <Title text1={'Career'} text2={'Opportunities'} />
      <p className="text-gray-600 text-lg mt-6">
        We may add job details in the future according to needs. Till then, stay updated! 🚀
      </p>
    </div>
  );
};

export default Jobs;
