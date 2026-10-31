import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import Link from 'next/link'

export default function DeletePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-3xl font-semibold">Delete Page</h1>
      <Link href='/'><Button className='flex gap-2'><Home />Back Home</Button></Link>
    </div>
  )
}