import Header from "@/component/Header";
import React from "react";
import Image from "next/image";
import Footer from "@/component/Footer";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div>
      <Header />
      <p className="portheade">OUR PORTOLIO</p>
      <center>
        <img className="port_img" src="./str.webp" />
      </center>

      <center className="port div">
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
          <p className="porthead">
            {" "}
            WE don’t believe in representing just any client because it pays the
            bills. We choose to work with only 5 new clients a year, so we can
            focus all our resources and attention in giving the best quality
            work , customer service . We CHASE Perfection & Excellence{" "}
          </p>
        </motion.div>
      </center>

      <div className="div">
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
              <p className="what_we_do ">Next Move</p>
            </div>
            <hr className="what_we_do_line mb-12" />
          </motion.div>
        </center>
        <div className="port_content">
          <a
            href="https://nextmove-agency.netlify.app/
"
          >
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
              <img                       src="https://ik.imagekit.io/juwoncaleb/nextp_uTru8aWvc.webp?updatedAt=1693944049478"
 />
            </motion.div>
          </a>
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
            <div className="flex mt-10">
              <a
                href="https://nextmove-agency.netlify.app/"
                className="live_link"
              >
                LIVE LINK
                <hr />
              </a>
              <button className="case">CASE STUDY</button>
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
              delay: 0.1,
            }}
          >
            <div className="flex top_pro  ">
              <div className="round_dot"></div>
              <p className="what_we_do ">HOMEZ</p>
            </div>
            <hr className="what_we_do_line mb-12" />
          </motion.div>
        </center>
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
          <a href="https://homez-five.vercel.app/" className="ppp">
            <img                     src="https://ik.imagekit.io/juwoncaleb/home__gFPKHO9x.webp?updatedAt=1693944049491"
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
            delay: 0.1,
          }}
        >
          <div className="flex mt-10">
            <a href="https://homez-five.vercel.app/" className="live_link">
              LIVE LINK
            </a>
            <button className="case">CASE STUDY</button>
          </div>
        </motion.div>

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
              <p className="what_we_do ">HOT DESK</p>
            </div>
            <hr className="what_we_do_line mb-12" />
          </motion.div>
        </center>
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
          <a href="https://hot-desk-safiyah07.vercel.app/">
            <div className="port_content">
              <img                     src="https://ik.imagekit.io/juwoncaleb/hot_TmWAugePM.webp?updatedAt=1693944049498"
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
            delay: 0.1,
          }}
        >
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
            <div className="flex mt-10">
              <a
                href="https://hot-desk-safiyah07.vercel.app/"
                className="live_link"
              >
                LIVE LINK
              </a>
              <button className="case">CASE STUDY</button>
            </div>
          </motion.div>
        </motion.div>

        <center>
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
            <div className="flex top_pro  ">
              <div className="round_dot"></div>
              <p className="what_we_do ">REALITY</p>
            </div>
            <hr className="what_we_do_line mb-12" />
          </motion.div>
        </center>
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
          <div className="port_content">
            <img                     src="https://ik.imagekit.io/juwoncaleb/sop_91JOjYH6b.webp?updatedAt=1693944049511"
 />
            <div className="flex mt-10">
              <button className="live_link">LIVE LINK</button>
              <button className="case">CASE STUDY</button>
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
      <Footer />
    </div>
  );
}
