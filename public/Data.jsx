import { Briefcase, FileUser, FolderKanban, Home, ScooterIcon } from 'lucide-react';
import Image from 'next/image';
import { BiCamera } from 'react-icons/bi';
import { BsYoutube } from 'react-icons/bs';
import { DiHtml5, DiPhotoshop } from 'react-icons/di';
import { FaCamera, FaChurch, FaDrawPolygon, FaGithub, FaInstagram, FaLinkedin, FaMap, FaPython, FaSchool, FaVideo } from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import { GiTeacher } from 'react-icons/gi';
import { MdWork } from "react-icons/md";
import { PiNavigationArrowFill } from 'react-icons/pi';
import { RiDirectionFill, RiNextjsFill } from 'react-icons/ri';
import { SiDavinciresolve } from 'react-icons/si';
import { TfiMicrosoftAlt } from 'react-icons/tfi';

export const NavLinks = [
    { 
        label: "Home", 
        labelMobile: "Home Page", 
        href: "/", 
        icon: <Home className="h-4 w-4"/>, 
        active: true 
    },
    { 
        label: "Projects", 
        labelMobile: "Past Projects", 
        href: "/projects", 
        icon: <Briefcase className="h-4 w-4"/>, 
        active: true 
    },
    // { label: "Catalog", labelMobile: "Home", href: "/catalog", icon: <FolderRoot className="h-4 w-4"/>, active: true },
    { 
        label: "Catalog", 
        labelMobile: "Catalog / Shop", 
        href: "/catalog", 
        icon: <FolderKanban className="h-4 w-4"/>, 
        active: false 
    },
    { 
        label: "Resumè", 
        labelMobile: "View my Resumè", 
        href: "/resume", 
        icon: <FileUser className="h-4 w-4"/>, 
        active: true 
    },
]

export const SocialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/SkryblaK/imperialmedia/',
        username: '@SkryblaK',
        icon: <FaGithub />,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/george-thindhimba/',
        username: 'Thindhimba George',
        icon: <FaLinkedin />,
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/savvy_._sagitarrian',
        username: '@savvy_._sagitarrian',
        icon: <FaInstagram />,
    },
    {
        name: 'Twitter',
        href: 'https://x.com/thee_great_kenn',
        username: '@thee_great_kenn',
        icon: <FaXTwitter />,
    },
    {
        name: 'Discord',
        href: '',
        username: '',
        icon: <ScooterIcon />,
    },
    {
        name: 'WhatsApp',
        href: 'https://wa.me/qr/JQKDQITZGBXMP1',
        username: 'George_MTK',
        icon: <ScooterIcon />,
    },
]

export const Portfolio = [
    {
        skill: "Python",
        type: 'web',
        proficiency: "",
        level: 5,
        description: "Mastered Python Data Analysis, automation, web development & I dabble in Machine Learning",
        note: "",
        image: <Image src='/imperial-user.jpg' alt='image' height={10} width={10} classname='h-30 w-30 rounded-xl aspect-video' />,
        icon: <FaPython />
    },
    {
        skill: "Web Development",
        type: "web",
        proficiency: "",
        level: 5,
        description: "Certified web developer with HTML, CSS, Javascript & SQL",
        note: "",
        image: <Image src='/imperial-user.jpg' alt='image' height={10} width={10} classname='h-30 w-30 rounded-xl aspect-video' />,
        icon: <DiHtml5 />
    },
    {
        skill: "Adobe Photoshop",
        type: "design",
        proficiency: "",
        level: 5,
        description: "Very skilled with the Photoshop and have mastered design, photo manipulation and ",
        note: "",
        image: <Image src='/imperial-user.jpg' alt='image' height={10} width={10} classname='h-30 w-30 rounded-xl aspect-video' />,
        icon: <DiPhotoshop />
    },
    {
        skill: "DaVinci Resolve",
        type: "design",
        proficiency: "",
        level: 5,
        description: "Mastered color grading, visual effects, promotion editing and xxxxx",
        note: "",
        image: <Image src='/imperial-user.jpg' alt='image' height={10} width={10} classname='h-30 w-30 rounded-xl aspect-video' />,
        icon: <SiDavinciresolve />
    },
    {
        skill: "NextJS",
        type: "web",
        proficiency: "",
        level: 5,
        description: "Mastered the NextJS framework from Role based users to db integrations, hooks and xxxxxx",
        note: "",
        image: <Image src='/imperial-user.jpg' alt='image' height={10} width={10} classname='h-30 w-30 rounded-xl aspect-video' />,
        icon: <RiNextjsFill />
    },
    {
        skill: "Photography",
        type: "camera",
        proficiency: "",
        level: 5,
        description: "",
        note: "",
        image: <Image src='/imperial-user.jpg' alt='image' height={10} width={10} classname='h-30 w-30 rounded-xl aspect-video' />,
        icon: <FaCamera />
    },
    {
        skill: "Videography",
        type: "camera",
        proficiency: "",
        level: 5,
        description: "",
        note: "",
        image: <Image src='/imperial-user.jpg' alt='image' height={10} width={10} classname='h-30 w-30 rounded-xl aspect-video' />,
        icon: <FaVideo />
    },
    {
        skill: "Something",
        type: "",
        proficiency: "",
        level: 5,
        description: "",
        note: "",
        image: <Image src='/imperial-user.jpg' alt='image' height={10} width={10} classname='h-30 w-30 rounded-xl aspect-video' />,
        icon: <TfiMicrosoftAlt />
    },
    {
        skill: "Microsoft Office",
        type: "",
        proficiency: "",
        level: 5,
        description: "",
        note: "",
        image: <Image src='/imperial-user.jpg' alt='image' height={10} width={10} classname='h-30 w-30 rounded-xl aspect-video' />,
        icon: <FaVideo />
    },
    {
        skill: "Microsoft Office",
        type: "office",
        proficiency: "",
        level: 5,
        description: "",
        note: "",
        image: <Image src='/imperial-user.jpg' alt='image' height={10} width={10} classname='h-30 w-30 rounded-xl aspect-video' />,
        icon: <FaVideo />
    },
    {
        skill: "Microsoft Office",
        type: "design",
        proficiency: "",
        level: 5,
        description: "",
        note: "",
        image: <Image src='/imperial-user.jpg' alt='image' height={10} width={10} classname='h-30 w-30 rounded-xl aspect-video' />,
        icon: <FaVideo />
    },
]

export const ServiceList = [
    {
        name: "Photography",
        icon: <BiCamera/>,
        iconHome: <BiCamera className='h-5 w-5'/>,
        list: <span className='font-light text-xs text-background'>
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Wedding Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Portraits</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Product Shoots</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Studio Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Event Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Wildlife/Landscape</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Creative Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Fashion & Marketing</p>,
                        <p className='hover:text-foreground cursor-pointer ml-1 font-bold'>and more...</p>
                    </span>,
        type: "design",
        image: "/imperialmedia-logo.png",
    },
    {
        name: "Design",
        icon: <FaDrawPolygon/>,
        iconHome: <FaDrawPolygon className='h-5 w-5'/>,
        list: <span className='font-light text-xs text-background'>
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Posters</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Company Branding</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Business Cards</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Logos</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Banners</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Wedding Prints</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Social Posts</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Brochures</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Cards</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Item Number 1</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Item Number 2</p>,
                        <p className='hover:text-foreground cursor-pointer ml-1 font-bold'>and more...</p>
                    </span>,
        type: "design",
        image: "/ims-logo.png",
    },
    {
        name: "Livestreaming",
        icon: <BsYoutube/>,
        iconHome: <BsYoutube className='h-5 w-5'/>,
        list: <span className='font-light text-xs text-background'>
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Podcasts</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Conferences</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Press Conferences</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Multistreaming</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Church Sermons</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Crusades</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Outdoor Events</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Brochures</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Cards</p>,
                        <p className='hover:text-foreground cursor-pointer ml-1 font-bold'>and more...</p>
                    </span>,
        type: "design",
        image: "/imperialmedia-logo.png",
    },
    {
        name: "Training",
        icon: <GiTeacher/>,
        iconHome: <GiTeacher className='h-5 w-5'/>,
        list: <span className='font-light text-xs text-background'>
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Wedding Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Portraits</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Product Shoots</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Studio Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Event Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Wildlife/Landscape</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Creative Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Fashion & Marketing</p>,
                        <p className='hover:text-foreground cursor-pointer ml-1 font-bold'>and more...</p>
                    </span>,
        type: "design",
        image: "/ims-logo.png",
    },
    {
        name: "Consultation",
        icon: <RiDirectionFill/>,
        iconHome: <RiDirectionFill className='h-5 w-5'/>,
        list: <span className='font-light text-xs text-background'>
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Wedding Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Portraits</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Product Shoots</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Studio Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Event Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Wildlife/Landscape</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Creative Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Fashion & Marketing</p>,
                        <p className='hover:text-foreground cursor-pointer ml-1 font-bold'>and more...</p>
                    </span>,
        type: "design",
        image: "/imperialmedia-logo.png",
    },
    {
        name: "Videography",
        icon: <FaVideo/>,
        iconHome: <FaVideo className='h-5 w-5'/>,
        list: <span className='font-light text-xs text-background'>
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Wedding Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Portraits</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Product Shoots</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Studio Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Event Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Wildlife/Landscape</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Creative Photography</p>,
                        <p className='inline hover:text-foreground cursor-pointer ml-1'>Fashion & Marketing</p>,
                        <p className='hover:text-foreground cursor-pointer ml-1 font-bold'>and more...</p>
                    </span>,
        type: "design",
        image: "/ims-logo.png",
    },
]

export const Education = [
    {
        name: 'Botho University',
        certificate: 'Degree',
        type: 'Computer Science',
        period: '2023-Now',
        course: 'B.Sc in Computer Forensics & Network Infrastructure',
        note: '',
        title: '',
        content: 'Currently studying at Botho, a Botswana-based university until 2027. The course is a mash-up of Computer Science, Telecommunications, Networking and Digital Fornsics. The course is an Online course.',
    },
    {
        name: 'Eduonix Learning Solutions',
        certificate: 'Certificate',
        type: 'Web Development',
        period: '2020',
        course: '',
        note: '',
        title: 'Technologies Mastered:',
        content: 'PHP, Javascript, HTML, CSS, Python, React, NextJS, Firebase, JQuery and MySQL',
    },
    {
        name: 'Canisianum RC High School',
        certificate: 'NSSCH',
        type: 'High School',
        period: '2014-2018',
        course: '',
        note: "Majored in 'Commerce' for grades 8 - 10 and 'Science' for grades 11 - 12",
        title: 'Subjects covered: ',
        content: 'English[A], Mathematics[L1], Physics[L2], Biology[L1], Geography[L2], D. Studies[B]',
    },
]

export const WorkHistory = [
    {
        company: 'Christ Mission Church',
        period: '2018 - Now',
        job: 'Head of IT & Media',
        description: '',
        skills: '',
        contact: '+264 81 226 2624',
        contactPerson: 'Bishop Julius Mbuende',
        contactPersonTitle: 'President',
    },
    {
        company: 'Imperial Media Solutions',
        period: '2025 - Now',
        job: 'CEO, Manager',
        description: '',
        skills: '',
        contact: '+264 83 400 7726',
        contactPerson: 'Ms. Secretary Name',
        contactPersonTitle: 'Secretary',
    },
]

export const Achievements = [
    {
        title: 'NCRST',
        titleWon: 'Oshana Regional Winner',
        titleName: 'Science Quiz',
        titleStatus: 'Winnner',
        recognizingCompany: 'NCRST',
        recognizingCompanyFull: 'National C of Research Science and Technology',
        note: 'Winner of the NCRST National Science Quiz at the School, Circuit and Regional levels & Finalist in the Nationals in 2016',
        year: '2016',
    }
]

export const References = [
    {
        name: 'Mr. Julius Mbuende',
        title: 'Bishop',
        organization: 'Christ Mission Church',
        number: '+264 81 226 2624',
        callNumber: '+264 81 226 2624',
        email: 'juliusimbuende@gmail.com',
        icon: <FaChurch className='hidden md:block'/>,
    },
    {
        name: 'Mrs. Henriette Ainima',
        title: 'Principal',
        organization: 'Canisianum RC High School',
        number: '+264 81 272 7923 / +264 81 633 2655',
        callNumber: '+264 81 272 7923',
        email: 'get the email ASAP',
        icon: <FaSchool className='hidden md:block'/>,
    },
    {
        name: 'Mr. Name Surname',
        title: 'Job Title',
        organization: 'Company Name',
        number: '+264 81 000  0000',
        callNumber: '+264 81 000  0000',
        email: 'surname@companyname.com',
        icon: <MdWork className='hidden md:block'/>,
    },
]

export const CompanyAddress = [
    {
        postalAddress:'P.O Box 240, Oshakati',
        postalIcon: <PiNavigationArrowFill />,
        townAddress: 'Ongwediva, Namibia',
        townIcon: <FaMap />,
        locationAddress: 'Shop 14, Ground Floor, Maroela Mall',
        locationIcon: <FaLocationDot />
    }
]