import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center mb-5' >
           <h1 className='text-[250px] text-yellow-300'>404</h1>
            <h1 className='text-center text-[100px]'>Page not Found</h1>
            <Link to="/">
                <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF]   p-4 text-white rounded-xl'>
                    Go to the Home Page
                </button>
            </Link>
        </div>
    );
};

export default Error;