"use client";
import React, {useRef } from "react";

// components
import FlixReelContent from "@/Components/FlixReelContent";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { useSwipeable } from "react-swipeable";

//icons
import arrowUp from '@/Images/flix/arrow-up.svg';
import arrowDown from '@/Images/flix/arrow-down.svg';
import Image from "next/image";

const page = () => {
  const scrollContainer = useRef(null);

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => {
      // Navigate to the target page
      window.location.href = '/flix'; // Replace with the desired URL
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // For desktop mouse swiping
  });

  const scrollUp = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        top: -window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  const scrollDown = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return ( 
    <>
      <article className="relative min-w-[200px] min-h-[400px] h-screen max-w-[52.7vh] flex flex-col items-center justify-between mx-auto scroll-smooth" {...swipeHandlers}>
       
        <Header paddingRight="pr-4" paddingLeft="pl-6"/>
        <main  ref={scrollContainer} className="snap-y snap-mandatory h-full w-full overflow-y-scroll absolute top-0 left-0">
          <FlixReelContent  videoSrc="/login-video.mp4" />
          <FlixReelContent  videoSrc="/flix.mp4" />
          <FlixReelContent  videoSrc="/motogp.mp4" />
        </main>
        
         {/* Scroll Buttons */}
         <div className="gap-3  hidden lg:fixed lg:top-[90vh] lg:pb-10 lg:right-[31%] lg:transform lg:-translate-y-1/2 lg:flex lg:flex-col lg:items-center lg:gap-4">
          <button
            onClick={scrollUp}
            className="gap-2.5 p-1.5"
            aria-label="Scroll Up" >
            <Image src={arrowUp} width={28} height={28} alt="" quality={100}/>
          </button>
          <button
            onClick={scrollDown}
            className="gap-2.5 p-1.5"
            aria-label="Scroll Down" >
          <Image src={arrowDown} width={28} height={28} alt="" quality={100}/>
          </button>
        </div>

      </article>
    </>
  );
};

export default page;