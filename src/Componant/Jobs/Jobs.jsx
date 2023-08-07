import React, { useEffect, useState } from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';


const Jobs = () => {
    const [job, setJob] = useState([])
    const [filteredJobs, setFilteredJobs] = useState([])

    useEffect(() => {

        const showApplied = localStorage.getItem('appliedJob')
        if (showApplied) {

            setJob(JSON.parse(showApplied))
            setFilteredJobs(JSON.parse(showApplied))

        }
        // console.log(job);
    }, [])

    const handleFilter = (e) => {
        let resultArray = [];
        const value = e.target.value;
        job.map(data => {
            console.log(data.job_item, "==", value);

            if (data.job_item == value) {
                console.log(data);
                resultArray = [...resultArray, data]
            }
            else{
                console.log('not found')
            }
        })
        setFilteredJobs(resultArray)


    }

    return (
        <div className='px-20'>
            <h1 className=' text-center m-10 font-bold'>Applied Job</h1>
            <div className='text-end'>
                <select onChange={handleFilter} name="cars" id="cars">
                    <option >Filter By</option>
                    <option value="Onsite">Onsite Job</option>
                    <option value="Remote">Remote Job</option>

                </select>
            </div>
            {

                filteredJobs.map(data => <AppliedJob
                    key={data.id}
                    data={data}
                ></AppliedJob>)
            }
            {job.length == 0 && <div> Not Found Applied Job , Please Applied Job </div>}
        </div>
    );
};

export default Jobs;