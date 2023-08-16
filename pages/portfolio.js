import Header from '@/component/Header'
import React from 'react'
import Image from 'next/image'
import Footer from '@/component/Footer'

export default function Portfolio() {
    return (
        <div>
            <Header />
            <p className='portheade'>OUR PORTOLIO</p>
            <center>
                <img className='port_img' src='./str.webp' />
            </center>

            <center className='port div'>
                <p className='porthead'> WE don’t believe in representing just any client because it pays the bills. We choose to work with only 5 new clients a year, so we can focus all our resources and attention in giving the best quality work , customer service . We CHASE Perfection & Excellence </p>
            </center>



            <div className='div'>
                <center>
                    <div className='flex top_pro  '>
                        <div className='round_dot'>

                        </div>
                        <p className='what_we_do '>Next Move</p>
                    </div>
                    <hr className='what_we_do_line mb-12' />
                </center>
                <div className='port_content'>
                    <img src='/nextp.png' />
                    <div className='flex mt-10'>
                        <button className='live_link'>
                            LIVE LINK
                            <hr/>
                        </button>
                        <button className='case'>
                            CASE STUDY
                        </button>
                    </div>
                </div>

                <center>
                    <div className='flex top_pro  '>
                        <div className='round_dot'>

                        </div>
                        <p className='what_we_do '>HOMEZ</p>
                    </div>
                    <hr className='what_we_do_line mb-12' />
                </center>
                <div className='ppp'>
                    <img src='/home.png' />
                    <div className='flex mt-10'>
                        <button className='live_link'>
                            LIVE LINK
                        </button>
                        <button className='case'>
                            CASE STUDY
                        </button>
                    </div>
                </div>

                <center>
                    <div className='flex top_pro  '>
                        <div className='round_dot'>

                        </div>
                        <p className='what_we_do '>HOT DESK</p>
                    </div>
                    <hr className='what_we_do_line mb-12' />
                </center>
                <div className='port_content'>
                    <img src='/hot.png' />
                    <div className='flex mt-10'>
                        <button className='live_link'>
                            LIVE LINK
                        </button>
                        <button className='case'>
                            CASE STUDY
                        </button>
                    </div>
                </div>

                <center>
                    <div className='flex top_pro  '>
                        <div className='round_dot'>

                        </div>
                        <p className='what_we_do '>REALITY</p>
                    </div>
                    <hr className='what_we_do_line mb-12' />
                </center>
                <div className='port_content'>
                    <img src='/rr.png' />
                    <div className='flex mt-10'>
                        <button className='live_link'>
                            LIVE LINK
                        </button>
                        <button className='case'>
                            CASE STUDY
                        </button>
                    </div>
                </div>
            </div>
            <center>
                <div className='work_ect'>
                    <p className='text-1xl'>WORK WITH US ?</p>
                </div>
                <p className='slot mt-14'>APPLY FOR A SLOT TO BECOME ONE OF FIVE </p>
                <p className='slot mb-10'>NEW CLIENTS WE SELECT EVERY YEAR</p>
            </center>
            <div className=' mb-20  book_slot'>
                <div className='booked_div'>
                    <p className='text-left sloo'>SLOT  <br /> <span className='small_'>
                        [01] </span>  </p>
                    <div className='bk_div_black'>
                        <p className='book'>Booked</p>

                    </div>
                </div>
                <div className='booked_div'>
                    <p className='text-left sloo'>SLOT  <br /> <span className='small_'>
                        [02] </span> </p>
                    <div className='bk_div_black'>
                        <p className='book'>Booked</p>

                    </div>
                </div>
                <div className='booked_div'>
                    <p className='text-left sloo'>SLOT  <br /> <span className='small_'>
                        [03] </span> </p>
                    <div className=' bk_div_black'>
                        <p className='book'>Booked</p>

                    </div>
                </div>
                <div className='booked_div_available'>
                    <p className='text-left sloo'>SLOT  <br /> <span className='small_'>
                        [04] </span> </p>
                    <div className='bk_div'>
                        <p className='book'>Avaliable</p>

                    </div>
                </div>
                <div className='booked_div_available'>
                    <p className='text-left sloo'>SLOT  <br /> <span className='small_'>
                        [05] </span> </p>
                    <div className='bk_div'>
                        <p className='book'>Avaliable</p>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
