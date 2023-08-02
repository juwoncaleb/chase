import Image from 'next/image'

import React, { useState, useEffect } from 'react'

export default function Whatwedo() {
    const images = ['./nextp.png', './home.png', './hot.png', './sop.png'];


    return (
        <div className=''>
            <center>
                <Image className='we_img' width='600' height='700' src='/we.png' />

            </center>
            <div className='div'>
                <div className=' div_men'>
                    <div className='we_div'>
                        <p>
                            <span className='ought'> Partners</span> in your sucess. Dedicated to crafting powerful brands through websites, that builds Trust, good first Impression and improve efficeny in your Business
                        </p>
                    </div>

                </div>
                <div className='flex process '>
                    <div className='round_dot'>

                    </div>
                    <p className='what_we_do '>Intent</p>
                </div>
                <hr className='what_we_do_line' />

                <div>
                    <p className='intent_header'>
                        Creating trustworthy brands & Leading generating websites that connects real estate businesses to their clients.
                    </p>
                    <div className='int_div  flex justify-between'>
                        <div className='int_tex'>
                            <div>
                                <p className='what_we_do mb-4'>[01] MISSION</p>

                            </div>
                            <p>At Chase, we understand that your website is the heartbeat of your brand. It is more than just a collection of pages; it is your digital storefront, your 24/7 sales representative, and your gateway to building lasting connections with prospective clients.</p>
                            <p className='int_text_two'>Our team of innovative designers and skilled Engineers takes the time to understand your unique vision and goals. We work closely with you, building systems that improve your efficeincy that save you  <span className='ought '> TIME</span> . We create a website that not only showcases your properties but also represents your brand's story and values.</p>
                        </div>
                        <Image className='realImage' src='/real.jpg' width='600' height='500' />
                    </div>

                    <div>
                        <div className='flex process '>
                            <div className='round_dot'>

                            </div>
                            <p className='what_we_do '>Goal</p>
                        </div>
                        <hr className='what_we_do_line' />
                        <p className='intent_header'>
                            Visually Stunning , and SEO optimized to reach the right <span className=''> Audience</span>
                        </p>

                        <center>
                            <div className='flex gap-6 justify-around portfoio_div'>

                                <div>
                                    <Image className='cursor-pointer' width='600' height='550' src='/home.png' />
                                </div>
                                <div>
                                    <Image className='cursor-pointer' width='600' height='550' src='/sop.png' />
                                </div>


                            </div>
                            <div className='flex process '>
                                <div className='round_dot'>

                                </div>
                                <p className='what_we_do '>Core Values</p>
                            </div>
                            <hr className='what_we_do_line mb-12' />
                            <p className='intent_header'>
                                Tailored approach to fit your distinct identity, without compromising your <span className='au'>Authenticity</span>
                            </p>
                            <div className='grid grid-cols-3 we_cardee gap-6'>
                                <div className='we_card'>
                                    <p className='what_we_do we_head text-left '>REWARD</p>
                                    <p className='text-justify sub_card'>Your success is our ultimate reward. We take immense pride in being part of your journey to success, guiding you towards building meaningful connections with your clients. With Chase as your partner, you'll have a dedicated team by your side, ready to support your growth and elevate your real estate business to new heights.</p>
                                </div>
                                <div className='we_card'>
                                    <p className='what_we_do we_head text-left'>AWARENESS</p>
                                    <p className='text-justify sub_card'>
                                        Our websites are optimized for search engines, making it easier for your target audience to find you and increasing your online visibility. We optimize each site for search engines to ensure your online presence reaches the right audience, driving more leads and conversions your way.
                                    </p>
                                </div>
                                <div className='we_card'>
                                    <p className='what_we_do we_head text-left '>TRUST</p>
                                    <p className='text-justify sub_card'>Building trust between real estate businesses and prospective clients is at the core of what we do. We are proud to contribute to your success by providing you with a website that elevates your brand, communicates your integrity, and helps you establish meaningful relationships with your clients.</p>
                                </div>
                            </div>

                        </center>
                        <div className='last_Cta flex justify-between'>
                            <div>
                                <p className='chase'>
                                    CHASE                            </p>
                                <p className='sub_cta'>Architects of trust || Creators of compelling brands || Masters of impactful websites </p>
                              

                            </div>

                            <div className='grid grid-cols-2 gap-8 mt-20'>
                                <div className='flex  '>
                                    <div className='round_dot_white'>

                                    </div>
                                    <p className='serv '>Website developemnt</p>
                                </div>  <div className='flex  '>
                                    <div className='round_dot_white'>

                                    </div>
                                    <p className='serv '>Branding</p>
                                </div>
                                <div className='flex  '>
                                    <div className='round_dot_white'>

                                    </div>
                                    <p className='serv '>Website developemnt</p>
                                </div>
                                <button className='sub_button'>
                                    Let's Talk
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
