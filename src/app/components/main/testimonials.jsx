'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '500', '700'] })

const testimonials = [
    {
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        author: "John Smith",
        position: "Marketing Director at XYZ Corp"
    },
    {
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        author: "John Smith",
        position: "Marketing Director at XYZ Corp"
    },
    {
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        author: "John Smith",
        position: "Marketing Director at XYZ Corp"
    }
]

export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0)

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
                <div className={`bg-[#191A23] h-[450px]  rounded-[32px] relative  ${spaceGrotesk.className}`}>
                    <div className={`bg-[#191A23] p-6 md:p-8 rounded-[32px] relative  overflow-hidden ${spaceGrotesk.className}`}>
                        <div className="flex justify-between mt-[50px] relative w-full">
                            <div className="hidden lg:block w-1/3 p-6 bg-[#3D3F46] text-white rounded-[24px] border border-[#B9FF66] lg:-translate-x-1/2 md:-translate-x-1/4">
                                <p className="text-xs py-2 md:text-sm leading-relaxed">
                                    &quot;{testimonials[0].text}&quot;
                                </p>
                                <div className="text-center mt-4">
                                    <h3 className="text-[#B9FF66] text-lg font-medium">
                                        {testimonials[0].author}
                                    </h3>
                                    <p className="text-sm">&quot;{testimonials[0].position}&quot;</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-[#3D3F46] text-white rounded-[24px] border border-[#B9FF66]">
                                <p className="text-xs md:text-sm leading-relaxed">
                                    &quot;{testimonials[1].text}&quot;
                                </p>
                                <div className="text-center mt-4">
                                    <h3 className="text-[#B9FF66] text-lg font-medium">
                                        {testimonials[1].author}
                                    </h3>
                                    <p className="text-sm">&quot;{testimonials[1].position}&quot;</p>
                                </div>
                            </div>
                            <div className="hidden lg:block w-1/3 p-6 bg-[#3D3F46] text-white rounded-[24px] border border-[#B9FF66] lg:translate-x-1/2 md:translate-x-1/4">
                                <p className="text-xs md:text-sm leading-relaxed">
                                    &quot;{testimonials[2].text}&quot;
                                </p>
                                <div className="text-center mt-4">
                                    <h3 className="text-[#B9FF66] text-lg font-medium">
                                        {testimonials[2].author}
                                    </h3>
                                    <p className="text-sm">&quot;{testimonials[2].position}&quot;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-3 ">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2.5 h-2.5 rounded-xl transition-colors ${index === currentSlide ? 'bg-[#B9FF66]' : 'bg-white'
                                    }`}
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

        </>

    )
}

