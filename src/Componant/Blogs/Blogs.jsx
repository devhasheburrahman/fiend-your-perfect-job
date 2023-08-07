import React from 'react';

const Blogs = () => {
    return (
        <div className='items-center p-20'>
            <h1 className='text-3xl mb-5'>When should be use context API.</h1>
            <p className='text-lg text-[#757575]'> I can use Context API to store the current theme of our application and make it available to all components. This way, whenever the user switches the theme (such as enabling dark mode), all components will be updated with the new theme</p>

            <h1 className='text-3xl mb-5'>What is React custom hooks</h1>
            <p className='text-lg text-[#757575]'>React custom hooks are a feature in React that allow you to extract and reuse logic from your components. Custom hooks enable you to create reusable functions that can encapsulate state, side effects, or any other logic you want to share between multiple components.</p>

            <h1 className='text-3xl mb-5'>What is useRef</h1>
            <p className='text-lg text-[#757575]' >useRef is a hook provided by React that allows you to create a mutable value that persists across component renders. It returns a mutable ref object that can be used to store a value, similar to instance variables in class-based components.</p>

            <h1 className='text-3xl mb-5'>What is USeMemo ?</h1>
            <p className='text-lg text-[#757575]'>useMemo  is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
        </div>
    );
};

export default Blogs;