import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FiEdit } from "react-icons/fi";
import { useToast } from "@/components/ui/use-toast";
import useStore from "@/app/store";

export function DialogDemo() {
  const { list, addItem, updateItem, removeItem } = useStore();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();
  const date = new Date();

  const dayOptions = { weekday: 'long' };
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };

  const formatDateTime = (date) => {

    const day = date.toLocaleDateString(undefined, dayOptions);
    const dateStr = date.toLocaleDateString(undefined, dateOptions);
    const time = date.toLocaleTimeString(undefined, timeOptions);

    return `${day}, ${dateStr} at ${time}`;
  };

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
            Click save when you&apos;re done.
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              type='text'
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button onClick={() => {
              addItem({name: name, date: date.toLocaleDateString(undefined, { month: 'long', day: 'numeric' }), description: description});
              toast({
                title: `Description: ${description}`,
                description: `${formatDateTime(date)}`,
              });
              console.log('Created new diet');
            }} type="submit">
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
