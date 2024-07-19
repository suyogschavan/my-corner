import MainLayout from "@/components/layouts/MainLayout";
import MouseImageTrail from "@/components/MouseImageTrail";
import React from "react";
import { FiMousePointer } from "react-icons/fi";

const page = () => {
  return (
    <div>
      {/* <MainLayout> */}
      <h6>HI</h6>
      <MouseImageTrail
        renderImageBuffer={50}
        rotationRange={25}
        images={[
          "/static/images/about/pro.gif",
          "/static/images/swim.jpg",
          "/static/images/chess.webp",
          // "/imgs/active/3.jpg",
          "/imgs/active/4.jpg",
          "/imgs/active/5.jpg",
          "/imgs/active/6.jpg",
          "/imgs/active/7.jpg",
          "/imgs/active/8.jpg",
          "/imgs/active/9.jpg",
          "/imgs/active/10.jpg",
          "/imgs/active/11.jpg",
          "/imgs/active/12.jpg",
          "/imgs/active/13.jpg",
          "/imgs/active/14.jpg",
          "/imgs/active/15.jpg",
          "/imgs/active/16.jpg",
        ]}
      >
        <section className="grid h-screen place-content-center">
          <p className="flex items-center gap-2 text-3xl font-bold uppercase text-white">
            <FiMousePointer />
            <span>Hover me</span>
          </p>
        </section>
      </MouseImageTrail>
      {/* </MainLayout> */}
    </div>
  );
};

export default page;
