import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedJob = ({ data }) => {
    console.log(data);
    const { title, id, job_time, job_item, company_name, salary, location, address, image } = data;
    return (
        <div>


            <div className='flex justify-between items-center border border-red-200 mb-5 p-4'>
                <div className='flex gap-20'>
                    <div>
                        <img className='h-[50px] w-[150px] p-2 ' src={image} alt="" />
                    </div>
                    <div>
                        <p>{title}</p>
                        <p>{company_name}</p>
                        <div className=' mt-4 mb-3 flex gap-1'>
                            <p className='border border-[#9873FF] text-[#9873FF] p-2 rounded '>{job_item}</p>
                            <p className='border border-[#9873FF] text-[#9873FF] p-2 rounded '>{job_time}</p>
                        </div>
                        <div className='flex'>
                            <div className='flex items-center '>
                                <  CurrencyDollarIcon className="h-4 w-6 text-blue-500" /> <p className='text-xs-s text-[#757575] '> {salary}</p>
                            </div>
                            <div className='flex items-center'>
                                < MapPinIcon className="h-4  w-6 text-blue-500" /> <p className='text-xs-s text-[#757575]'> {location}</p>
                            </div>
                        </div>

                    </div>

                </div>

                <Link to={`/jobDetails?id=${id}`}>
                    <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-3 rounded-xl text-white'> View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AppliedJob;