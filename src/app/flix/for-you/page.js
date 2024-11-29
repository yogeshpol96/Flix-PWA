"use client";
import React, { useEffect, useRef, useState } from "react";

// Feature images
import foryouImage0 from "@/Images/flix/for-you.png";
import featureImg1 from "@/Images/flix/feature2.jpg";
import featureImg2 from "@/Images/flix/feature3.jpg";

//icons
import arrowUp from '@/Images/flix/arrow-up.svg';
import arrowDown from '@/Images/flix/arrow-down.svg';

// Components
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ForYouContent from "@/Components/ForYouContent";
import Image from "next/image";
import FlixForYouApi from "@/apis/FlixForYouApi";

const Page = () => {
  const scrollContainer = useRef(null);

  let[response,setResponse]=useState('');
      //for api data
      function getFlixData()
      {
        FlixForYouApi()
        .then((data)=>{
          setResponse(data.data);
        })
        .catch((error)=>{
          console.log(error);
        })
      }

      useEffect(()=>{
        getFlixData()
      },[])


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

   let imgs={
    0:foryouImage0,
    1:featureImg1,
    2:featureImg2
   }

  return (
    <>
      <article className="h-screen relative min-w-[200px] min-h-[200px] max-w-[52.7vh] flex flex-col items-center justify-between mx-auto">
      <Header />
      <main  className="absolute top-0 left-0 h-full w-full">
          {/* h-full w-full  */}
          <section ref={scrollContainer}  className="h-full snap-y snap-mandatory overflow-y-scroll " >
            {response.length>0&&response.map((element,index)=>{
             return  <ForYouContent data={element} key={index} />
            })}
            {/* <ForYouContent srcImage={featureImg2} /> */}
            {/* <ForYouContent srcImage={featureImg3} /> */}
          </section>
        </main>
        {/* <Footer centerIcon="hidden" /> */}

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

export default Page;








// "use client";
// import React from "react";

// //  feature image
// import foryouImage from "@/Images/flix/for-you.png";
// import featureImg2 from "@/Images/flix/feature2.jpg";
// import featureImg3 from "@/Images/flix/feature3.jpg";

// // components
// import Header from "@/Components/Header";
// import Footer from "@/Components/Footer";
// import ForYouContent from "@/Components/ForYouContent";

// const page = () => {
//   return (
//     <>
//       <main className="relative min-w-[200px] min-h-[200px] h-screen max-w-[52.7vh] flex flex-col items-center justify-between mx-auto ">
//         <Header />
//         <section className="snap-y snap-mandatory h-full w-full overflow-y-scroll">
//           <ForYouContent srcImage={foryouImage} />
//           <ForYouContent srcImage={featureImg2} />
//           <ForYouContent srcImage={featureImg3} />
//         </section>
//         <Footer centerIcon="hidden"  positionValue="absolute"/>
//       </main>
//     </>
//   );
// };

// export default page;