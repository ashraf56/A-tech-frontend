import Postmanager from '@/components/DashBoardCompo/Postmanager';
import React from 'react';

const page = () => {
    return (
        <div className='flex flex-col justify-center items-center mx-auto h-screen'>
            <div>
                <h1 className='uppercase text-xl font-bold text-center'>Post manager</h1>
            </div>
            <Postmanager />
        </div>
    );
};

export default page;