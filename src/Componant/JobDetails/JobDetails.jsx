import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon, CreditCardIcon } from '@heroicons/react/24/solid'

const JobDetails = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id')
    const [jobDetails, setJobDetails] = useState({})
    const [appliedJob, setAppliedJob] = useState([])

    useEffect(() => {
        fetch("FutureJob.json")
            .then(res => res.json())
            .then(data => {
                const filteredJob = data.filter(el => {
                    if (el.id == id) {
                        return el
                    }
                })
                setJobDetails(filteredJob[0])
                // console.log(filteredJob);
            })
    }, [])
    // console.log(id);
    const HandleAddToApplying = () => {
        const existAppliedJob = localStorage.getItem('appliedJob')
        if (existAppliedJob) {
            const appliedJobs = JSON.parse(existAppliedJob)
            localStorage.setItem('appliedJob', JSON.stringify([...appliedJobs, jobDetails]));
        } else {
            localStorage.setItem('appliedJob', JSON.stringify([jobDetails]));
        }



        console.log(appliedJob, setAppliedJob);
    }




    const { salary, location, description, phone, email, responsibility, education, experiences, job_title, address } = jobDetails;
    return (
        <div className='md:p-20'>
            <div>
                <h1 className='text-4xl text-center mb-20'>Job Details</h1>
            </div>
            <section className='flex items-start'>
                <div className='w-[60%] '>
                    <p className='text-xl text-[#757575] mb-5'><span className='text-2xl text-black'>Job Description  : </span>  {description}</p>
                    <p className='text-xl text-[#757575] mb-5'><span className='text-2xl text-black'>Job Responsibility  : </span>{responsibility}</p>
                    <h1 className='text-xl text-black'>Educational Requirements : <p className='text-xs-s text-[#757575] mb-5'>{education}</p></h1>
                    <h1 className='text-xl text-black'>Experience : <p className='text-xl text-[#757575] mb-5'>{experiences}</p></h1>
                </div>
                <div className='bg-red-100 p-5 rounded w-[30%] flex-grow-0'>
                    <h1 className='text-2xl text-black mb-5'>Job Details</h1>
                    <hr />
                    <div className='mb-5'>
                        <div className='flex items-center'>
                            < CurrencyDollarIcon className="h-4 w-6 text-blue-500" /><span>Salary :  </span> <p className='text-xs text-[#757575]'> {salary}</p>
                        </div>
                        <div className='flex items-center'>
                            <  CreditCardIcon className="h-4 w-6 text-blue-500" /><p>Job Title : </p> <p className='text-xs text-[#757575]'><span>{job_title}</span></p>
                        </div>

                    </div>
                    <p className='text-2xl text-black mb-5'>Contact Information</p>

                    <p>

                        Phone : <span className='text-xs-s text-[#757575] mb-5'>{phone}</span> </p>
                    <p>Email : <span className='text-xs-s text-[#757575] mb-5'> {email}</span> </p>
                    <div className='flex items-center'>
                        < MapPinIcon className="h-4 w-6 text-blue-500" /><p className='text-xs-s text-[#757575]'>{address}</p>
                    </div>
                    <button onClick={HandleAddToApplying} className='w-full py-2 text-white rounded mt-10 bg-blue-500'>Apply Now</button>
                </div>
            </section>

        </div>
    );
};

export default JobDetails;