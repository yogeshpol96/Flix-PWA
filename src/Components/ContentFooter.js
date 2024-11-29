//ORGINAL CODE
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import '@/Styles/flix/flix.css';

// Icons
import arrowLeft from "@/Images/home/arrow-icon.svg";
import bookmark from "@/Images/home/bookmark.svg";
import like from "@/Images/home/thumbs-up.svg";
import share from "@/Images/home/share.svg";

//footer background css is in flix.scss

const ContentFooter = ({ positionValue, backOption }) => {
  return (
    <footer className={`flex mx-auto bottom-10 ${positionValue} left-1/2 transform -translate-x-1/2`}>
      
      <Link href={backOption} className="footer-background px-3.5 py-3.5 rounded-full ">
        <Image src={arrowLeft} width={24} height={24} alt="" quality={100} />
      </Link>

      <div className="gap-8 px-5 py-3.5 flex footer-background rounded-[90px]  ">
        <button>
          <Image src={bookmark} width={24} height={24} alt="" quality={100} />
        </button>

        <button>
          <Image src={like} width={24} height={24} alt="" quality={100} />
        </button>

        <button>
          <Image src={share} width={24} height={24} alt="" quality={100} />
        </button>
      </div>

    </footer>
  );
};

export default ContentFooter;



// "use client";
// import React from "react";
// import Image from "next/image";

// // Icons
// import bookmark from "@/Images/home/bookmark.svg";
// import like from "@/Images/home/thumbs-up.svg";
// import share from "@/Images/home/share.svg";

// const ContentFooter = () => {
//   return (
//     <footer className="footer-background z-[11] lg:absolute bottom-28 lg:left-[50%] mx-auto lg:mx-0 lg:-translate-x-1/2  w-1/2 py-3.5 px-5 flex justify-center items-center gap-8">
//       {/* <div className="gap-8 flex flex-row py-[14px] px-5"> */}
//       <button>
//         <Image src={bookmark} width={24} height={24} alt="" quality={100} />
//       </button>

//       <button>
//         <Image src={like} width={24} height={24} alt="" quality={100} />
//       </button>

//       <button>
//         <Image src={share} width={24} height={24} alt="" quality={100} />
//       </button>
//       {/* </div> */}
//     </footer>
//   );
// };

// export default ContentFooter;
