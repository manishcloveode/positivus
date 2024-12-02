import Link from 'next/link'
import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '500', '700'] });
export default function Casestudies() {
    return (
        <>
            <div className={`flex flex-col md:flex-row p-4 md:p-[50px] ${spaceGrotesk.className}`}>
                <div className="mb-4 md:mb-0">
                    <Link
                        href="#"
                        className="bg-custom-green text-black inline-flex md:inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-2 border border-black border-1 rounded-xl text-xl md:text-2xl font-medium">
                        Case Studies
                    </Link>
                </div>
                <div>
                    <p className='mt-4 md:mt-0 md:ml-6 text-sm md:text-base lg:text-lg'>
                        Explore Real-life Example of Our Proven Digital Marketing <br className="hidden md:inline" />
                        Success through Our Case Studies
                    </p>
                </div>
            </div>
            <div>
                <div className={`p-4 md:p-[50px] mt-[-25px] ${spaceGrotesk.className}`}>
                    <div className="bg-[#191A23] rounded-[20px] md:rounded-[40px] p-6 md:p-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-gray-700">
                            <div className="md:pr-8">
                                <p className="text-white text-base md:text-base leading-relaxed mb-6">
                                    For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                                </p>
                                <a href="#" className="inline-flex items-center text-custom-green hover:opacity-80">
                                    Learn more
                                    <svg
                                        className="ml-2 w-5 h-5 transform -rotate-45"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 12h14M19 12l-7-7m7 7l-7 7"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="md:px-8">
                                <p className="text-white text-base md:text-base leading-relaxed mb-6">
                                    For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
                                </p>
                                <a href="#" className="inline-flex items-center text-custom-green hover:opacity-80">
                                    Learn more
                                    <svg
                                        className="ml-2 w-5 h-5 transform -rotate-45"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 12h14M19 12l-7-7m7 7l-7 7"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="md:pl-8">
                                <p className="text-white text-base md:text-base leading-relaxed mb-6">
                                    For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
                                </p>
                                <a href="#" className="inline-flex items-center text-custom-green text-sm md:text-base hover:opacity-80">
                                    Learn more
                                    <svg
                                        className="ml-2 w-5 h-5 transform -rotate-45"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 12h14M19 12l-7-7m7 7l-7 7"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

