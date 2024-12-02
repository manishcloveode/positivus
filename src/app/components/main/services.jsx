import Link from 'next/link'
import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '500', '700'] })
export default function Services() {
    return (
        <div className={` p-[50px] ${spaceGrotesk.className} px-4 sm:px-6 md:px-8 lg:px-12 `}>
            <div className="flex mb-6 flex-col md:flex-row items-start md:items-center py-8 md:py-12">
                <div className="mb-4 md:mb-0">
                    <Link
                        href="#"
                        className="ml-2 mb-4 bg-custom-green text-black inline-flex items-center justify-center px-4 py-4 sm:px-6 sm:py-2 border border-black border-1 rounded-xl text-lg sm:text-xl font-medium">
                        Services
                    </Link>
                </div>
                <p className='md:ml-6 text-sm sm:text-base'>
                    At our digital marketing agency, we offer a range of services to <br className="hidden md:inline" />
                    help businesses grow and succeed online. These services include:
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                    {
                        title: ['Search engine', 'optimization'],
                        bgColor: 'bg-[#F8F8F8]',
                        titleBgColor: 'bg-custom-green',
                        textColor: 'text-black',
                        image: '/tokyo-magnifier-web-search-with-elements 2.png'
                    },
                    {
                        title: ['Pay-per-click', 'advertising'],
                        bgColor: 'bg-custom-green',
                        titleBgColor: 'bg-white',
                        textColor: 'text-black',
                        image: '/tokyo-selecting-a-value-in-the-browser-window 1.png'
                    },
                    {
                        title: ['social media', 'marketing'],
                        bgColor: 'bg-gray-800',
                        titleBgColor: 'bg-custom-green',
                        textColor: 'text-white',
                        image: '/card3.png'
                    },
                    {
                        title: ['Email', 'Marketing'],
                        bgColor: 'bg-[#F8F8F8]',
                        titleBgColor: 'bg-custom-green',
                        textColor: 'text-black',
                        image: '/card4.png'
                    },
                    {
                        title: ['Content', 'Creation'],
                        bgColor: 'bg-custom-green',
                        titleBgColor: 'bg-white',
                        textColor: 'text-black',
                        image: '/card5.png'
                    },
                    {
                        title: ['Pay-per-click', 'advertising'],
                        bgColor: 'bg-gray-800',
                        titleBgColor: 'bg-custom-green',
                        textColor: 'text-white',
                        image: '/card6.png'
                    }
                ].map((card, index) => (
                    <div key={index} className={`relative flex flex-col sm:flex-row rounded-[40px] ${card.bgColor} p-6 sm:p-8 w-full h-auto sm:h-[310px] border border-black border-b-8`}>
                        <div className="flex-1">
                            <div className="inline-block px-2 py-1 sm:px-4 sm:py-2">
                                {card.title.map((line, i) => (
                                    <span key={i} className={`text-black text-xl sm:text-2xl ${card.titleBgColor} rounded-md font-medium block mb-1`}>
                                        {line}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-4 sm:absolute bottom-8 left-8 flex items-center gap-2 text-black">
                                <span className={card.textColor}>Learn more</span>
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-0 flex justify-center items-center lg:items-center lg:justify-center">
                            <Image
                                src={card.image}
                                height={250}
                                width={180}
                                alt="Service illustration"
                                className="w-210px h-170px max-h-[180px] sm:max-h-[210px] lg:max-h-[250px]"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

