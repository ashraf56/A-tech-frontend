/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useGetAllUsersQuery } from '@/redux/feature/auth/authApi';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';

const UserManger = () => {
  const { data } = useGetAllUsersQuery(undefined, { pollingInterval: 3000 })
  return (
    <div className="mx-auto flex flex-col justify-center items-center container my-6  font-CustomFont">
      <div className="pb-5" >
        <h1 className='text-3xl font-bold'>Manage Users</h1>
      </div>
      <div className='w-full  mx-auto relative h-96 overflow-y-scroll'>
        <Table className='w-full max-w-4xl mx-auto'>
          <TableHeader>
            <TableRow className="sticky  z-30">
              <TableHead className=""> name</TableHead>
              <TableHead className=""> role</TableHead>
              <TableHead className="">Email</TableHead>
              <TableHead className="">Address</TableHead>
              <TableHead className="">Action</TableHead>

            </TableRow>
          </TableHeader>
          <TableBody className="-z-30">
            {data?.data?.map((p: any) => (
              <TableRow key={p._id}>
                <TableCell className="font-medium">{p.name}</TableCell>
                <TableCell className="font-medium">{p.role}</TableCell>
                <TableCell className="font-medium">{p.email}</TableCell>
                <TableCell className="font-medium">{p.address}</TableCell>
                <TableCell className="font-medium">
                  <Button variant={'ghost'}>Block User</Button>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserManger;