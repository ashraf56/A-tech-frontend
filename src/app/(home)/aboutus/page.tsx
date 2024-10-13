import aboutusIMG from '@/asset/watch.jpg'
import Image from 'next/image';

const page = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center"  >
            <h1 className="uppercase text-center text-3xl font-bold py-5 ">About us</h1>

            <div className='block lg:flex justify-center items-center mx-auto gap-0.5 w-full lg:max-w-full'>
                <div className='w-full lg:w-1/2'>
                    <h3 className='text-xl font-bold pb-2'>About A-Tech</h3>
                    <p>
                        Welcome to A-Tech, your go-to blog for the latest insights, trends, and updates in the world of technology. Whether you’re a tech enthusiast, developer, or someone who’s simply curious about the evolving digital landscape, A-Tech provides in-depth articles, expert opinions, and practical guides to keep you informed and inspired.

                        Founded by a team of passionate tech aficionados, our mission is to simplify the complex, deliver valuable knowledge, and empower our readers to navigate the fast-paced world of technology with confidence. From coding tutorials and industry news to reviews on the latest gadgets, A-Tech covers it all.

                        Join us on this journey as we explore innovation, one post at a time!
                    </p>
                </div>
                <div>
                    <Image src={aboutusIMG} width={500} height={500} alt="mission" className='w-full h-96' />
                </div>
            </div>
        </div>
    );
};

export default page;