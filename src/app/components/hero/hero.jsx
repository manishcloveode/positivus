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
            <div className={` px-4 sm:px-6 lg:px-8 ${spaceGrotesk.className}`}>
                <div className="flex flex-col lg:flex-row items-center  py-12 lg:py-20 gap-8 lg:gap-12">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-3xl sm:text-4xl lg:justify-center lg:text-5xl font-bold leading-tight">
                            Navigating the
                            digital landscape
                            for success
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl">
                            Our digital marketing agency helps businesses
                            grow and succeed online through a range of
                            services including SEO, PPC, social media marketing,
                            and content creation.
                        </p>
                        <Link
                            href="#"
                            className="inline-block bg-black text-white px-6 py-3 sm:px-8 sm:py-4 border border-gray-300 rounded-xl text-lg sm:text-xl font-medium transition-colors hover:bg-gray-800"
                        >
                            Book a consultation
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
                        <Image
                            src="/Frame.jpg"
                            width={515}
                            height={400}
                            alt="Digital landscape illustration"
                            className="w-full max-w-md lg:max-w-lg xl:max-w-xl   object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="p-4 lg:p-[50px] lg:mt-[-50px]  mx-auto">
                <div className="mx-auto">

                    <div className="relative flex flex-wrap  lg:justify-between gap-8 px-4 lg:px-8 py-6">
                        {logos.map((logo) => (
                            <div key={logo.name} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                                <Image
                                    src={logo.src}
                                    alt={`${logo.name} logo`}
                                    width={100}
                                    height={60}
                                    className="h-10 w-auto object-contain lg:h-12" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}