/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import A_Form from "@/components/Form/A_Form"
import A_Input from "@/components/Form/A_Input"
import A_ApiSelect from "@/components/Form/A_ApiSelect"
import { Button } from "@/components/ui/button"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useGetallCategoryQuery } from "@/redux/feature/category/categoryAPi"
import { FieldValues, SubmitHandler} from "react-hook-form"
import { useState } from "react"
import { toast } from "sonner"
import { CloudinaryStore } from "@/lib/ClaoudinaryStore"
import { useAppSelector } from "@/redux/hook"
import { useCurrentUser } from "@/redux/feature/auth/authslice"
import { useCreateAblogMutation } from "@/redux/feature/Post/Postapi"
import A_randomSelect from "@/components/Form/A_randomSelect"


const Blogtype = [
  { name: 'random', value: 'random' },
  { name: 'premium', value: 'premium' }
]

const toolbarOptions = [
  [{ 'size': ['small', false, 'large', 'huge'] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],
  [{ 'direction': 'rtl' }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],
  ['link', 'image', 'video'],
  ['clean']
];

export function CreatePost() {

  const [editorContent, setEditorContent] = useState('');
  const { data, isLoading } = useGetallCategoryQuery(undefined)
  const user: any = useAppSelector(useCurrentUser)
  const [CreateAblog, {  isLoading: isblogloading }] = useCreateAblogMutation()


  if (isLoading) {
    return <p>loading...</p>
  }


  const onsubmit: SubmitHandler<FieldValues> = async (data) => {


    const file = data?.image[0]

    const postImage = await CloudinaryStore(file);

    const PostData = {
      user: user?.id,
      title: data.title,
      subtitle: data.subtitle,
      description: editorContent,
      image: postImage,
      date: data.date,
      category: data.category,
      blogType: data.blogType

    }


    const toast1 = toast.loading('loading...', { duration: 2000 })
    try {
      const res = await CreateAblog(PostData).unwrap()


      if (res?.success === true) {
        toast.success(res?.message, { id: toast1, duration: 2000 });

      }




    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error:any) {
      toast.error('Something error', { id: toast1, duration: 2000 });
    }

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size={"default"} className="uppercase">Write</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-7xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create your Post</DialogTitle>
        </DialogHeader>
        <A_Form onSubmit={onsubmit}>
          <div className=" md:flex   w-full items-center gap-4 justify-center ">



            <div className="flex flex-col space-y-3 w-full md:w-80 ">

              <A_Input type="text" placeholder="your title" name='title' label='Title' />
              <A_Input type="text" placeholder="your subtitle" name='subtitle' label='Subtitle' />
              <A_Input type="file" placeholder="entar image" name='image' label='Image' />
              <A_Input type="date" placeholder="entar date" name='date' label='Date' />
              <A_ApiSelect data={data?.data} label='Category' name='category' />
              <A_randomSelect data={Blogtype} label='Blogtype' name='blogType' />

            </div>
            <div className="flex flex-col space-y-1.5 w-full max-w-full ">
              <Label >Description</Label>
              <ReactQuill
                value={editorContent}
                onChange={setEditorContent}
                theme="snow"
                className="h-full md:h-72 lg:h-80   textarea-secondary"
                modules={{ toolbar: toolbarOptions }}

                placeholder="Description"
              />
            </div>



          </div>
          <DialogFooter className="my-5 text-center">
            <Button type="submit" >{isblogloading ? 'loading..' : 'Post now'}</Button>
          </DialogFooter>
        </A_Form>
      </DialogContent>
    </Dialog>
  )
}
