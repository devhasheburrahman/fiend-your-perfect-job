import React, { useEffect, useState } from 'react';
import AvailableJob from '../AvailableJob/AvailableJob';
import { useLoaderData } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';
import JobCard from '../JobCard/JobCard';



const Home = () => {
    const data = useLoaderData();
    // console.log(data);

    const [job, setJob] = useState([]);
    const [loadedJobs, setLoadedJobs] = useState([])
    const [showMoreBtn, setShowMoreBtn] = useState(true)


    useEffect(() => {
        fetch("FutureJob.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setLoadedJobs(data.slice(0, 4))
                setJob(data)
            })
    }, [])

    const handleLoadMore = () => {
        setLoadedJobs(job)
        setShowMoreBtn(false)
    }

    return (
        <div>
            <div className=' md:flex p-8 justify-center items-center mb-20' >

                <div>
                    <h1 className='text-5xl  leading-[80px]'>One Step <br /> Closer To Your <span className='text-sky-600'> <br />
                        Dream Job</span></h1>
                    <p className='text-xl text-[#757575] mt-6 '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] p-4 rounded-xl mt-3 text-white text-xl'>Get started</button>
                </div>
                <div>
                    <img src="/images/user.png" alt="" />
                </div>
            </div>
            <section>
                <h1 className='text-[48px] text-center text-[#1A1919]'>Job Category List</h1>
                <p className='text-[16px] text-center text-[#757575] '>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='md:flex  justify-center md:gap-10 p-8'>
                    {
                        data.map(data => <AvailableJob
                            key={data.id}
                            data={data}
                        />

                        )}
                </div>
            </section>
            <section className='justify-center'>
                <h1 className='text-center text-5xl '>Featured Jobs</h1>
                <p className='text-[16px] text-[#757575] text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>


                <div className='grid sm:grid-cols-1  md:grid-cols-2'>
                    {
                        loadedJobs.map(details => (
                            <JobCard
                                key={details.id}
                                details={details}
                            />
                        ))
                    }
                </div>
                <div className='flex justify-center '>
                    {showMoreBtn && <button onClick={handleLoadMore} className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] justify-center px-5 py-3 rounded text-white m-5'>See All Jobs</button>}
                </div>
            </section>

        </div>

    );
};

export default Home;