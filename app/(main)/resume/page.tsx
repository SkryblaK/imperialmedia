import { Button } from "@/components/ui/button";
import { GitBranch, Heart, Mail } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Resumè', // Display Title
};

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen bg-primary pt-[55]">
      {/* Top - Introduction Section */}
      <section id="introduction" className="py-6 border- border-white shadow-md shadow-white">
        {/* Intro + Image */}
        <div className="flex w-full items-cente justify-between max-w-6xl mx-auto px-2">
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold text-white font-stretch-expanded">Thindhimba George</h1>
            {/* Job Titles */}
            <h3 className="text-black font-mono sm:hidden">Electrical Engineer</h3>
            <h3 className="hidden sm:block text-black font-mono md:hidden">Electrical Engineer | CEO, Founder</h3>
            <h3 className="hidden md:block text-black font-mono lg:hidden">Electrical Engineer | CEO, Founder | Web Developer</h3>
            <h3 className="hidden lg:block text-black font-mono xl:hidden">Electrical Engineer |  CEO, Founder | Web Developer | Graphics Designer</h3>
            <h3 className="hidden xl:block text-black font-mono 2xl:hidden">Electrical Engineer |  CEO, Founder | Web Developer | Graphics Designer | Networking Specialist</h3>
            {/* Intro Essay */}
            <p className="md:hidden text-sm text-white font-light">Lorem ipsum dolor sit amet consectetur adipisicing, voluptatem consectetur perferendis molestiae!</p>
            <p className="hidden md:flex text-sm text-white font-light lg:hidden">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi illo explicabo sequi quaerat veniam repellat et unde iusto hic, omnis eius officiis totam consequuntur quas repellendus eos aut! Facilis, autem mollitia.</p>
            <p className="hidden lg:flex text-sm text-white font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem nam voluptates recusandae ipsam perspiciatis magnam placeat, tenetur pariatur. Iusto, adipisci veniam, laudantium commodi aliquid nulla impedit ratione ducimus officia provident nisi repudiandae molestiae aliquam, maxime sed.</p>

            {/* Hidden Socials - Only for Large Screens */}
            <div className="hidden sm:flex justify-between items-center mt-4 w-full pr-4">
              <Link href=''>
                <Button size={'lg'} className={'bg-secondary text-gray-900 hover:ring hover:text-white dark:text-white'}><GitBranch />View GitHub Profile</Button>
              </Link>
              <span className="flex items-center gap-4 px-4">
                <Link href=''>
                  <Button size={'icon-lg'} className={'bg-secondary text-gray-800 fill-gray-800 hover:text-white hover:ring hover:fill-white dark:text-white dark:hover:fill-white'}>
                    <Heart fill="" />
                  </Button>
                </Link>
                <Link href=''>
                  <Button size={'icon-lg'} className={'bg-secondary text-gray-800 fill-gray-800 hover:text-white hover:ring hover:fill-white dark:text-white dark:hover:fill-white'}>
                    <Heart fill="" />
                  </Button>
                </Link>
                <Link href=''>
                  <Button size={'icon-lg'} className={'bg-secondary text-gray-800 fill-gray-800 hover:text-white hover:ring hover:fill-white dark:text-white dark:hover:fill-white'}>
                    <Heart fill="" />
                  </Button>
                </Link>
              </span>
              <span>
                <Link href={'mailto:georgemtkeneddy@gmail.com?subject=Query%20|%20ImperialMedia'}>
                <Button size={'lg'} className={'bg-secondary text-gray-900 hover:ring hover:text-white dark:text-white'}>
                  <Mail /> Contact Me
                </Button>
                </Link>
              </span>
            </div>
          </div>
          <Image src='/personal/george-image.jpg' alt="" height={500} width={500} className="size-28 md:size-36 xl:size-56 rounded-full border-2 border-white drop-shadow-md drop-shadow-white" />
        </div>
        
      </section>
      
      {/* Main Content */}
      <section id="something" className="py-6 text-center text-white">
        To Be Done Later
      </section>
    </div>
  )
}
