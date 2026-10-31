import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import Link from 'next/link'

export default function DashboardHome() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-3xl font-semibold">Dashboard Home Page</h1>
      <Link href='/delete'><Button className='flex gap-2'><Home />Go Home</Button></Link>
    </div>
  )
}
