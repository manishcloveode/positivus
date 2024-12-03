'use client'
import React from 'react'
import Link from 'next/link'

import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '500', '700'] })

export default function Testimonials() {


    return (
        <>
            <section className="px-4 sm:px-6 lg:px-12 py-12">
                <div className={`flex flex-col md:flex-row  md:p-[20px] mb-8 ${spaceGrotesk.className}`}>
                    <div className="mb-4 md:mb-0">
                        <Link
                            href="#"
                            className="bg-[#B9FF66] lg:ml-[-20px] text-black inline-flex md:inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-2 border border-black border-1 rounded-xl text-2xl md:text-2xl font-medium"
                        >
                            Testimonials
                        </Link>
                    </div>
                    <div className="md:ml-6 mt-4 md:mt-0">
                        <p className="text-xl md:text-base">
                            Hear from Our Satisfied Clients: Read Our Testimonials <br /> to Learn More about Our Digital Marketing Services
                        </p>
                    </div>
                </div>

                <div className={`bg-[#191A23] p-6 md:p-8 rounded-[32px] relative  overflow-hidden ${spaceGrotesk.className}`}>


                    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
                        {[
                            {
                                name: "John Smith",
                                role: "Marketing Director at XYZ Corp",
                                description: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
                            },
                            {
                                name: "John Smith",
                                role: "Marketing Director at XYZ Corp",
                                description: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
                            },
                            {
                                name: "John Smith",
                                role: "Marketing Director at XYZ Corp",
                                description: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
                            }
                        ].map((member, index) => (
                            <div key={index} className=" h-full bg-white rounded-3xl border-[2px] border-black border-b-8 p-6">
                                <div className="relative">
                                    <div className="space-y-2">
                                        <p className="text-black text-sm leading-relaxed">
                                            {member.description}
                                        </p>
                                        <hr className='border-black mt-4' />
                                        <h2 className="text-xl font-semibold text-end">{member.name}</h2>
                                        <p className="text-black text-lg text-end">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

        </>

    )
}

