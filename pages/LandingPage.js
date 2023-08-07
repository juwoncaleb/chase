import Faq from '@/component/Faq'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'

export default function LandingPage() {

    return (
        <div>
            <Header currentPage='whatwedo' />


            <div className='landingPages'>
                <div className='about_div'>
                    <center>
                        <div className='about_head'>
                            <p className='about_head_text'>
                                <span className='ought'> Building</span> Reputable brands for Important Real Estate Businesses 
                            </p>
                        </div>
                    </center>
                    <img className='mt-10' src='./abt_img.png' />

                </div>
                <div className='div wee'>
                    <div className='flex '>
                        <div className='round_dot'>

                        </div>
                        <p className='what_we_do'>What we do</p>
                    </div>
                    <hr className='what_we_do_line' />
                    <div className='mt-10 hadliner'>
                        <p>We build Web Solutions that</p>
                        <p>Helps you focus on what matters most .</p>
                        <p>SELLING BUILDINGS</p>
                    </div>
                </div>
                <center>
                    <img className='video_2' src='./BB.png' />
                </center>
                <div className=''>
                    <div className='grid grid-cols-2 div gap-16'>
                        <div className='service_div'>
                            <p className='what_we_do'>[01] Property Listings Management</p>
                            <p className='service_sub'> We provide custom website with  robust content management system (CMS) enabling YOU  effortlessly add, edit, & remove property listings. Additionally, we implement advanced search and filtering functionalities, empowering CLIENTS find properties based on their specific criteria easily. With our solution, real estate agencies can streamline their listing management process and enhance the overall user experience for potential buyers.</p>

                        </div>
                        <div className='service_div'>
                            <p className='what_we_do'>[02] Virtual Tours and Multimedia</p>
                            <p className='service_sub'> We offer solutions for virtual property tours, 360-degree images, and high-quality photo galleries. This way, potential buyers can have a better view of properties without physically visiting them, saving time for both the agency and clients.</p>

                        </div>
                        <div className='service_div'>
                            <p className='what_we_do'>[03] Rank higher on Google</p>
                            <p className='service_sub'> We prioritize SEO to boost your real estate website's visibility on search engines. By optimizing your content, keywords, and website structure, we help drive ORGANIC traffic, improve search engine rankings, and increase your online presence. At CHASE , you don’t need to be an SEO whizz or consultant to be on page 1. We do all the hard work for you!</p>
                        </div>
                        <div className='service_div'>
                            <p className='what_we_do'>[04] Automated Email Campaigns</p>

                            <p className='service_sub'>By implementing personalized campaigns for property updates, market trends, and newsletters, we keep agencies connected with their audience effortlessly. This proactive approach helps nurture potential leads and ensures that clients are always up-to-date with relevant information, fostering stronger relationships and maximizing lead conversion opportunities.</p>
                        </div>
                    </div>
                </div >
                <div className='div port_div'>
                    <div className='flex '>
                        <div className='round_dot'>

                        </div>
                        <p className='what_we_do '>Portfolio</p>
                    </div>
                    <hr className='what_we_do_line' />
                    <div>
                        <div>

                        </div>
                        <div className='grid gap-20 grid-cols-2 portfoio_div'>
                            <div>
                                <Image className='cursor-pointer' width='600' height='550' src='/nextp.png' />
                            </div>
                            <div>
                                <Image className='cursor-pointer' width='600' height='550' src='/home.png' />
                            </div>
                            <div>
                                <Image className='cursor-pointer' width='600' height='550' src='/sop.png' />
                            </div>
                            <div>
                                <Image className='cursor-pointer' width='600' height='550' src='/hot.png' />
                            </div>

                        </div>
                    </div>
                    <div className='flex testimonal_Div '>
                        <div className='round_dot'>

                        </div>
                        <p className='what_we_do '>Testimonial</p>
                    </div>
                    <hr className='what_we_do_line test_line' />
                    <div class="slider">
                        <input type="radio" name="testimonial" id="t-1" />
                        <input type="radio" name="testimonial" id="t-2" />
                        <input type="radio" name="testimonial" id="t-3" checked />
                        <input type="radio" name="testimonial" id="t-4" />
                        <input type="radio" name="testimonial" id="t-5" />
                        <div class="testimonials">
                            <label class="item item_1 flex justify-around" for="t-1">
                                <img src="./l1.png" alt="picture" />
                                <p className='testimoal_text'>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                            </label>
                            <label class="item  flex justify-around item_2" for="t-2">
                                <img src="./l2.png" alt="picture" />
                                <p className='testimoal_text'>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                            </label>
                            <label class="item  flex justify-around item_3" for="t-3">
                                <img src="./l3.png" alt="picture" />
                                <p className='testimoal_text'>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                            </label>
                            <label class="item item_4  flex justify-around" for="t-4">
                                <img className='luka' src="./luka.png" alt="picture" />
                                <p className='testimoal_text'>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                            </label>
                            <label class="item flex justify-around item_5" for="t-5">
                                <img src="./ff.png" alt="picture" />
                                <p className='testimoal_text'>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
                            </label>
                        </div>
                        <div class="dots">
                            <label for="t-1"></label>
                            <label for="t-2"></label>
                            <label for="t-3"></label>
                            <label for="t-4"></label>
                            <label for="t-5"></label>
                        </div>
                    </div>
                </div>
                <div className='div'>
                    <div className='flex testimonal_Div  '>
                        <div className='round_dot'>

                        </div>
                        <p className='what_we_do '>PACKAGES</p>
                    </div>
                    <hr className='what_we_do_line test_line' />
                </div>
                <div className='flex justify-center div'>
                    <div className='price_Card mr-10'>
                        <p className='package'>Silver </p>
                        <button className='start'>
                            Get Started
                        </button>
                        <div className='price_con'>
                            <div className='flex point'>
                                <img className='ver' width="25" height="20" src="https://img.icons8.com/quill/50/FFFFFF/approval.png" alt="approval" />
                                <p> Homepage, property listings page, contact form, and blog.
                                </p>
                            </div>
                            <div className='flex point'>
                                <img className='ver' width="25" height="20" src="https://img.icons8.com/quill/50/FFFFFF/approval.png" alt="approval" />


                                <p> Content management system for properties  and Blogs.
                                </p>
                            </div>

                            <div className='flex point'>
                                <img className='ver' width="25" height="20" src="https://img.icons8.com/quill/50/FFFFFF/approval.png" alt="approval" />

                                <p> SEO services, keyword research and page speed optimization.
                                </p>
                            </div>
                            <div className='flex point'>
                                <img className='ver' width="25" height="20" src="https://img.icons8.com/quill/50/FFFFFF/approval.png" alt="approval" />


                                <p> Analytics email performance Tracking .</p>

                            </div>
                            <div className='flex point'>
                                <img className='ver' width="25" height="20" src="https://img.icons8.com/quill/50/FFFFFF/approval.png" alt="approval" />

                                <p>Inspection Date Schedule, Keep track of  clients' inspection appointments,  date, time, and location.

                                </p>
                            </div>
                            <div className='flex point'>
                                <img className='ver' width="25" height="20" src="https://img.icons8.com/quill/50/FFFFFF/approval.png" alt="approval" />

                                <p>
                                    <span className='bill'> $1200/Quaterly</span> Standard maintenance  website backups, security updates, and bug fixes .

                                </p>
                            </div>

                        </div>

                    </div>
                    <div className='price_Card'>
                        <p className='package_godl'>Gold</p>
                        <button className='start'>
                            Get Started
                        </button>
                        <div className='price_con'>
                            <div className='flex point'>
                                <img className='ver' width="25" height="20" src="https://img.icons8.com/quill/50/FFFFFF/approval.png" alt="approval" />


                                <p>Complex website features, such as a property search, virtual tours, and mortgage calculators.
                                </p>
                            </div>
                            <div className='flex point'>
                                <img className='ver' width="25" height="20" src="https://img.icons8.com/quill/50/FFFFFF/approval.png" alt="approval" />


                                <p> Content management system for properties  and Blogs.
                                </p>
                            </div>
                            <div className='flex point'>
                                <img className='ver' width="25" height="20" src="https://img.icons8.com/quill/50/FFFFFF/approval.png" alt="approval" />

                                <p> Analytics email performance Tracking .</p>

                            </div>

                            <div className='flex point'>
                                <img className='ver' width="25" height="20" src="https://img.icons8.com/quill/50/FFFFFF/approval.png" alt="approval" />

                                <p> SEO services, keyword research and page speed optimization.
                                </p>
                            </div>

                            <div className='flex point'>
                                <img className='ver' width="25" height="20" src="https://img.icons8.com/quill/50/FFFFFF/approval.png" alt="approval" />

                                <p>
                                    Client Management System , track Clients,   contact information,  interests, and  progress in the home buying process.
                                </p>
                            </div>



                            <div className='flex point'>
                                <img className='ver' width="25" height="20" src="https://img.icons8.com/quill/50/FFFFFF/approval.png" alt="approval" />

                                <p>Employee Tracking System Track employee time, tasks, and performance.
                                    .</p>
                            </div>

                            <div className='flex point'>
                                <img className='ver' width="25" height="20" src="https://img.icons8.com/quill/50/FFFFFF/approval.png" alt="approval" />

                                <p>Inspection Date Schedule, Keep track of  clients' inspection appointments,  date, time, and location.

                                </p>
                            </div>
                            <div className='flex point'>
                                <img className='ver' width="25" height="20" src="https://img.icons8.com/quill/50/FFFFFF/approval.png" alt="approval" />


                                <p className='mb-6'>
                                    <span className='bill'> $1500/Quaterly</span> : Standard maintenance, website backups, security updates, and bug fixes .

                                </p>
                            </div>



                        </div>
                    </div>


                </div>
                <Faq />


            </div >
            <Footer />
        </div>

    )
}
