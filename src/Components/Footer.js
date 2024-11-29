"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/Styles/flix/flix.css";

// Icons
import arrow from "@/Images/home/arrow-icon.svg";
import bookmark from "@/Images/home/bookmark.svg";
import like from "@/Images/home/thumbs-up.svg";
import share from "@/Images/home/share.svg";
import menu from "@/Images/home/more-vertical.svg";

const Footer = ({
  positionValue = "",
  centerIcon = "block",
  background = "footer-gradient",
  borderWidth = "border-0",
  borderColor = "border-transparent",
  hidden = false,
}) => {
  return (
    <footer className="footer-background z-[11] lg:absolute bottom-28 lg:left-[50%] mx-auto lg:mx-0 lg:-translate-x-1/2  w-1/2 py-3.5 px-5 flex justify-center items-center gap-8">
      {/* <div className="gap-8 flex flex-row py-[14px] px-5"> */}
        <button>
          <Image src={bookmark} width={24} height={24} alt="" quality={100} />
        </button>

        <button>
          <Image src={like} width={24} height={24} alt="" quality={100} />
        </button>

        <button>
          <Image src={share} width={24} height={24} alt="" quality={100} />
        </button>
      {/* </div> */}
    </footer>
  );
};

export default Footer;

//Code-1
// 'use client';
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import '@/Styles/flix/flix.css';

// // Icons
// import arrow from "@/Images/home/arrow-icon.svg";
// import bookmark from "@/Images/home/bookmark.svg";
// import like from "@/Images/home/thumbs-up.svg";
// import share from "@/Images/home/share.svg";
// import menu from "@/Images/home/more-vertical.svg";

// const Footer = ({
//   positionValue = "",
//   centerIcon = "block",
//   background = "footer-gradient",
//   borderWidth = "border-0",
//   borderColor = "border-transparent",
//   hidden = false,
// }) => {
//   return (
//     <footer
//       className={`footer ${hidden ? "hidden" : ""} gap-2.5 ${positionValue} ${background} ${borderWidth} ${borderColor} bottom-0 z-[10] w-full`}
//       // className={`footer ${hidden ? "hidden" : ""} absolute gap-2.5 ${background} ${borderWidth} ${borderColor} bottom-0 w-full z-[10]`}
//     >
//       {/* Back Button */}
//       <section className="gap-24 py-6 px-4 flex flex-row justify-between items-center">
//         <Link href="/flix/">
//           <Image src={arrow} width={20} height={20} alt="" quality={100} />
//         </Link>

//         {/* Center Icons */}
//         <div className={`flex gap-8 ${centerIcon} h-5 `}>
//           <Link href="#">
//             <Image src={bookmark} width={20} height={20} alt="" quality={100} />
//           </Link>
//           <button>
//             <Image src={like} width={20} height={20} alt="" quality={100} />
//           </button>
//           <button>
//             <Image src={share} width={20} height={20} alt="" quality={100} />
//           </button>
//         </div>

//         {/* Menu Button */}
//         <button>
//           <Image src={menu} width={20} height={20} alt="" quality={100} />
//         </button>
//       </section>
//     </footer>
//   );
// };

// export default Footer;

//********************************** Original Code
// import React from "react";
// import Image from "next/image";
// import '@/Styles/flix/flix.css';

// // icons
// import arrow from "@/Images/home/arrow-icon.svg";
// import bookmark from "@/Images/home/bookmark.svg";
// import like from "@/Images/home/thumbs-up.svg";
// import share from "@/Images/home/share.svg";
// import menu from "@/Images/home/more-vertical.svg";
// import Link from "next/link";

// const Footer = ({positionValue=' sticky ',centerIcon="block",background="footer-gradient",borderWidth="border-0",borderColor="border-transparent"}) => {

//   return (
//     <footer className={`gap-2.5 background-custom-grey950 ${borderWidth} ${borderColor} ${positionValue} bottom-0 left-0 w-full z-[10] ${background}`}>
//        {/* back button */}
//      <section className="gap-24 py-6 px-4 flex flex-row justify-between items-center">
//      <Link href="/flix/">
//       <Image src={arrow} width={20} height={20} alt="" quality={100} />
//       </Link>

//         {/* Center Icons */}
//         <div className={`flex gap-8 ${centerIcon}`}>
//         <Link href="#">
//         <Image src={bookmark} width={20} height={20} alt="" quality={100} />
//         </Link>
//           <button>
//             <Image src={like} width={20} height={20} alt="" quality={100} />
//           </button>
//           <button>
//             <Image src={share} width={20} height={20} alt="" quality={100} />
//           </button>
//         </div>

//         {/* Menu Button */}
//       <button>
//         <Image src={menu} width={20} height={20} alt="" quality={100} />
//       </button>
//      </section>
//     </footer>
//   );
// };

// export default Footer;
