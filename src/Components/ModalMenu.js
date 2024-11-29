'use client';
import Image from "next/image";
import React from "react";

// icons
import likeIcon from '@/Images/flix/thumbs-up.svg';
import saveIcon from '@/Images/flix/bookmark.svg';
import shareIcon from '@/Images/flix/share.svg';
import copylinkIcon from '@/Images/flix/copy.svg';
import feedbackIcon from '@/Images/flix/flag.svg';


import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

const ModalMenu = () => {
  return (
    <>
     <div className=" -z-[1] flex flex-col  max-width-[390px] w-full max-h-[846px] h-full bg-black">
        <section className="flex flex-col  bg-white  pt-[510px]">
          <div className="flex justify-center">
          <div className="bg-slate-500 h-[2px] w-[49px]"></div>
          </div>
          <button className={" gap-2 px-6 pt-6 pb-4 w-full flex items-center justify-start font-semibold text-sm bordedr-t "+plus_jakarta_sans.className}>
            <Image src={likeIcon} width={24} height={24} alt="" quality={100} />
            Like
          </button>

          <button className={" gap-2 px-6 py-4 w-full flex items-center justify-start font-semibold text-sm border-t "+plus_jakarta_sans.className}>
            <Image src={saveIcon} width={24} height={24} alt="" quality={100} />
           Save
          </button>

          <button className={" gap-2 px-6 py-4 w-full flex items-center justify-start font-semibold text-sm border-t "+plus_jakarta_sans.className}>
            <Image src={shareIcon} width={24} height={24} alt="" quality={100} />
           Share
          </button>

          <button className={" gap-2 px-6 py-4 w-full flex items-center justify-start font-semibold text-sm border-t "+plus_jakarta_sans.className}>
            <Image src={copylinkIcon} width={24} height={24} alt="" quality={100} />
           Copy Link
          </button>

          <button className={" gap-2 px-6 pt-4 pb-5 w-full flex items-center justify-start font-semibold text-sm border-t "+plus_jakarta_sans.className}>
            <Image src={feedbackIcon} width={24} height={24} alt="" quality={100} />
           Share Feedback
          </button>
        </section>
      </div>
    </>
  );
};

export default ModalMenu;


// import Image from "next/image";
// import React from "react";

// // icons
// import likeIcon from '@/Images/flix/thumbs-up.svg';
// import saveIcon from '@/Images/flix/bookmark.svg';
// import shareIcon from '@/Images/flix/share.svg';
// import copylinkIcon from '@/Images/flix/copy.svg';
// import feedbackIcon from '@/Images/flix/flag.svg';


// import { Plus_Jakarta_Sans } from "next/font/google";
// const plus_jakarta_sans = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   display: "swap",
// });



// const Popup = () => {
//   return (
//     <>    
//     <article className="flex justify-center items-center "> 
//     <section className="page-center-parent-container flex flex-col relative  items-center justify-between h-screen overflow-scroll "> 
//       <div className=" -z-[1] flex flex-col  max-width-[390px] w-full max-h-[846px] h-full bg-black">
//         <section className="flex flex-col  bg-white  pt-[510px]">
//           <div className="flex justify-center">
//           <div className="bg-slate-500 h-[2px] w-[49px]"></div>
//           </div>
//           <button className={" gap-2 px-6 pt-6 pb-4 w-full flex items-center justify-start font-semibold text-sm bordedr-t "+plus_jakarta_sans.className}>
//             <Image src={likeIcon} width={24} height={24} alt="" quality={100} />
//             Like
//           </button>

//           <button className={" gap-2 px-6 py-4 w-full flex items-center justify-start font-semibold text-sm border-t "+plus_jakarta_sans.className}>
//             <Image src={saveIcon} width={24} height={24} alt="" quality={100} />
//            Save
//           </button>

//           <button className={" gap-2 px-6 py-4 w-full flex items-center justify-start font-semibold text-sm border-t "+plus_jakarta_sans.className}>
//             <Image src={shareIcon} width={24} height={24} alt="" quality={100} />
//            Share
//           </button>

//           <button className={" gap-2 px-6 py-4 w-full flex items-center justify-start font-semibold text-sm border-t "+plus_jakarta_sans.className}>
//             <Image src={copylinkIcon} width={24} height={24} alt="" quality={100} />
//            Copy Link
//           </button>

//           <button className={" gap-2 px-6 pt-4 pb-5 w-full flex items-center justify-start font-semibold text-sm border-t "+plus_jakarta_sans.className}>
//             <Image src={feedbackIcon} width={24} height={24} alt="" quality={100} />
//            Share Feedback
//           </button>
//         </section>
//       </div>
//       </section>
//       </article>
//     </>
//   );
// };

// export default Popup;
