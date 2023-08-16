import Footer from '@/component/Footer';
import Header from '@/component/Header';
import Image from 'next/image'

import React, { useState, useEffect } from 'react'

export default function About() {
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
            {/* <Header currentPage='landing' /> */}
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
                                <img className='ml-1 tga_' width="30" height="64" src="https://img.icons8.com/glyph-neue/64/FFFFFF/long-arrow-right.png" alt="long-arrow-right" />
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
                                <p className='what_we_do su mb-8 '>[01]  HURDLE</p>

                            </div>
                            <p>In the fast-paced world of Business, It can be a struggle to keep your property listings updated on your website. Frustrating to manage your all client interactions, track property inspection dates, and employee information</p>
                            <p className='mt-10'>Maintaining an up-to-date and engaging real estate website can feel like an insurmountable challenge. Manually editing, deleting, and adding properties eats away at your precious time. Coordinating property viewings with potential buyers and clients leaves you juggling endless schedules. The overwhelming task of managing employee information and tracking client data adds unnecessary stress to your already demanding workload</p>


                        </div>
                        <Image className='' src='/real.jpg' width='600' height='500' />
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
                        <div className='flex  yab justify-between mb-10'>

                            <div className='flex mt-10 justify-between'>

                                <div className='Problem_point'>
                                    <div>
                                        <p className='what_we_do mb-4 mt-8'>[02] MISSION</p>

                                    </div>
                                    <p>At Chase, we understand the obstacles that prevents you from carrying out business effciently . Our team of creative Designers , skilled Engineers & veteran SEO expert crafted tools that ensures these problems do not hold you back from being the best  . </p>

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
                        <div className='flex mt-14  yabu justify-between'>
                            <img className='inspec' src='./poop.jpg' />

                            <div className='flex mt-10 justify-between'>

                                <div className='Problem_point md:mt-20 mt-6'>


                                    <p className='int_text_two'> Inspection Date Tracker</p>
                                    <p>Our platform equips you with a smart inspection date tracker, ensuring that property viewings are scheduled at the optimal time for both you and your clients. No more back-and-forth, numerous emails, phone calls, and messages, leading to confusion, missed opportunities, and wasted time! <br /> Just seamless coordination.</p>
                                    <button className='startbtn mt-6'>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <center className=''>
                            <img className='bc' src='./hr.png' />
                            <div className=' flex tabb justify-around mt-14'>
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
                                <p className='what_we_do '>How We Work</p>
                            </div>
                            <hr className='what_we_do_line mb-12' />
                        </center>
                        <div className='servi'>
                            <div className='flex work_process justify-between'>
                                <div className='w-1/3 flex p-4'>
                                    <span className='tiny_num'>[01]</span>
                                    <p className='skill'>STRATEGIES</p>
                                </div>
                                <div className='w-1/3 strategy p-4'>
                                    <p>Brand Identity</p>
                                    <p>User Interface</p>
                                    <p>User Experience $ Wireframe(UX)</p>
                                    <p>Brand Positioning</p>
                                    <p>Feature Definition</p>
                                </div>
                                <div className='w-1/3 p-4 dex'>
                                    <p>We will work with your stakeholders to gather requirements, define the scope of the project, and create a plan to ensure that we are building the right product. We meet every Wednesday & Fridays to iterate on the design and development process and get feedback from you early and often.</p>
                                </div>
                            </div>
                            <hr className='what_we_do_line mb-12' />
                            <div className='flex work_process justify-between'>
                                <div className='w-1/3 flex p-4'>
                                    <span className='tiny_num'>[02]</span>
                                    <p className='skill'> DESIGN</p>
                                </div>
                                <div className='w-1/3 strategy p-4'>
                                    <p>User Journey Mapping</p>
                                    <p>Business Goal</p>
                                    <p>Brand Strategy</p>
                                    <p>Brand Positioning</p>
                                    <p>Feature Definition</p>
                                </div>
                                <div className='w-1/3 p-4 dex'>
                                    <p>We will create a brand and experience that is both beautiful and useful. We will do this by understanding what your business wants to achieve, what your users need, and what makes your brand unique</p>
                                </div>
                            </div>
                            <hr className='what_we_do_line mb-12' />
                            <div className='flex work_process justify-between'>
                                <div className='w-1/3 flex p-4'>
                                    <span className='tiny_num'>[03]</span>
                                    <p className='skill'> DEVELOPMENT</p>
                                </div>
                                <div className='w-1/3 strategy p-4'>
                                    <p>Custom developemnt</p>
                                </div>
                                <div className='w-1/3 p-4 dex'>
                                    <p>Using the latest technologies and methodologies, we work in tight
                                        feedback loops and constant iteration to develop solutions that
                                        deliver real value and delight the users. Our development process
                                        is collaborative, transparent, and efficient, and we take pride in
                                        delivering high-quality results on time and on budget.</p>
                                </div>
                            </div>
                            <hr className='what_we_do_line mb-12' />
                            <div className='flex work_process justify-between'>
                                <div className='md:w-1/3 we_head flex p-4'>

                                    <span className='tiny_num'>[04]</span>
                                    <p className='skill'> PERFORMANCE & SEO</p>

                                </div>
                                <div className='w-1/3 strategy p-4'>
                                    <p>Web perfomance optimization</p>
                                    <p>Seo</p>
                                    <p>Email Campeign</p>
                                    <p>Online Marketing</p>

                                </div>
                                <div className='w-1/3 p-4 dex'>
                                    <p>Our websites load faster and is easy to use. We do this by compressing images, reducing the number of things that need to be loaded, and storing some of the website on servers the user  to you. We can help you with SEO and online marketing.</p>
                                </div>
                            </div>
                        </div>

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
                                <p className='sub_cta'>Giving an advantage over the competition </p>


                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}
