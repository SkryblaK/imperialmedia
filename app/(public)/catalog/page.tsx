import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Our Catalog', // Display Title
};

export default function CatalogPage() {
  return (
    <div className="flex flex-col min-h-screen items-center pt-[75] justify-center bg-green-600">
      <h1 className="text-3xl font-semibold">Catalog Page</h1>
      <Link href='/'><Button className='flex gap-2'><Trash />Go Back Home</Button></Link>
    </div>
  )
}
