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

    return (
        <>
            <div className={`flex flex-col lg:flex-row items-center p-4 lg:p-[50px] ${spaceGrotesk.className}`}>
                <div className="flex justify-between w-full lg:w-auto">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/Icon.jpg"
                            height={20} width={20}
                            alt="Icon" />
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
        </>
    )
}

