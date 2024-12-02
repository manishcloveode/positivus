'use client'
import Link from 'next/link'
import { Space_Grotesk } from 'next/font/google'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '500', '700'] });
export default function Contact() {
    return (
        <div className={` px-4 sm:px-6 lg:px-12 py-12 ${spaceGrotesk.className}`}>
            <div className={`flex flex-col md:flex-row p-2  ${spaceGrotesk.className}`}>
                <div className="mb-4 md:mb-0">
                    <Link
                        href="#"
                        className="bg-[#B9FF66] text-black inline-flex md:inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-2 border border-black border-1 rounded-xl text-xl md:text-xl font-medium"
                    >
                        Contact Us
                    </Link>
                </div>
                <div className="md:ml-6 mt-4 md:mt-0">
                    <h1 className="text-base sm:text-base font-medium">
                        Connect with Us: Let&apos;s Discuss Your<br /> Digital Marketing Needs
                    </h1>
                </div>
            </div>
            <div className="bg-[#F3F3F3] mt-12 rounded-[32px] p-4 md:p-[50px] ">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <RadioGroup className="flex gap-8">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem />
                                <Label>Say Hi</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem />
                                <Label htmlFor="get-quote">Get a Quote</Label>
                            </div>
                        </RadioGroup>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label >Name</Label>
                                <Input
                                    type='text'
                                    placeholder="Enter your name"
                                    className="border-black bg-white rounded-xl px-4 py-3"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email*</Label>
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="border-black bg-white rounded-xl px-4 py-3"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label >Message*</Label>
                                <Textarea
                                    placeholder="Enter your message"
                                    className="border-black bg-white rounded-xl px-4 py-3 min-h-[120px]"
                                />
                            </div>
                        </div>
                        <Button className="w-full bg-black text-white rounded-xl py-6 text-lg hover:bg-black/90">
                            Send Message
                        </Button>
                    </div>
                    <div className=' hidden  justify-between h-[194px]  lg:block lg:ml-[270px]   '>
                        <Image
                            src="/Illustration1.png"
                            alt="Picture of the author"
                            width={291}
                            height={100}
                            className='ml-[50px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}