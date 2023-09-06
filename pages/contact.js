import React from 'react'
import Image from 'next/image'
import Header from '@/component/Header'
import Footer from '@/component/Footer'

export default function Contact() {
    return (
        <div>
            <Header />
            <div className='mt-20 div'>
                <p className='text-center contact_text'> Get In Touch</p>
                <div className='flex justify-between anime_contact'>
                    <div>
                        <p className='contact_Sub'>Let us help you. <br />save Time , Build Trust & close more Deals </p>
                    </div>
                    <Image src='/pt.png' width='450' height='450' />
                </div>
                <div className='bg-black form_fel flex justify-between'>

                    <div>
                        <div className='flex '>
                            [01]
                            <p className='ml-6 qies'>What is your name ?</p>
                        </div>
                        <input type="text" class="custom-input" placeholder="Type your full name" />

                        <div className='flex forn_det'>
                            [02]
                            <p className='ml-6 qies'>What is your email address ?</p>
                        </div>
                        <input type="text" class="custom-input" placeholder="example@email.com" />

                        <div className='flex forn_det'>
                            [03]
                            <p className='ml-6 qies'>What is your phone number ?</p>
                        </div>
                        <input type="text" class="custom-input" placeholder="Number" />

                        <div className='flex forn_det'>
                            [04]
                            <p className='ml-6 qies'>What is your Real estate Business name?</p>
                        </div>
                        <input type="text" class="custom-input" placeholder="Business Name" />

                        <div className='flex forn_det'>
                            [04]
                            <p className='ml-6 qies'>What is your project deadline?</p>
                        </div>
                        <input type="text" class="custom-input" placeholder="Deadline" />


                        <div className='flex forn_det'>
                            [05]
                            <p className='ml-6 qies'>Briefly tell us some specific needs about your project</p>
                        </div>

                        <input type="text" class="custom-input" placeholder="Specific Needs" />
                        <div>
                            <button className='sub_btn mt-10'>
                                Send Message
                            </button>
                        </div>
                    </div>

                    <div className='tabb'>
                        <p>CALL US</p>
                        <p>+234-816-235-3857</p>

                        <p className='mt-14'>Email Address</p>
                        <p>Calebomojuwon@gmail.com</p>
                        <p className='mt-20'>Office Address</p>
                        <p>Ikoyi, Lagos Nigeria </p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
