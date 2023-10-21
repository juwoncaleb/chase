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
              <p className="about_head_text">
                <span className="ought"> Helping </span> Important Real estate Businesses <br/> Close more Deals , While Doing Less
                
              </p>
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
              <p className="what_we_do hell">Chase</p>
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
              <p>Our website and makerting solutions </p>
              <p>allows Grow your business and </p>
              <p>Focus on what matters most</p>
              <p className="ought"> - Closing Deals</p>
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
            <img
              className="video_2"
              src="https://ik.imagekit.io/juwoncaleb/BB_SYKP4DKq5.webp?updatedAt=1693943772593"
            />
          </motion.div>
        </center>

        <div className="div">
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
              <p className="what_we_do ">Testimonial</p>
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
                    CHASE , Automated all the mundane tasks that took 50% of our time 
                  </p>
                </label>
                <label class="item  flex justify-around item_2" for="t-2">
                  <img
                    src="https://ik.imagekit.io/juwoncaleb/l2_K-W-ZCZ7s.webp?updatedAt=1693944815085"
                    alt="picture"
                  />
                  <p className="testimoal_text">
                   i really enjoyed the customer service from juwoncaleb and his enginners from CHASE
                  </p>
                </label>
                <label class="item  flex justify-around item_3" for="t-3">
                  <img
                    src="https://ik.imagekit.io/juwoncaleb/l3_FYpkL-Q3M.webp?updatedAt=1693944815245"
                    alt="picture"
                  />
                  <p className="testimoal_text">
                   My website accurately represents my company well and i spend less on ADS 
                  </p>
                </label>
                <label class="item item_4  flex justify-around" for="t-4">
                  <img
                    className="luka"
                    src="https://ik.imagekit.io/juwoncaleb/luka_qqjvf113E.webp?updatedAt=1693944814681"
                    alt="picture"
                  />
                  <p className="testimoal_text">
                   I love the CRM , that was integrated to the backend , it helped all our agents
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
        </div>
        <div className="">
          <center>
            <div className="suiteService mb-10">
              <p className="text-center solo ">
                Grow your business with our suite of digital product & services
                ,attract leads organically & convinently increasing your{" "}
                <span className="ought"> YEARLY </span>revenue.
              </p>
            </div>
          </center>
          <div className="div service_ptovide bg-black">
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
                <div className="">
                  <div className="mt-10 collapse_grid grid  md:grid-cols-2 gap-8">
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
                              Automatic property inspection date scheduler
                            </p>
                          </div>
                        </div>

                        <button className="getStarte">Get Started</button>
                      </div>
                    </div>
                    <div className="video_div">
                      <video autoPlay loop>
                        <source
                          src="https://ik.imagekit.io/juwoncaleb/Jade-Mills-Frame-13-1440x900_H.264_chJ27IPIR.mp4?updatedAt=1695588505036"
                          type="video/mp4"
                        />
                      </video>
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
                <div className="mt-10 sub_Serv collapse_grid md:flex justify-between">
                  <div className="video_div mr-20">
                    <video autoPlay loop>
                      <source
                        src="https://ik.imagekit.io/juwoncaleb/IDX-Brokerages-1168x821-ver-3-mp4-fallback_H.264_DvWNGHdQl.mp4?updatedAt=1695589641024"
                        type="video/mp4"
                      />
                    </video>
                  </div>

                  <div className="ml-14">
                    <p className="tag_header quick_Search ">
                      Quick Search with an <span className="ought">IDX</span>{" "}
                      tool,fetching listings Quicky from the{" "}
                      <span className="ought">MLS</span>
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
                          <p className="ml-3">Fast MLS sync time</p>
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
                            Home search portal branded with your business
                          </p>
                        </div>
                        <div className="flex mt-3 ">
                          <img
                            width="20"
                            height="20"
                            className="mark"
                            src="https://img.icons8.com/windows/32/FFFFFF/checkmark--v1.png"
                            alt="checkmark--v1"
                          />
                          <p className="ml-3">
                            Optimized for qualified buyer lead generation{" "}
                          </p>
                        </div>
                      </div>

                      <button className="getStarte">Get Started</button>
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
                <div className="sub_Serv collapse_grid">
                  <p className="tag_header text-center  ">
                    Generate qualified leads with On-Demand Ads & discovered on
                    Google with SEO
                  </p>
                  <div className="mt-10 md:flex justify-between ">
                    <div>
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
                              Drive quality organic traffic to your website
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
                            <p className="ml-3">Lower cost per lead </p>
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
                              Convert leads from Google, Facebook, and Instagram
                              ads into close deals
                            </p>
                          </div>
                        </div>

                        <button className="getStarte st">Get Started</button>
                      </div>
                    </div>
                    <div className="video_div">
                      <img src="./lap.png" />
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
                <div className="mt-10 md:flex collapse_grid sub_Serv justify-between">
                  <div>
                    <p className="tag_header ">
                      Establish your brand on social media
                      as an Authority in Real estate
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
                            Save time from managing your social{" "}
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
                            Build your brand as an Authority in Real estate{" "}
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
                            Increase engagement & following from your Target
                            Market
                          </p>
                        </div>
                      </div>

                      <button className="getStarte">Get Started</button>
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
                <a href="https://homez-five.vercel.app/">
                  <Image
                    className="cursor-pointer"
                    width="600"
                    height="550"
                    src="https://ik.imagekit.io/juwoncaleb/home__gFPKHO9x.webp?updatedAt=1693944049491"
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
                  <Image
                    className="cursor-pointer"
                    width="600"
                    height="550"
                    src="https://ik.imagekit.io/juwoncaleb/sop_91JOjYH6b.webp?updatedAt=1693944049511"
                  />
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
            <div className="flex testimonal_Div  ">
              <div className="round_dot"></div>
              <p className="what_we_do ">PACKAGES</p>
            </div>
            <hr className="what_we_do_line test_line" />
          </div>
        </motion.div>

        <div className="flex packages justify-center div">
          <motion.div
            className="price_Card md:mr-6"
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
            <div>
              <p className="package">Silver </p>
              <button className="start">Get Started</button>
              <div className="price_con">
                <div className="flex point">
                  <img
                    className="ver"
                    width="25"
                    height="20"
                    src="https://img.icons8.com/quill/50/FFFFFF/approval.png"
                    alt="approval"
                  />
                  <p>
                    {" "}
                    Homepage, property listings page, contact form, and blog.
                  </p>
                </div>
                <div className="flex point">
                  <img
                    className="ver"
                    width="25"
                    height="20"
                    src="https://img.icons8.com/quill/50/FFFFFF/approval.png"
                    alt="approval"
                  />

                  <p> Content management system for properties and Blogs.</p>
                </div>

                <div className="flex point">
                  <img
                    className="ver"
                    width="25"
                    height="20"
                    src="https://img.icons8.com/quill/50/FFFFFF/approval.png"
                    alt="approval"
                  />

                  <p>
                    {" "}
                    SEO services, keyword research and page speed optimization.
                  </p>
                </div>
                <div className="flex point">
                  <img
                    className="ver"
                    width="25"
                    height="20"
                    src="https://img.icons8.com/quill/50/FFFFFF/approval.png"
                    alt="approval"
                  />

                  <p> Analytics email performance Tracking .</p>
                </div>
                <div className="flex point">
                  <img
                    className="ver"
                    width="25"
                    height="20"
                    src="https://img.icons8.com/quill/50/FFFFFF/approval.png"
                    alt="approval"
                  />

                  <p>
                    Inspection Date Schedule, Keep track of clients inspection
                    appointments, date, time, and location.
                  </p>
                </div>
                <div className="flex point">
                  <img
                    className="ver"
                    width="25"
                    height="20"
                    src="https://img.icons8.com/quill/50/FFFFFF/approval.png"
                    alt="approval"
                  />

                  <p>
                    Standard maintenance website backups, security updates, and
                    bug fixes .
                  </p>
                </div>
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
            <div className="price_Card md:mr-6">
              <p className="package_godl">Gold</p>
              <button className="start">Get Started</button>
              <div className="price_con">
                <div className="flex point">
                  <img
                    className="ver"
                    width="25"
                    height="20"
                    src="https://img.icons8.com/quill/50/FFFFFF/approval.png"
                    alt="approval"
                  />

                  <p>
                    Complex website features, such as a property search, virtual
                    tours, and mortgage calculators.
                  </p>
                </div>
                <div className="flex point">
                  <img
                    className="ver"
                    width="25"
                    height="20"
                    src="https://img.icons8.com/quill/50/FFFFFF/approval.png"
                    alt="approval"
                  />

                  <p> Content management system for properties and Blogs.</p>
                </div>
                <div className="flex point">
                  <img
                    className="ver"
                    width="25"
                    height="20"
                    src="https://img.icons8.com/quill/50/FFFFFF/approval.png"
                    alt="approval"
                  />

                  <p> Analytics email performance Tracking .</p>
                </div>

                <div className="flex point">
                  <img
                    className="ver"
                    width="25"
                    height="20"
                    src="https://img.icons8.com/quill/50/FFFFFF/approval.png"
                    alt="approval"
                  />

                  <p>
                    {" "}
                    SEO services, keyword research and page speed optimization.
                  </p>
                </div>

                <div className="flex point">
                  <img
                    className="ver"
                    width="25"
                    height="20"
                    src="https://img.icons8.com/quill/50/FFFFFF/approval.png"
                    alt="approval"
                  />

                  <p>
                    Client Management System , track Clients, contact
                    information, interests, and progress in the home buying
                    process.
                  </p>
                </div>

                <div className="flex point">
                  <img
                    className="ver"
                    width="25"
                    height="20"
                    src="https://img.icons8.com/quill/50/FFFFFF/approval.png"
                    alt="approval"
                  />

                  <p>
                    Employee Tracking System Track employee time, tasks, and
                    performance. .
                  </p>
                </div>

                <div className="flex point">
                  <img
                    className="ver"
                    width="25"
                    height="20"
                    src="https://img.icons8.com/quill/50/FFFFFF/approval.png"
                    alt="approval"
                  />

                  <p>
                    Inspection Date Schedule, Keep track of clients inspection
                    appointments, date, time, and location.
                  </p>
                </div>
                <div className="flex point">
                  <img
                    className="ver"
                    width="25"
                    height="20"
                    src="https://img.icons8.com/quill/50/FFFFFF/approval.png"
                    alt="approval"
                  />

                  <p className="mb-6">
                    Standard maintenance, website backups, security updates, and
                    bug fixes .
                  </p>
                </div>
              </div>
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
              delay: 0,
            }}
          >
            <div className="work_ect">
              <p className="text-1xl">WORK WITH US ?</p>
            </div>
            <p className="slot md:mt-14 mt-4">
              APPLY FOR A SLOT TO BECOME ONE OF FIVE{" "}
            </p>
            <p className="slot mb-10">NEW CLIENTS WE SELECT EVERY YEAR</p>
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
                <p className="text-left sloo">
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
