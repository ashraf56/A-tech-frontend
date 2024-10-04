import Allpost from '@/components/homepagecompo/Allpost';
import RecentPost from '@/components/homepagecompo/RecentPost';
import React from 'react';

const page = () => {
    return (
        <div className='flex gap-2 '>
           <Allpost/>
            <RecentPost/>
        </div>
    );
};

export default page;