import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-black text-white  p-8 md:h-[300px]'>
            <div className=' md:flex items-center justify-between mb-4 '>
                <div className='p-3'>
                    <h1 className='text-2xl'>Find Your Perfect Job</h1>
                    <p className='text-sm text-[#757575]'>There are many variations of passages of Lorem Ipsum ,<br /> but the majority have suffered alteration in some form.</p>
                    <a href="/"> <img src="/public/icon/facebook.png" alt="" /></a>
                    <a href="/"><img src="/public/icon/insta.png" alt="" /></a> 
                    <a href="/"><img src="/public/icon/twitter.png" alt="" /></a>
                </div>
                <div>
                    <h2 className='text-xl'>Company</h2>
                    <p className='text-sm text-[#757575]'>About Us</p>
                    <p className='text-sm text-[#757575]'>Work</p>
                    <p className='text-sm text-[#757575]'>Latest News</p>
                    <p className='text-sm text-[#757575]'>Careers</p>
                </div>
                <div>
                    <h2 className='text-xl'>Product</h2>
                    <p className='text-sm text-[#757575]'>Prototype</p>
                    <p className='text-sm text-[#757575]'>PLans & Pricing</p>
                    <p className='text-sm text-[#757575]'>Customers</p>
                    <p className='text-sm text-[#757575]'>Integrations</p>
                </div>
                <div>
                    <h2 className='text-xl'>Support</h2>
                    <p className='text-sm text-[#757575]'>Help Desk</p>
                    <p className='text-sm text-[#757575]'>Sales</p>
                    <p className='text-sm text-[#757575]'>Becomes a Partner</p>
                    <p className='text-sm text-[#757575]'>Developers</p>
                </div>
                <div>
                    <h2 className='text-xl'>Contact</h2>
                    <p className='text-sm text-[#757575]'>524 Broadway,NYC</p>
                    <p className='text-sm text-[#757575]'>01522101038</p>
                    <p className='text-sm text-[#757575]'>infofypj@gmail.com</p>
                </div>

            </div>
            <hr />
            <div className='md:flex sm:flex-col  justify-between mt-10'>
                <h1 className='text-sm text-[#757575]'>  &copy; @2023 Find Your Perfect Job. All Rights Reserved</h1>
                <p className='text-sm text-[#757575]'>Powered by : Find Your Perfect Job</p>
            </div>


        </div>


    );
};

export default Footer;