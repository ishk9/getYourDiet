import React, {useState} from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FiEdit } from "react-icons/fi";
import useStore from "@/app/store"

import { useToast } from "@/components/ui/use-toast"


export function DialogDemo() {
  const [val, setVal] = useState("");
  const {addToDummyData} = useStore();
  const handleChange = (e) => {
    setVal(e.target.value);
  }
  const {toast} = useToast();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-[#D1C6B2] hover:bg-[#e5decf]' variant="outline">
            <FiEdit color='black' size={16}/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new diet</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              type='text'
              id="name"
              defaultValue="Joe"
              className="col-span-3"
              value={val}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              type='text'
              id="description"
              defaultValue="My fatloss diet"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button onClick={() => {
              toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2023 at 5:57 PM",
              })
              console.log('hello')
            }} type="submit">
              Save
            </Button>
          </DialogClose>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
