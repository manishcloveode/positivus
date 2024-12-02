"use client"
import Link from 'next/link'
import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '500', '700'] })
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navLinks = [
        {
            name: 'About us',
            href: '#'
        },
        {
            name: 'Services',
            href: '#'
        },
        {
            name: 'Use Cases',
            href: '#'
        },
        {
            name: 'Pricing',
            href: '#'
        },
        {
            name: 'Blog',
            href: '#'
        },
    ]
    const logos = [
        {
            name: 'Amazon',
            src: '/Company logo.jpg'
        },
        {
            name: 'Dribbble',
            src: '/Companylogo1.jpg'
        },
        {
            name: 'HubSpot',
            src: '/Companylogo2.jpg'
        },
        {
            name: 'Notion',
            src: '/Companylogo3.jpg'
        },
        {
            name: 'Netflix',
            src: '/Companylogo4.jpg'
        },
        {
            name: 'Zoom',
            src: '/Companylogo5.jpg'
        }
    ]
    return (
        <>
            <div className={`flex flex-col lg:flex-row items-center p-4 lg:p-[50px] ${spaceGrotesk.className}`}>
                <div className="flex justify-between w-full lg:w-auto">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/icon.jpg" height={20} width={20} alt="Icon" />
                        <span className="text-2xl font-semibold">Positivus</span>
                    </Link>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center w-full lg:w-auto mt-4 lg:mt-0 lg:ml-auto`}>
                    <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-lg font-medium hover:text-black transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="#"
                        className="mt-4 lg:mt-0 lg:ml-4 inline-flex items-center justify-center px-6 py-2 border border-black border-1 rounded-xl text-xl font-medium"
                    >
                        Request a quote
                    </Link>
                </nav>
            </div>
            <div className={`flex flex-col lg:flex-row justify-between p-4 lg:p-[50px] ${spaceGrotesk.className}`}>
                <div className="mb-8 lg:mb-0">
                    <h2 className="text-3xl lg:text-4xl">
                        Navigating the <br />
                        digital landscape <br />
                        for success
                    </h2>
                    <p className="pt-[20px] text-sm">
                        Our digital marketing agency helps businesses <br />
                        grow and succeed online through a range of <br />
                        services including SEO, PPC, social media marketing, <br />
                        and content creation.
                    </p>
                    <Link
                        href="#"
                        className="mt-[35px] inline-block bg-black text-white px-6 py-4 border border-gray-300 rounded-xl text-xl font-medium"
                    >
                        Book a consultation
                    </Link>
                </div>
                <div className="w-full lg:w-auto">
                    <Image src="/frame.jpg" height={500} width={515} alt="image" className="w-full h-auto lg:w-[500.46px] lg:h-[400px] " />
                </div>
            </div>
            <div className="p-4 lg:p-[50px] lg:mt-[-100px]">
                <div className="max-w-7xl mx-auto">
                    <div className="relative">
                        <div className="relative flex flex-wrap items-center justify-center lg:justify-between gap-8 px-4 lg:px-8 py-6">
                            {logos.map((logo) => (
                                <div key={logo.name} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src={logo.src}
                                        alt={`${logo.name} logo`}
                                        width={100}
                                        height={30}
                                        className="h-6 w-auto object-contain lg:h-8"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

