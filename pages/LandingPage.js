import Faq from "@/component/Faq";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div>
      <Header currentPage="whatwedo" />

      <div className="landingPages">
        <div className="about_div">
          <center>
            <div className="about_head soooop">
              <p className="about_head_text">
                <span className="ought"> Building</span> Reputable brands for
                Important Real Estate Businesses
              </p>
            </div>
          </center>
        </div>
        <img src="https://ik.imagekit.io/juwoncaleb/abt_img_21hO3EFa_.webp?updatedAt=1694024803199" />

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
              <p className="what_we_do hell">Hello</p>
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
              <p>We build Websites & offer Services that</p>
              <p>Helps you focus on what matters most .</p>
              <p>SELLING BUILDINGS</p>
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
        <div className="">
          <div className="grid md:grid-cols-2 grid-cols-1 div gap-16">
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
              <div className="service_div">
                <p className="what_we_do">[01] Property Listings Management</p>
                <p className="service_sub">
                  {" "}
                  We build websites that enables YOU effortlessly add, edit, &
                  remove listings. Additionally, we implement advanced search
                  and filtering functionalities, empowering CLIENTS find
                  properties based on their specific criteria easily. This helps
                  real estate agencies streamline their listing management
                  process and enhance the overall user experience for potential
                  buyers.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "easeIn",
                stiffness: 100,
                damping: 10,
                duration: 0.4,
                delay: 0.2,
              }}
            >
              <div className="service_div">
                <p className="what_we_do">[02] Virtual Tours and Multimedia</p>
                <p className="service_sub">
                  {" "}
                  We offer solutions for virtual property tours, 360-degree
                  images, and high-quality photo galleries. This way, potential
                  buyers can have a better view of properties without physically
                  visiting them, saving time for both the agency and clients.
                </p>
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
              <div className="service_div">
                <p className="what_we_do">[03] Rank higher on Google</p>
                <p className="service_sub">
                  {" "}
                  We prioritize SEO to boost your website visibility on GOOGLE.
                  Optimizing your content, keywords, and website structure, we
                  help drive ORGANIC traffic, and increase your online presence.
                  At CHASE , you don’t need to be an SEO whizz or consultant to
                  be on page 1. We do all the hard work for you!
                </p>
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
              <div className="service_div">
                <p className="what_we_do">[04] Automated Email Campaigns</p>

                <p className="service_sub">
                  By implementing personalized campaigns for property updates,
                  market trends, and newsletters, we keep agencies connected
                  with their audience effortlessly. This proactive approach
                  helps nurture potential leads and ensures that clients are
                  always up-to-date with relevant information, fostering
                  stronger relationships and maximizing lead conversion
                  opportunities.
                </p>
              </div>
            </motion.div>
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
                    We are a new agency and do not have testimial YET . We are a
                    new agency and do not have testimial YET .
                  </p>
                </label>
                <label class="item  flex justify-around item_2" for="t-2">
                  <img
                    src="https://ik.imagekit.io/juwoncaleb/l2_K-W-ZCZ7s.webp?updatedAt=1693944815085"
                    alt="picture"
                  />
                  <p className="testimoal_text">
                    We are a new agency and do not have testimial YET . We are a
                    new agency and do not have testimial YET .
                  </p>
                </label>
                <label class="item  flex justify-around item_3" for="t-3">
                  <img
                    src="https://ik.imagekit.io/juwoncaleb/l3_FYpkL-Q3M.webp?updatedAt=1693944815245"
                    alt="picture"
                  />
                  <p className="testimoal_text">
                    We are a new agency and do not have testimial YET . We are a
                    new agency and do not have testimial YET .
                  </p>
                </label>
                <label class="item item_4  flex justify-around" for="t-4">
                  <img
                    className="luka"
                    src="https://ik.imagekit.io/juwoncaleb/luka_qqjvf113E.webp?updatedAt=1693944814681"
                    alt="picture"
                  />
                  <p className="testimoal_text">
                    We are a new agency and do not have testimial YET . We are a
                    new agency and do not have testimial YET .
                  </p>
                </label>
                <label class="item flex justify-around item_5" for="t-5">
                  <img
                    src="https://ik.imagekit.io/juwoncaleb/ff_nAie7FD-r.webp?updatedAt=1693944815035"
                    alt="picture"
                  />
                  <p className="testimoal_text">
                    We are a new agency and do not have testimial YET . We are a
                    new agency and do not have testimial YET .
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
            <div className="booked_div_available">
              <p className="text-left sloo">
                SLOT <br /> <span className="small_">[04] </span>{" "}
              </p>
              <div className="bk_div">
                <p className="book">Avaliable</p>
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
              delay: 0.4,
            }}
          >
            <div className="booked_div_available">
              <p className="text-left sloo">
                SLOT <br /> <span className="small_">[05] </span>{" "}
              </p>
              <div className="bk_div">
                <p className="book">Avaliable</p>
              </div>
            </div>
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
