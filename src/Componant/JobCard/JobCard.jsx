import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'


const JobCard = ({ details }) => {
    const { title, image, company_name, job_item, job_time, salary, location } = details;
    return (
        <div className='p-8 border border-red-400 rounded  mt-15 mb-10 md:m-8'>
            <img className='h-10' src={image} alt="" />
            <h1 className='text-2xl mt-3'>{title}</h1>
            <p className=' text-xs-s text-[#757575] mb-5'>{company_name}</p>
            <div className=' mt-4 mb-3 flex gap-1'>
                <p className='border border-[#9873FF] text-[#9873FF] p-2 rounded '>{job_item}</p>
                <p className='border border-[#9873FF] text-[#9873FF] p-2 rounded '>{job_time}</p>

            </div>
            <div className='flex gap-4 mb-5'>
                <div className='flex items-center '>
                    <  CurrencyDollarIcon className="h-4 w-6 text-blue-500" /> <p className='text-xs-s text-[#757575] '> {salary}</p>
                </div>
                <div className='flex items-center'>
                    < MapPinIcon className="h-4  w-6 text-blue-500" /> <p className='text-xs-s text-[#757575]'> {location}</p>
                </div>

            </div>




            <Link to={`/jobDetails?id=${details.id}`}><button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-2  rounded text-white text-[12px]'>Job Details</button></Link>
        </div>
    );
};

export default JobCard;