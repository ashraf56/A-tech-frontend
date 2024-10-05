import React from 'react';
import SearchFeild from './SearchFeild';
import Postcard from './Post/Postcard';

const Allpost = () => {
    return (
        <div className='w-full lg:w-3/4 h-full '>
            <SearchFeild/>
           <Postcard/>
           <Postcard/>
           <Postcard/>
        </div>
    );
};

export default Allpost;