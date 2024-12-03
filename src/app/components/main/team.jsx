import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google'
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '500', '700'] })
export default function Team() {
    return (
        <>
            <div className={`flex flex-col md:flex-row p-4 md:p-[50px] ${spaceGrotesk.className}`}>
                <div className="mb-4 md:mb-0">
                    <Link
                        href="#"
                        className="bg-[#B9FF66] text-black inline-flex md:inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-2 border border-black border-1 rounded-xl text-xl md:text-2xl font-medium"
                    >
                        Team
                    </Link>
                </div>
                <div className="md:ml-6 mt-4 md:mt-0">
                    <p className="text-lg md:text-lg">
                        Meet the skilled and experienced team behind our <br /> successful digital marketing strategies
                    </p>
                </div>
            </div>
            <div className={`p-4 md:p-[50px] ${spaceGrotesk.className}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
                    {[
                        {
                            name: "John Smith",
                            role: "CEO and Founder",
                            description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
                            image: "/Picture1.png"
                        },
                        {
                            name: "Jane Doe",
                            role: "Director of Operations",
                            description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
                            image: "/Picture2.png"
                        },
                        {
                            name: "Michael Brown",
                            role: "Senior SEO Specialist",
                            description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
                            image: "/Picture3.png"
                        },
                        {
                            name: "Emily Johnson",
                            role: "PPC Manager",
                            description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
                            image: "/Picture4.png"
                        },
                        {
                            name: "Brian Williams",
                            role: "Social Media Specialist",
                            description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
                            image: "/Picture5.png"
                        },
                        {
                            name: "Sarah Kim",
                            role: "Content Creator",
                            description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
                            image: "/Picture6.png"
                        }
                    ].map((member, index) => (
                        <div key={index} className="w-full bg-white rounded-3xl border border-black border-b-8 p-6">
                            <div className="relative">
                                <div className="absolute top-0 right-0">
                                    <div className="bg-black text-[#B9FF66] w-8 h-8 rounded-full flex items-center justify-center text-xl font-medium">
                                        in
                                    </div>
                                </div>
                                <div className="relative w-16 h-16 mb-4">
                                    <div className="overflow-hidden h-full w-full ">
                                        <Image src={member.image} height={97} width={97} alt={`${member.name}'s picture`} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-xl font-semibold">{member.name}</h2>
                                    <p className="text-black text-sm">{member.role}</p>
                                    <hr />
                                    <p className="text-black text-sm leading-relaxed">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-8">
                    <Link
                        href="#"
                        className="hidden md:inline-flex items-center justify-center px-6 py-2 bg-[#191A23] text-white rounded-xl text-xl font-medium"
                    >
                        see all team
                    </Link>
                </div>
            </div>
        </>
    )
}

