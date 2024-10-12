/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect } from 'react';
import Postcard from './Post/Postcard';
import { getAllBlog } from '@/Service/getAllBlog';
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { SearchApi } from '@/Service/SearchApi';
const Allpost = () => {

    const {
        register,
        handleSubmit,
    } = useForm()


    const [results, setResults] = useState([]);

    console.log(results);


    useEffect(() => {

        const AllpostData = async () => {
            try {
                const response = await getAllBlog();

                setResults(response?.data);
            } catch (error) {
                console.error('Error fetching  results:', error);
            }
        }

        AllpostData()
    }, [])

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const searchTerm = data.search.trim().split(" ").join("+");


        if (searchTerm) {
            try {
                const response = await SearchApi(searchTerm);
                setResults(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        }
        else {
            const response = await getAllBlog();

            setResults(response?.data);

        }

    }

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            handleSubmit(onSubmit)();
        }
    };



    return (
        <div className='w-full lg:w-3/4 h-full flex flex-col space-y-3'>
            <div className='my-4'>
                <div className="w-full max-w-2xl  mx-auto ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex justify-center items-center">
                            <Input type="text" placeholder="Search" {...register('search')}
                                onKeyDown={handleKeyPress} className="h-12" />
                            <Button variant={'ghost'} className="-ml-14"><SearchIcon className=" w-5 " /></Button>
                        </div>
                    </form>

                </div>
            </div>
            <div className='grid grid-cols-1 gap-3'>
                {results.length > 0 ?
                    (results?.map((blog: any) => (

                        <Postcard data={blog} key={blog?._id} />
                    )))
                    :
                    (
                        'No Post Found'
                    )
                }
            </div>

        </div>
    );
};

export default Allpost;