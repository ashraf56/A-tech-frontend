import { CiCalendarDate } from "react-icons/ci";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {  CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "./ui/tabs";

const UsersProfile = () => {
    return (
        <div>
            <div className=" w-full h-screen font-CustomFont overflow-y-scroll">
                <div className='bg-gray-600 w-full h-44 '>

                </div>

               
                    <CardHeader>
                        <Avatar className="w-40 h-40 ml-4 -mt-24">
                            <AvatarFallback className="text-3xl font-extrabold bg-black text-white">A</AvatarFallback>
                        </Avatar>

                        <CardTitle className="text-3xl font-bold">Ashraful Islam</CardTitle>
                        <CardDescription className="flex gap-2 items-center"><CiCalendarDate className="w-5 h-5 " /> Joined 2024</CardDescription>
                        <CardDescription className="flex gap-2 items-center"><MdOutlineMailOutline className="w-5 h-5 " />
                        no@gmail.com</CardDescription>
                        <CardDescription className="flex gap-2 items-center"><FaRegAddressBook className="w-5 h-5 "/> Dhaka</CardDescription>
                    </CardHeader>
                    <CardContent>
                    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="following">Following</TabsTrigger>
        <TabsTrigger value="followres">Followres</TabsTrigger>
      </TabsList>
      <TabsContent value="following" defaultChecked>
       dfgdfgfd
      </TabsContent>
      <TabsContent value="followres">
       2342342fdf
      </TabsContent>
      
    </Tabs>
                    </CardContent>

             
            </div>

        </div>
    );
};

export default UsersProfile;