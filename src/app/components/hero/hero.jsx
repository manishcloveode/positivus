"use client"
import Link from 'next/link'
import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '500', '700'] })
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
export default function Hero() {

    return (
        <>
            <div className={`flex flex-col lg:flex-row justify-between p-4 lg:p-[50px] ${spaceGrotesk.className}`}>
                <div className="mb-8 lg:mb-0">
                    <h2 className="text-3xl lg:text-4xl">
                        Navigating the <br />
                        digital landscape <br />
                        for success
                    </h2>
                    <p className="pt-[20px] text-sm">
                        Our digital marketing agency helps businesses
                        grow and succeed online through a range of
                        services including SEO, PPC, social media marketing,
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
                    <Image src="/Frame.jpg"
                        height={500} width={515}
                        alt="image"
                        className="w-full h-auto lg:w-[500.46px] lg:h-[400px] "
                    />
                </div>
            </div>
            <div className="p-4 lg:p-[50px] lg:mt-[-100px] container mx-auto">
                <div className="container mx-auto">

                    <div className="relative flex flex-wrap  lg:justify-between gap-8 px-4 lg:px-8 py-6">
                        {logos.map((logo) => (
                            <div key={logo.name} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                                <Image
                                    src={logo.src}
                                    alt={`${logo.name} logo`}
                                    width={100}
                                    height={30}
                                    className="h-6 w-auto object-contain lg:h-8" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}