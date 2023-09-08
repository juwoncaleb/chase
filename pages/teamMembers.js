import Image from "next/image";
import React from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

export default function Team() {
  return (
    <div>
      <Header currentPage="help" />

      <div className="teams mt-14">
        <center>
          <div className="about_head mr-4">
            <p className="about_head_text">
              <span className="ought"> Meet</span> the Team at
            </p>
            <p className="about_head_text lov">C H A S E</p>
          </div>
        </center>
      </div>
      <div className="team team_div">
        <div className="team_pic   gap-4  ">
          <div>
            <img className="team_member" src="./cd.png" />
            <div className="flex mt-4">
              <div className="round_dot"></div>
              <p className="what_we_do m ">Creative Director - Caleb </p>
            </div>
          </div>
          <div>
            <img className="saf" src="./saf.png" />
            <div className="flex md:ml-10">
              <div className="round_doit "></div>
              <p className="what_we_do mt-2 "> Engineer - Safiyyah</p>
            </div>
          </div>
          <div>
            <img className="saf" src="       https://ik.imagekit.io/juwoncaleb/5dd6d94c-8246-4e92-9c2b-6e679736168c_sdfEtf2Ei.webp?updatedAt=1694198684202
" />
            <div className="flex md:ml-10">
              <div className="round_doit "></div>
              <p className="what_we_do mt-2 "> Engineer - Sonia</p>
            </div>
          </div>
          <div>
            <img className="saf" src="              https://ik.imagekit.io/juwoncaleb/1671852191774_rlC1YSEJ0.webp?updatedAt=1694199111508

" />
            <div className="flex md:ml-10">
              <div className="round_doit "></div>
              <p className="what_we_do mt-2 "> Writer - Tiana</p>
            </div>
          </div>
          <div>
            <img
              className="saf"
              src="    https://ik.imagekit.io/juwoncaleb/1623587250149-removebg-preview_dDToOBVQ0.webp?updatedAt=1694027833718
"
            />
            <div className="flex md:ml-10">
              <div className="round_doit "></div>
              <p className="what_we_do mt-2 ">Sales - Robert</p>
            </div>
          </div>
        </div>
        <hr className="what_we_do_line mb-12" />
      </div>
      <Footer />
    </div>
  );
}
