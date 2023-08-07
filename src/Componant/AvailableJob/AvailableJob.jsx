import React from 'react';
import { useActionData } from 'react-router-dom';

const AvailableJob = ({ data }) => {
    // console.log(data);
    const { id, name, available_job, icon } = data;
    return (
        <div className='border border-red-200 p-4 flex flex-col rounded-lg'>
            <img className='h-[70px] w-[70px]' src={icon} alt="" />
            <p className='text-[20px] font-bold'> {name}</p>
            <p className='text-[#A3A3A3] text-[16px]'>{available_job}</p>
        </div>

    );
};

export default AvailableJob;