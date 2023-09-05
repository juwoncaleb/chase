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
      <div className="div team_div">
        <div className="team_pic flex   ">
          <div>
            <img className="team_member" src="./cd.png" />
            <div className="flex mt-4">
              <div className="round_dot"></div>
              <p className="what_we_do m ">Creative Director</p>
            </div>
          </div>
          <div>
            <img className="saf" src="./saf.png" />
            <div className="flex ml-10">
              <div className="round_doit "></div>
              <p className="what_we_do mt-2 "> Engineer</p>
            </div>
          </div>
        </div>
        <hr className="what_we_do_line mb-12" />
      </div>
      <Footer />
    </div>
  );
}
