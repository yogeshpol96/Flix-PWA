"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// icons
import arrowIcon from "@/Images/home/arrow-right.svg";

//font
import { Plus_Jakarta_Sans } from "next/font/google";
import FlixReelFooter from "./FlixReelFooter";
import FlixForYouApi from "@/apis/FlixForYouApi";
import { useRouter } from "next/navigation";

// Feature images
import foryouImage0 from "@/Images/flix/for-you.png";
import featureImg1 from "@/Images/flix/feature2.jpg";
import featureImg2 from "@/Images/flix/feature3.jpg";
import Footer from "@/Components/Footer";
import ContentFooter from "./ContentFooter";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const ForYouContent = ({ data }) => {
  let router = useRouter();

  let baseUrl = "http://148.135.138.27:1337";

  function handleReadMore() {
    router.push("/flix/for-you/" + data.documentId);
  }

  function getImgUrl() {
    if (data.FeaturedImageOrVideo?.ext == "mp4") {
      return foryouImage0;
    }
    let imgName =
      data.FeaturedImageOrVideo.formats?.large?.url ||
      data.FeaturedImageOrVideo.formats?.medium?.url ||
      data.FeaturedImageOrVideo.formats?.small?.url ||
      data.FeaturedImageOrVideo.formats?.thumbnail.url;

    return !imgName ? featureImg1 : baseUrl + imgName;
  }

  return (
    <>
      <article className="relative w-full h-full flex flex-col justify-end snap-start snap-always ">
        {/* Background Image */}
        <Image src={getImgUrl()} className="absolute top-0 left-0 min-w-[200px] w-full h-full object-cover -z-[1]"
        alt="img" quality={100}  width={450} height={780} />

        {/* Hero Section */}
        <section className="section-gradient pb-[90px]">
          <Link href={"/flix/for-you/" + data.documentId} className={"gap-4 mx-4 mt-16 mb-6 flex flex-col " + plus_jakarta_sans.className} >
            <div className={"gap-2 " + plus_jakarta_sans.className}>
              <h4 className="heading-h4 custom-text-white ">{data.Title}</h4>
              <p className="mt-2 body-sm font-normal custom-text-white ">
                {data.Subtext}
              </p>
            </div>

            {/* Read More Link */}
            <div className={"body-sm-bold custom-text-white flex items-center " + plus_jakarta_sans.className }
             onClick={handleReadMore}  aria-label="Read more about effortless looks " >
              {/* <p> Read more</p>
              <Image src={arrowIcon} height={18} width={18} alt="Arrow Icon" quality={100} /> */}
            </div>

          </Link>
        </section>
        <ContentFooter positionValue="absolute" backOption="/flix"/>
      </article>
    </>
  );
};

export default ForYouContent;
