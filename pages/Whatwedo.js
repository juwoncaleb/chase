import Footer from '@/component/Footer';
import Header from '@/component/Header';
import Image from 'next/image'

import React, { useState, useEffect } from 'react'

export default function Whatwedo() {
    const images = ['./nextp.png', './home.png', './hot.png', './sop.png'];
    const [isAboutDivInView, setIsAboutDivInView] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const aboutDiv = document.querySelector('.about_div');
            if (aboutDiv) {
                const boundingRect = aboutDiv.getBoundingClientRect();
                setIsAboutDivInView(boundingRect.top > window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <Header currentPage='landing' />
            <div className='about_hero flex justify-around'>
                <div>
                    <p>   <span className='ought'>We </span>make it Easy for real estate
                    </p>

                </div>
                <div className='about_image_1_div ml-1 flex'>
                    <Image className='about_image_1' src='/c1.jpg' width='200' height='200' />
                    <div className='black_round'>
                        <center>
                            <div className='flex'>
                                <p>Get Started</p>
                                <img className='ml-1' width="30" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/long-arrow-right.png" alt="long-arrow-right" />
                            </div>
                        </center>
                    </div>
                </div>

            </div>
            <div className="flex div about_hero_sub">
                <p>    Businesses
                </p>
                <Image className='about_image_2' src='/c2.jpg' width='350' height='350' />
                <p>to close deals</p>
            </div>

            <div className='div process'>
                <div className=' justify-between'>
                    <img className='heap' src='/heap.jpg' />

                </div>

                <div className='flex  '>
                    <div className='round_dot'>

                    </div>
                    <p className='what_we_do '>What we do</p>
                </div>
                <hr className='what_we_do_line' />

                <div>
                    <p className='intent_header'>
                        Time is money . Lets help you spend it the right way !
                    </p>

                    <div className='int_div  flex justify-between'>
                        <div className='int_tex'>
                            <div>
                                <p className='what_we_do mb-8 '>[01]  HURDLE</p>

                            </div>
                            <p>In the fast-paced world of Business, It can be a struggle to keep your property listings updated on your website. Frustrating to manage your all client interactions, track property inspection dates, and employee information</p>
                            <p className='mt-10'>Maintaining an up-to-date and engaging real estate website can feel like an insurmountable challenge. Manually editing, deleting, and adding properties eats away at your precious time. Coordinating property viewings with potential buyers and clients leaves you juggling endless schedules. The overwhelming task of managing employee information and tracking client data adds unnecessary stress to your already demanding workload</p>


                        </div>
                        <Image className='realImage' src='/real.jpg' width='600' height='500' />
                    </div>

                    <div>
                        <div className='flex top_pro  '>
                            <div className='round_dot'>

                            </div>
                            <p className='what_we_do '>Goal</p>
                        </div>
                        <hr className='what_we_do_line' />
                        <p className='intent_header'>
                            Creating trustworthy brands & Leading generating websites that connects real estate businesses to their clients.
                        </p>
                        <div className='flex justify-between mb-10'>

                            <div className='flex mt-10 justify-between'>

                                <div className='Problem_point'>
                                    <div>
                                        <p className='what_we_do mb-4 mt-8'>[02] MISSION</p>

                                    </div>
                                    <p>At Chase, we understand the obstacles that prevents you from carrying out business effciently . Our team of creative Designers , skilled Engineers & veteran SEO expert crafted tools that ensures these problems do not hold you back from being your best Out there . </p>

                                    <p className='int_text_two mt-14'> Dynamic Property Management</p>
                                    <p>Say GOODBYE ! to the tedious task of manual property updates. Our tools empower you to effortlessly edit, delete, and add houses to your listings on the go from the comfort of your mobile phone . Your website remains current and vibrant without draining your time and energy.</p>

                                </div>
                            </div>
                            <img className='home_img' src='./np.png' />
                        </div>
                        <center className=' mt-20'>
                            <img className='bc mb-10' src='./bc.png' />
                        </center>
                        <div className='share_build mt-8'>
                            <p className='int_text_two mt-12'> Easy Client Engagement</p>
                            <p>Share property links with interested clients effortlessly. Our tools provide a smooth experience for potential buyers to explore property details, gallery images, and relevant information. Captivate your audience with the beauty of your listings.</p>
                        </div>
                        <div className='flex mt-14 justify-between'>
                            <img className='home_img' src='./poop.jpg' />

                            <div className='flex mt-10 justify-between'>

                                <div className='Problem_point mt-20'>


                                    <p className='int_text_two'> Inspection Date Tracker</p>
                                    <p>Our platform equips you with a smart inspection date tracker, ensuring that property viewings are scheduled at the optimal time for both you and your clients. No more back-and-forth, just seamless coordination.</p>

                                </div>
                            </div>
                        </div>
                        <center className=''>
                            <img className='bc' src='./hr.png' />
                            <div className=' flex justify-around mt-14'>
                                <div className='hr_Card'>
                                    <p className='int_text_two'> Efficient Client Journey Management</p>
                                    <p>
                                        Track every step of your client's buying journey effortlessly. Our admin tool allows you to monitor client progress, from initial interest to closing the deal. Stay in control and never miss a beat.
                                    </p>
                                </div>
                                <div className='hr_Card'>
                                    <p className='int_text_two'>Streamlined Employee Information</p>
                                    <p>
                                        Simplify HR management with our employee information tool. Effortlessly manage and access vital employee data, making team coordination a breeze.
                                    </p>
                                </div>
                            </div>
                        </center>

                        <center>

                            <div className='flex top_pro  '>
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
            <Footer />
        </div>

    )
}
