import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { Space_Grotesk } from 'next/font/google'
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '500', '700'] })

export default function Footer() {
    return (
        <div className={`${spaceGrotesk.className}`}>
            <div className="w-full p-4 md:px-[50px] py-16">
                <div className="bg-[#191A23] rounded-[32px] p-6 md:p-12 ">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/Vector.png"
                                alt="Positivus Logo"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <span className="text-xl text-white font-semibold">Positivus</span>
                        </Link>
                        <nav className="flex flex-wrap gap-x-8 gap-y-4">
                            <Link href="/about" className="text-white hover:text-[#B2E340] transition-colors">About us</Link>
                            <Link href="/services" className="text-white hover:text-[#B2E340] transition-colors">Services</Link>
                            <Link href="/use-cases" className="text-white hover:text-[#B2E340] transition-colors">Use Cases</Link>
                            <Link href="/pricing" className="text-white hover:text-[#B2E340] transition-colors">Pricing</Link>
                            <Link href="/blog" className="text-white hover:text-[#B2E340] transition-colors">Blog</Link>
                        </nav>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="text-white"><Linkedin className="w-6 h-6" /></Link>
                            <Link href="#" className="text-white"><Facebook className="w-6 h-6" /></Link>
                            <Link href="#" className="text-white"><Twitter className="w-6 h-6" /></Link>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        <div>
                            <div className="inline-block bg-[#B2E340] text-black px-4 py-1 rounded-full text-sm font-medium mb-4">Contact us:</div>
                            <div className="space-y-2 text-white">
                                <p>Email: info@positivus.com</p>
                                <p>Phone: 555-567-8901</p>
                                <p>Address: 1234 Main St</p>
                                <p>Moonstone City, Stardust State 12345</p>
                            </div>
                        </div>
                        <div className="bg-[#222222] rounded-2xl p-8">
                            <form className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="flex-1 bg-transparent border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#B2E340]"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#B2E340] text-black px-6 py-2 rounded-md hover:bg-[#a1d934] transition-colors font-medium whitespace-nowrap"
                                >
                                    Subscribe to news
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
                        <p className="text-white/60 text-sm">© 2023 Positivus. All Rights Reserved.</p>
                        <Link
                            href="/privacy-policy"
                            className="text-white/60 hover:text-[#B2E340] transition-colors text-sm"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
