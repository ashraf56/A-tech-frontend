import A_Form from "@/components/Form/A_Form"
import A_Input from "@/components/Form/A_Input"
import A_select from "@/components/Form/A_select"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useGetallCategoryQuery } from "@/redux/feature/category/categoryAPi"
import { FieldValues, SubmitErrorHandler } from "react-hook-form"

export function CreatePost() {

  const {data, isLoading}= useGetallCategoryQuery(undefined)
if (isLoading) {
  return <p>loading...</p>
}


  const onsubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    console.log(data);

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size={"default"} className="uppercase">Write</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Create your Post</DialogTitle>
        </DialogHeader>
        <A_Form onSubmit={onsubmit}>
          <div className="grid w-full items-center gap-4">

            <A_Input type="text" placeholder="your title" name='title' label='Title' />
            <A_Input type="text" placeholder="your subtitle" name='subtitle' label='Subtitle' />
            <A_Input type="file" placeholder="entar image" name='image' label='Image' />
           <div className="lg:flex gap-3 items-center">
           <A_Input type="date" placeholder="entar date" name='date' label='Date'  />
           <A_select data={data?.data}  label='Category' name='category' />
           </div>
            
          </div>
          <DialogFooter className="py-5">
            <Button type="submit">Post now</Button>
          </DialogFooter>
        </A_Form>
      </DialogContent>
    </Dialog>
  )
}
