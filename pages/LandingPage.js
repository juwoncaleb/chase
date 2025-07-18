import Faq from "@/component/Faq";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [menu, setMenu] = useState(0);
  return (
    <div>
      <Header currentPage="whatwedo" />

      <div className="landingPages">
        <div className="about_div">
          <center>
            <div className="about_head soooop">
              <div className="header_hero_div">
                <p className="about_head_text">
                  <span className="ought"> Chase - </span>
                  Position you as the obvious choice for Luxury interior design
                  projects.{" "}
                </p>
              </div>
            </div>
          </center>
        </div>

        <img
          src="https://ik.imagekit.io/juwoncaleb/abt_img_21hO3EFa_.webp?updatedAt=1694024803199"
          class="w-full"
        />

        <div className="div wee">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeOut",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
            }}
          >
            <div className="flex ">
              <div className="round_dooot hell"></div>
              <p className="what_we_do hell">What we do</p>
            </div>
          </motion.div>

          <hr className="what_we_do_line" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeIn",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
              delay: 0.15,
            }}
          >
            <div className="mt-10 hadliner">
              Your job is to help people design their Space. Our job is to make
              yours simple as
              <span className="ought"> Possible. </span>
            </div>
          </motion.div>
        </div>
        <center>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeIn",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
            }}
          >
            <img className="video_2" src="/sapl.webp" />
          </motion.div>
        </center>

        {/* <div className="div">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeIn",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
              delay: 0,
            }}
          >
            <div className="flex testimonal_Div ">
              <div className="round_dot"></div>
              <p className="what_we_do ">Our Clients</p>
            </div>
          </motion.div>

          <hr className="what_we_do_line test_line" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeIn",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
              delay: 0,
            }}
          >
            <div class="slider">
              <input type="radio" name="testimonial" id="t-1" />
              <input type="radio" name="testimonial" id="t-2" />
              <input type="radio" name="testimonial" id="t-3" checked />
              <input type="radio" name="testimonial" id="t-4" />
              <input type="radio" name="testimonial" id="t-5" />
              <div class="testimonials">
                <label class="item item_1 flex justify-around" for="t-1">
                  <img
                    src="https://ik.imagekit.io/juwoncaleb/l1_5rFMnqERe.webp?updatedAt=1693944815115"
                    alt="picture"
                  />
                  <p className="testimoal_text">
                    My website is exactly howi wanted it . Really suits my brand{" "}
                  </p>
                </label>
                <label class="item  flex justify-around item_2" for="t-2">
                  <img src="./TIO.png" alt="picture" />
                  <p className="testimoal_text">
                    <span className="amarlux">TYLER BURROWS </span>
                  </p>
                </label>
                <label class="item  flex justify-around item_3" for="t-3">
                  <img src="./snip.png" alt="picture" />
                  <p className="testimoal_text">
                    <span className="amarlux">AMARACHI ODIFE </span>
                  </p>
                </label>

                <label class="item item_4  flex justify-around" for="t-4">
                  <img
                    className="luka"
                    src="https://ik.imagekit.io/juwoncaleb/luka_qqjvf113E.webp?updatedAt=1693944814681"
                    alt="picture"
                  />
                  <p
                    className="testimoal_text    ;
"
                  >
                    The AI sales rep that was integrated , saved us time from
                    chasing leads{" "}
                  </p>
                </label>
                <label class="item flex justify-around item_5" for="t-5">
                  <img
                    src="https://ik.imagekit.io/juwoncaleb/ff_nAie7FD-r.webp?updatedAt=1693944815035"
                    alt="picture"
                  />
                  <p className="testimoal_text">
                    I love the use of AI to automate our Businesses
                  </p>
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
          </motion.div>
        </div> */}

        <div className="mt-20">
          <motion.div
            className="div"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeIn",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
              delay: 0,
            }}
          >
            <div className="flex  testimonal_Div ">
              <div className="round_dot"></div>
              <p className="what_we_do ">How We help</p>
            </div>
            <hr className="what_we_do_line test_line" />
          </motion.div>

          <div className="div service_ptovide ">
            <div className="flex top_service justify-between"></div>
            {
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "easeIn",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.4,
                  delay: 0,
                }}
              >
                <div className="effort">
                  <p className="tag_header mt-1 text-center  ">
                    Realtors in our network sell to high-end clients weekly —
                    they are ready to refer you for their clients' next project.
                  </p>
                </div>
                <div className="sub_Serv mb-20 collapse_grid">
                  <div className="mt-4 md:flex justify-around gap-14 ">
                    <img className="sold" src="./sold.jpg" />

                    <div>
                      <div className="serv_text ">
                        <div className="mt-1">
                          <div className="flex ">
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/windows/32/FFFFFF/checkmark--v1.png"
                              alt="checkmark--v1"
                              className="mark"
                            />
                            <p className="ml-3">
                              Access to High-End Clients Without Chasing Them{" "}
                            </p>
                          </div>
                          <div className="flex mt-3 ">
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/windows/32/FFFFFF/checkmark--v1.png"
                              alt="checkmark--v1"
                              className="mark"
                            />
                            <p className="ml-3">
                              {" "}
                              Build a Steady Pipeline Through Realtor Referrals
                            </p>
                          </div>
                          <div className="flex mt-3 ">
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/windows/32/FFFFFF/checkmark--v1.png"
                              alt="checkmark--v1"
                              className="mark"
                            />
                            <p className="ml-3">
                              Eliminate Price-Sensitive Leads
                            </p>
                          </div>
                        </div>
                        <Link href="./contact">
                          <button className="getStarte">Let's talk</button>
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mb-8 mt-32">
                  <div className=" collapse_grid flex justify-between">
                    <div>
                      <p className="tag_header ">
                        Attract and convert clients <br /> with a compelling
                        website
                      </p>
                      <div className="serv_text">
                        <div className="mt-12">
                          <div className="flex ">
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/windows/32/FFFFFF/checkmark--v1.png"
                              alt="checkmark--v1"
                              className="mark"
                            />
                            <p className="ml-3">
                              Easy to use interaface for utmost client
                              experience
                            </p>
                          </div>
                          <div className="flex mt-3 ">
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/windows/32/FFFFFF/checkmark--v1.png"
                              alt="checkmark--v1"
                              className="mark"
                            />
                            <p className="ml-3">
                              Organic Traffic generation with in built SEO
                              optimization
                            </p>
                          </div>
                          <div className="flex mt-3 ">
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/windows/32/FFFFFF/checkmark--v1.png"
                              alt="checkmark--v1"
                              className="mark"
                            />
                            <p className="ml-3">
                              Brand and Showcase your Portfolio
                            </p>
                          </div>
                        </div>
                        <Link href="./contact">
                          <button className="getStarte">Let's talk</button>
                        </Link>
                      </div>
                    </div>
                    <div className="video_div">
                      <img src="./rep.png" />
                    </div>
                  </div>
                </div>
              </motion.div>
            }

            {
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "easeIn",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.4,
                  delay: 0,
                }}
              >
                <div className="mlx mb-20 sub_Serv collapse_grid md:flex justify-between">
                  <div className="video_div mr-2">
                    <img src="./skk.png" className="int" />
                  </div>

                  <div className="porto">
                    <p className="tag_header quick_Search ">
                      Fill your <span className="ought">Pipeline</span> With
                      qualified Leads{" "}
                    </p>
                    <div className="serv_text">
                      <div className="mt-8">
                        <div className="flex ">
                          <img
                            width="20"
                            height="20"
                            className="mark"
                            src="https://img.icons8.com/windows/32/FFFFFF/checkmark--v1.png"
                            alt="checkmark--v1"
                          />
                          <p className="ml-3">Google Advertising </p>
                        </div>
                        <div className="flex mt-3 ">
                          <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/windows/32/FFFFFF/checkmark--v1.png"
                            alt="checkmark--v1"
                            className="mark"
                          />
                          <p className="ml-3">Social media Advertising </p>
                        </div>
                        <div className="flex mt-3 ">
                          <img
                            width="20"
                            height="20"
                            className="mark"
                            src="https://img.icons8.com/windows/32/FFFFFF/checkmark--v1.png"
                            alt="checkmark--v1"
                          />
                          <p className="ml-3">Email Marketing</p>
                        </div>
                      </div>
                      <Link href="./contact">
                        <button className="getStarte">Let's talk</button>
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </motion.div>
            }

            {
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "easeIn",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.4,
                  delay: 0,
                }}
              ></motion.div>
            }

            {
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "easeIn",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.4,
                  delay: 0,
                }}
              >
                <div className="mt-32 md:flex collapse_grid sub_Serv ape justify-between">
                  <div>
                    <p className="tag_header mt-8 ">
                      Establish your brand on social media and get enquires for
                      Luxury Residential Projects
                    </p>
                    <div className="serv_text">
                      <div className="mt-12">
                        <div className="flex ">
                          <img
                            width="20"
                            height="20"
                            className="mark"
                            src="https://img.icons8.com/windows/32/FFFFFF/checkmark--v1.png"
                            alt="checkmark--v1"
                          />
                          <p className="ml-3">
                            Turn engagement into Real Inquiries{" "}
                          </p>
                        </div>
                        <div className="flex mt-3 ">
                          <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/windows/32/FFFFFF/checkmark--v1.png"
                            alt="checkmark--v1"
                            className="mark"
                          />
                          <p className="ml-3">
                            Build Trust Without Needing to Sell Hard{" "}
                          </p>
                        </div>
                        <div className="flex mt-3 ">
                          <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/windows/32/FFFFFF/checkmark--v1.png"
                            alt="checkmark--v1"
                            className="mark"
                          />
                          <p className="ml-3">
                            Easily Test What Resonates With Your Ideal Clients
                          </p>
                        </div>
                      </div>
                      <Link href="./contact">
                        <button className="getStarte">Let's talk</button>
                      </Link>{" "}
                    </div>
                  </div>
                  <div className="video_div">
                    <img src="./soc.png" />
                  </div>
                </div>
              </motion.div>
            }
          </div>
        </div>
        <div className="div port_div">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeIn",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
              delay: 0.4,
            }}
          >
            <div className="flex ">
              <div className="round_dot"></div>
              <p className="what_we_do ">Portfolio</p>
            </div>
            <hr className="what_we_do_line" />
          </motion.div>

          <div>
            <div className="grid md:gap-20 md:grid-cols-2 gap-8 portfoio_div">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "easeIn",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.4,
                  delay: 0,
                }}
              >
                <a
                  href="https://nextmove-agency.netlify.app/
"
                >
                  <div>
                    <Image
                      className="cursor-pointer"
                      width="600"
                      height="550"
                      src="https://ik.imagekit.io/juwoncaleb/nextp_uTru8aWvc.webp?updatedAt=1693944049478"
                    />
                  </div>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "easeIn",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.4,
                  delay: 0.2,
                }}
              >
                <a href="https://amarlux-realty.vercel.app/">
                  <Image
                    className="cursor-pointer"
                    width="600"
                    height="550"
                    src="/amar.png"
                  />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "easeIn",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.4,
                  delay: 0.3,
                }}
              >
                {" "}
                <div>
                  <a href="https://realty-template.webflow.io/">
                    <Image
                      className="cursor-pointer"
                      width="600"
                      height="550"
                      src="https://ik.imagekit.io/juwoncaleb/sop_91JOjYH6b.webp?updatedAt=1693944049511"
                    />
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "easeIn",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.4,
                  delay: 0.4,
                }}
              >
                <a href="https://hot-desk-safiyah07.vercel.app/">
                  <Image
                    className="cursor-pointer"
                    width="600"
                    height="550"
                    src="https://ik.imagekit.io/juwoncaleb/hot_TmWAugePM.webp?updatedAt=1693944049498"
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        <center>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeIn",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
              delay: 0,
            }}
          >
            <div className="work_ect">
              <Link href="./contact">
                <p className="text-1xl">WORK WITH US ?</p>
              </Link>
            </div>
            <p className="slot md:mt-14 mt-4">
              APPLY FOR A SLOT TO BECOME ONE OF FIVE{" "}
            </p>
            <p className="slot mb-10">NEW CLIENTS WE SELECT EVERY 3 MONTHS </p>
          </motion.div>
        </center>
        <div className="  book_slot">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeIn",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
              delay: 0,
            }}
          >
            <div className="booked_div">
              <p className="text-left sloo">
                SLOT <br /> <span className="small_">[01] </span>{" "}
              </p>
              <div className="bk_div_black">
                <p className="book">Booked</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeIn",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
              delay: 0.1,
            }}
          >
            <div className="booked_div">
              <p className="text-left sloo">
                SLOT <br /> <span className="small_">[02] </span>{" "}
              </p>
              <div className="bk_div_black">
                <p className="book">Booked</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeIn",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
              delay: 0.2,
            }}
          >
            <div className="booked_div">
              <p className="text-left sloo">
                SLOT <br /> <span className="small_">[03] </span>{" "}
              </p>
              <div className=" bk_div_black">
                <p className="book">Booked</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeIn",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
              delay: 0.3,
            }}
          >
            <Link href="./contact">
              <div className="booked_div_available">
                <p className="text-left sloo ">
                  SLOT <br /> <span className="small_">[04] </span>{" "}
                </p>
                <div className="bk_div">
                  <p className="book">Avaliable</p>
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeIn",
              stiffness: 100,
              damping: 10,
              duration: 0.4,
              delay: 0.4,
            }}
          >
            <Link href="./contact">
              <div className="booked_div_available">
                <p className="text-left sloo">
                  SLOT <br /> <span className="small_">[05] </span>{" "}
                </p>
                <div className="bk_div">
                  <p className="book">Avaliable</p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "easeIn",
            stiffness: 100,
            damping: 10,
            duration: 0.4,
            delay: 0,
          }}
        >
          <div className="div">
            <Faq />
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
