import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Privacy', // Display Title
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen items-center py-4 w-full">
      <span className="flex items-center justify-between w-full">
        <Link href='/'><Button className='flex gap-2'><ArrowLeft />Home</Button></Link>
        <h1 className="text-2xl font-semibold">Privacy Policy</h1>
        <Link href='/legal/terms'><Button className='flex gap-2'><Shield />Terms</Button></Link>
      </span>
    </div>
  )
}
