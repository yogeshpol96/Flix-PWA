'use client';
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useSwipeable } from 'react-swipeable';

import '@/Styles/login/login.css'
import '@/Styles/flix/flix.css';

//logo
import hotAndCoolLogo from '@/Images/login/hotandcool.svg';

// feature images
import feature1 from "@/Images/login/Frame 625939.jpg";
import feature2 from "@/Images/login/Frame 625940.jpg";


const FlixSection = () => {

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => {
      // Navigate to the target page
      window.location.href = 'https://payppy.co/payppy-india'; // Replace with the desired URL
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // For desktop mouse swiping
  });

  
  return (
    <>      
      <section className="grid grid-cols-1 gap-[1px] h-full w-full " {...swipeHandlers} >
       
        {/* Video Section */}
        <div className=" min-h-[60%] w-full ">
            <Link href="flix/flix-reels" className="loginpage-video-gradient">
                <video className=" object-cover w-full h-full aspect-auto  "
                autoPlay
                muted
                loop
                >
                <source src="/login-video.mp4" type="video/mp4" />
                </video>
            </Link>
           {/* Logo */}
            <div className=" absolute pl-4 -mt-[58px] ">
              <Image src={hotAndCoolLogo}  width={58} height={44} alt="" quality={100}/>
            </div>
           
        </div>

        {/* Feature Images Section */}
        <div className="grid grid-cols-2 gap-[1px] ">

            <Link href="#" className=" login-page-photo-gradient ">
              <div className="w-full ">
                <Image src={feature1} alt="" quality={100} className=" w-full object-cover "/>
              </div>
            </Link>
          
            <Link href="#" className="login-page-photo-gradient ">
            <div className="w-full">
              <Image src={feature2} alt="" quality={100} className="w-full object-cover "/>
              </div>
            </Link>
        </div>

      </section>

    </>
  );
};

export default FlixSection;
  