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
                <span className="ought"> Helping </span> Important Real estate
                Businesses <br /> Close more Deals , While Doing Less
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
              Grow your business with our suite of digital product & services,
              attract leads organically & conveniently increasing your{" "}
              <span className="ought"> YEARLY </span>revenue.
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
                    My website is exactly howi wanted it . Really suits my brand{" "}
                  </p>
                </label>
                <label class="item  flex justify-around item_2" for="t-2">
                  <img
                    src="https://ik.imagekit.io/juwoncaleb/l2_K-W-ZCZ7s.webp?updatedAt=1693944815085"
                    alt="picture"
                  />
                  <p className="testimoal_text">
                    i really enjoyed the customer service from juwoncaleb and
                    his enginners from CHASE
                  </p>
                </label>
                  <label class="item  flex justify-around item_3" for="t-3">
                    <img src="./ama.png" alt="picture" />
                    <p className="testimoal_text">
                      I needed a facelift with my website. The Team at Chase
                      Inc, were able to do just so. I LOVE IT{" "} <br/>
                      <span href="https://amaarlux.com/" className="amarlux">
                        LINK
                      </span>
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
        </div>

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
              <p className="what_we_do ">Testimonial</p>
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
                <div className=" mb-16">
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
                              Brand and position your agency as a professional{" "}
                            </p>
                          </div>
                        </div>
                        <Link href="./contact">
                          <button className="getStarte">Get Started</button>
                        </Link>
                      </div>
                    </div>
                    <div className="video_div">
                      <video autoPlay loop muted preload="auto">
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
                <div className="mlx sub_Serv collapse_grid md:flex justify-between">
                  <div className="video_div mr-20">
                    <video autoPlay loop muted preload="auto">
                      <source
                        src="https://ik.imagekit.io/juwoncaleb/IDX-Brokerages-1168x821-ver-3-mp4-fallback_H.264_DvWNGHdQl.mp4?updatedAt=1695589641024"
                        type="video/mp4"
                      />
                    </video>
                  </div>

                  <div className="md:ml-14 mt-14">
                    <p className="tag_header quick_Search ">
                      You do not have  <span className="ought">JUMP</span>{" "}
through hoops to get a consistent lead in your                       <span className="ought">PIPLINE</span>
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
                          <p className="ml-3">Google ads </p>
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
Social media brand awareness                          </p>
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
Search engine optimization                          </p>
                        </div>
                      </div>
                      <Link href="./contact">
                        <button className="getStarte">Get Started</button>
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
              >
                <div className="effort">
                  <p className="tag_header mt-16 text-center  ">
                    Effortlessly engage, qualify, and gather information from
                    potential customers using our seamless VideoChat and text
                    chatbots.
                  </p>
                </div>
                <div className="sub_Serv collapse_grid">
                  <div className="mt-4 md:flex justify-between ">
                    <div>
                      <div className="serv_text ">
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
                        <Link href="./contact">
                          <button className="getStarte">Get Started</button>
                        </Link>{" "}
                      </div>
                    </div>
                    <iframe
                      className="iframe"
                      width="560"
                      height="315"
                      src="https://imagekit.io/player/embed/juwoncaleb/Untitled_Project_V1%20(1)_0-Oo2sOYF.mp4?thumbnail=https%3A%2F%2Fik.imagekit.io%2Fjuwoncaleb%2FUntitled_Project_V1%2520%281%29_0-Oo2sOYF.mp4%2Fik-thumbnail.jpg&updatedAt=1699439076852"
                      title="ImageKit video player"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    >
                      {" "}
                    </iframe>
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
                <div className="mt-24 md:flex collapse_grid sub_Serv ape justify-between">
                  <div>
                    <p className="tag_header mt-8 ">
                      Establish your brand on social media as an Authority in
                      Real estate
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
                      <Link href="./contact">
                        <button className="getStarte">Get Started</button>
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
                <a href="https://amaarlux.com/" >
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
