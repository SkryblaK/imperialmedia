import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Projects', // Display Title
};

export default function ProjectPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center pt-[75] bg-orange-500">
      <h1 className="text-3xl font-semibold">Project Page</h1>
      <Link href='/'><Button className='flex gap-2'><Trash />Go Back Home</Button></Link>
    </div>
  )
}
