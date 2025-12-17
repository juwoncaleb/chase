import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Vin from "@/component/vin";

export default function About() {
  const images = ["./nextp.png", "./home.png", "./hot.png", "./sop.png"];
  const [isAboutDivInView, setIsAboutDivInView] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const aboutDiv = document.querySelector(".about_div");
      if (aboutDiv) {
        const boundingRect = aboutDiv.getBoundingClientRect();
        setIsAboutDivInView(boundingRect.top > window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Header currentPage="landing" />
      <div className="about_hero flex justify-around">
        <div>
          <p>
            <span className="ought">Secret </span> to better marketing? Stop
            doing it by yourself.
          </p>
        </div>
      </div>
      <div className="div process">
        <div className=" justify-between">
          <center>
            <div className="flex justify-center my-10">
              <iframe
                style={{
                  display: "block",
                  margin: "auto",
                  width: "1042px",
                  maxWidth: "100%",
                  aspectRatio: "1.7708830548926013",
                }}
                src="https://killerplayer.com/watch/video/2586e38e-302e-4472-9bdb-022a4f50beec"
                frameBorder="0"
                allow="autoplay; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </center>
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
          <div className="flex mb-4 mt-16  ">
            <div className="round_dot"></div>
            <p className="what_we_do ">Our Process</p>
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
            delay: 0,
          }}
        >
          <p className="intent_header">
            Realtor & Building developer Collaboration{" "}
          </p>
        </motion.div>
        <div>
          <div className="int_div  flex justify-between">
            <div className="int_tex">
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
                <p className="mt-10">
                  Realtors are the gatekeepers to homeowners who need design
                  help right now—before listing, after buying, or during
                  renovations Grace is a realtor who sells a new home every week
                  or so. Her clients have money and usually want to furnish,
                  renovate, or redesign right after they move in. By teaming up
                  with Grace, your design business gets introduced to people who
                  are already looking for someone to help make their new home
                  beautiful. It's an easy way to get more of the right
                  clients—without chasing them.
                </p>
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
                <p className="mt-10">
                  Offer realtors a certain referral fee , for every home buyer
                  that they send over to you . This incentives them to send all
                  their clients exclusively to you. You get a steady inflow of
                  lead every week .
                </p>
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
                delay: 0.1,
              }}
            >
              <img className="" src="./ff.png" />
            </motion.div>
          </div>
          <center>
            <p className="intent_header semrush">
              Make it easier for those looking for you to find - YOU
            </p>
          </center>
          <img className="heap" src="./semrush.png" />
          <div className="">
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
              <p className="mt-10 sem">
                Your next client is already on Google, searching for someone
                like you. Not in a few months—right now. While SEO can take
                months to move the needle, Google Ads lets you skip the wait and
                show up instantly at the top of search results. Imagine a
                homeowner typing “luxury interior designer in Lagos”—and your
                name appears first. That’s not luck. That’s what we do. We use
                advanced keyword data like what you see here from Semrush to
                target exactly what your ideal clients are searching for. Then
                we craft high-converting Google Ads that position you as the
                obvious choice. No algorithms to please. No guesswork. Just real
                visibility—and real inquiries—fast. If you're serious about
                landing high-end projects, it’s not enough to be talented. You
                need to be seen. And we make sure you are.
              </p>
            </motion.div>
          </div>

          <div>
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
                <div className="flex top_pro  ">
                  <div className="round_dot"></div>
                  <p className="what_we_do ">How We Work</p>
                </div>
              </motion.div>

              <hr className="what_we_do_line mb-12" />
            </center>
            <div className="servi">
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
                <div className="flex work_process justify-between">
                  <div className="w-1/3 flex p-4">
                    <span className="tiny_num">[01]</span>
                    <p className="skill">STRATEGIES</p>
                  </div>
                  <div className="w-1/3 strategy p-4">
                    <p>Brand Identity</p>
                    <p>User Interface</p>
                    <p>User Experience $ Wireframe(UX)</p>
                    <p>Brand Positioning</p>
                    <p>Feature Definition</p>
                  </div>
                  <div className="w-1/3 p-4 dex">
                    <p>
                      We will work with your stakeholders to gather
                      requirements, define the scope of the project, and create
                      a plan to ensure that we are building the right product.
                      We meet every Wednesday & Fridays to iterate on the design
                      and development process and get feedback from you early
                      and often.
                    </p>
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
                  delay: 0.06,
                }}
              >
                <hr className="what_we_do_line mb-12" />
                <div className="flex work_process justify-between">
                  <div className="w-1/3 flex p-4">
                    <span className="tiny_num">[02]</span>
                    <p className="skill"> DESIGN</p>
                  </div>
                  <div className="w-1/3 strategy p-4">
                    <p>User Journey Mapping</p>
                    <p>Business Goal</p>
                    <p>Brand Strategy</p>
                    <p>Brand Positioning</p>
                    <p>Feature Definition</p>
                  </div>
                  <div className="w-1/3 p-4 dex">
                    <p>
                      We will create a brand and experience that is both
                      beautiful and useful. We will do this by understanding
                      what your business wants to achieve, what your users need,
                      and what makes your brand unique
                    </p>
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
                  delay: 0.06,
                }}
              >
                <hr className="what_we_do_line mb-12" />
                <div className="flex work_process justify-between">
                  <div className="w-1/3 flex p-4">
                    <span className="tiny_num">[03]</span>
                    <p className="skill"> DEVELOPMENT</p>
                  </div>
                  <div className="w-1/3 strategy p-4">
                    <p>Custom developemnt</p>
                  </div>
                  <div className="w-1/3 p-4 dex">
                    <p>
                      Using the latest technologies and methodologies, we work
                      in tight feedback loops and constant iteration to develop
                      solutions that deliver real value and delight the users.
                      Our development process is collaborative, transparent, and
                      efficient, and we take pride in delivering high-quality
                      results on time and on budget.
                    </p>
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
                  delay: 0.06,
                }}
              >
                <hr className="what_we_do_line mb-12" />
                <div className="flex work_process justify-between">
                  <div className="md:w-1/3 we_head flex p-4">
                    <span className="tiny_num">[04]</span>
                    <p className="skill"> Ads & Performance</p>
                  </div>
                  <div className="w-1/3 strategy p-4">
                    <p>Web perfomance optimization</p>
                    <p>Seo</p>
                    <p>Email Campeign</p>
                    <p>Online Marketing</p>
                  </div>
                  <div className="w-1/3 p-4 dex">
                    <p>
                      While SEO can take months to move the needle, Google Ads
                      lets you skip the wait and show up instantly at the top of
                      search results. Imagine a homeowner typing “luxury
                      interior designer in Lagos”—and your name appears first.
                      That’s not luck.
                    </p>
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
                <div className="flex top_pro  ">
                  <div className="round_dot"></div>
                  <p className="what_we_do ">Core Values</p>
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
                  delay: 0.04,
                }}
              >
                <hr className="what_we_do_line mb-12" />
                <p className="intent_header">
                  Tailored approach to fit your distinct identity, without
                  compromising your <span className="au">Authenticity</span>
                </p>
              </motion.div>

              <div className="grid grid-cols-3 we_cardee gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "easeIn",
                    stiffness: 100,
                    damping: 10,
                    duration: 0,
                    delay: 0,
                  }}
                  className="we_card"
                >
                  <div>
                    <p className="what_we_do we_head text-left ">REWARD</p>
                    <p className="text-justify sub_card">
                      Your success is our ultimate reward. We take immense pride
                      in being part of your journey to success, guiding you
                      towards building meaningful connections with your clients.
                      With Chase as your partner, you will have a dedicated team
                      by your side, ready to support your growth and elevate
                      your real estate business to new heights.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="we_card"
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
                  <div>
                    <p className="what_we_do we_head text-left">AWARENESS</p>
                    <p className="text-justify sub_card">
                      Our websites are optimized for search engines, making it
                      easier for your target audience to find you and increasing
                      your online visibility. We optimize each site for search
                      engines to ensure your online presence reaches the right
                      audience, driving more leads and conversions your way.
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
                  className="we_card"
                >
                  <div>
                    <p className="what_we_do we_head text-left ">TRUST</p>
                    <p className="text-justify sub_card">
                      Building trust between real estate businesses and
                      prospective clients is at the core of what we do. We are
                      proud to contribute to your success by providing you with
                      a website that elevates your brand, communicates your
                      integrity, and helps you establish meaningful
                      relationships with your clients.
                    </p>
                  </div>
                </motion.div>
              </div>
            </center>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
