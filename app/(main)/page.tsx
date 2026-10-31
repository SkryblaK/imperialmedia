import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Home | Imperial Media Solutions', // Display Title
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center pt-[75] justify-center">
        <h1 className="text-3xl font-semibold">Home Page</h1>
        <Link href='/delete'><Button className='flex gap-2'><Trash />Go To Delete</Button></Link>
      </div>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-3xl font-semibold">Home Page</h1>
        <Link href='/delete'><Button className='flex gap-2'><Trash />Go To Delete</Button></Link>
      </div>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-3xl font-semibold">Home Page</h1>
        <Link href='/delete'><Button className='flex gap-2'><Trash />Go To Delete</Button></Link>
      </div>
    </>
  )
}
