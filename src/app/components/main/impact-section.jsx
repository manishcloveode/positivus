import Link from 'next/link'
import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '500', '700'] })
export default function Singlecard() {
    return (
        <div className={`p-4 sm:p-6 md:p-8 lg:p-[50px] ${spaceGrotesk.className}`}>
            <div className='bg-[#F8F8F8] rounded-3xl flex flex-col-2 lg:flex-row lg:justify-between overflow-hidden'>
                <div className='p-6 sm:p-8 md:p-10 lg:p-20 flex flex-col justify-center'>
                    <h1 className='text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4'>
                        Let&apos;s make things happen
                    </h1>
                    <p className='text-black text-sm sm:text-base lg:text-lg mb-6'>
                        Contact us today to learn more about how our digital <br /> marketing services can help your business grow and <br /> succeed online.
                    </p>
                    <Link
                        href="#"
                        className="bg-black text-white text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl inline-flex items-center justify-center"
                    >
                        Get your free proposal
                    </Link>
                </div>
                <div className='hidden lg:block w-full h-[350px] w-[450px]'>
                    <Image
                        src="/singlecard.png"
                        height={350}
                        width={450}
                        alt="Digital marketing illustration"
                        className='w-full h-auto object-cover lg:h-full'
                    />
                </div>
            </div>
        </div>
    )
}

