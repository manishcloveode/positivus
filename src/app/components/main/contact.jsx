'use client'
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
        <div className={` w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 ${spaceGrotesk.className}`}>
            <div className="flex flex-col ml-4 sm:flex-row items-start sm:items-center gap-4 mb-8">
                <div className="inline-flex px-4 py-2 bg-[#B9FF66] border border-black rounded-xl">
                    <span className="text-black font-medium text-xl">Contact Us</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-medium">
                    Connect with Us: Let&apos;s Discuss Your<br className="hidden sm:block" /> Digital Marketing Needs
                </h1>
            </div>
            <div className="bg-[#F3F3F3] rounded-[32px] p-[50px] sm:p-12 lg:p-[50px]">
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