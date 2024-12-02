"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Space_Grotesk } from 'next/font/google';
import { Plus, Minus } from 'lucide-react'
const processes = [
    {
        number: "01",
        title: "Consultation",
        content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        number: "02",
        title: "Research and Strategy Development",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit tempora eveniet magnam dolorem dolore eos vitae maxime odit adipisci?'
    },
    {
        number: "03",
        title: "Implementation",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit tempora eveniet magnam dolorem dolore eos vitae maxime odit adipisci?'
    },
    {
        number: "04",
        title: "Monitoring and Optimization",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit tempora eveniet magnam dolorem dolore eos vitae maxime odit adipisci?'
    }
    ,
    {
        number: "05",
        title: "Reporting and Communication",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit tempora eveniet magnam dolorem dolore eos vitae maxime odit adipisci?'
    }
    ,
    {
        number: "06",
        title: "Continual Improvement",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit tempora eveniet magnam dolorem dolore eos vitae maxime odit adipisci?'
    }
]
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '500', '700'] });
export default function Workprogress() {
    const [openIndex, setOpenIndex] = useState(0)
    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? -1 : index)
    };
    return (
        <>
            <div className={`flex flex-col md:flex-row p-[20px] md:p-[50px] ${spaceGrotesk.className}`}>
                <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                    <Link
                        href="#"
                        className="bg-custom-green text-black hidden md:inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-2 border border-black rounded-xl text-lg md:text-2xl font-medium"
                    >
                        Our Working Progress
                    </Link>
                </div>
                <div className="md:ml-6 text-center md:text-left">
                    <p className="text-sm sm:text-base md:text-lg">
                        Step-by-Step Guide to Achieving <br className="hidden md:block" /> Your Business Goals
                    </p>
                </div>
            </div>
            <div className={`p-[20px] md:p-[50px] ${spaceGrotesk.className}`}>
                <div>
                    {processes.map((process, index) => (
                        <div
                            key={index}
                            className={`rounded-[2rem] border border-black border-b-8 mb-8 transition-all duration-300 shadow-sm ${openIndex === index ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
                                }`}
                        >
                            <button
                                onClick={() => toggleSection(index)}
                                className="w-full px-4 py-6 md:px-8 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between text-left"
                                aria-expanded={openIndex === index}
                            >
                                <div className="flex items-start md:items-center gap-4 md:gap-6">
                                    <span className="text-2xl md:text-4xl font-bold">{process.number}</span>
                                    <span className="text-lg md:text-2xl font-medium">{process.title}</span>
                                </div>
                                <div className="mt-4 md:mt-0 md:ml-4 flex-shrink-0">
                                    <div className="rounded-full border border-black w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                                        {openIndex === index ? (
                                            <Minus className="h-8 w-8 md:h-8 md:w-8 font-bold" />
                                        ) : (
                                            <Plus className="h-8 w-8 md:h-8 md:w-8" />
                                        )}
                                    </div>
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="px-4 md:px-8 pb-4 md:pb-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-full md:max-w-3xl">
                                    {process.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

