/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import SearchFeild from './SearchFeild';
import Postcard from './Post/Postcard';
import { getAllBlog } from '@/Service/getAllBlog';

const Allpost = async () => {
    const data = await getAllBlog()


    return (
        <div className='w-full lg:w-3/4 h-full flex flex-col space-y-3'>
            <div className='my-4'>
                <SearchFeild />
            </div>
            <div className='grid grid-cols-1 gap-3'>
                {
                    data?.data?.map((blog: any) => (

                        <Postcard data={blog} key={blog?._id} />
                    ))
                }
            </div>

        </div>
    );
};

export default Allpost;