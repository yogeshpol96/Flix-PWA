'use client';
// import React from "react";
// import Image from "next/image";
// import bookmark from "@/Images/home/bookmark.svg";
// import like from "@/Images/home/thumbs-up.svg";
// import share from "@/Images/home/share.svg";
// import Link from "next/link";

// const FlixReelFooter = ({marginTopValue="mt-0"}) => {
//   return (
//     // mt-[-52px] 
//     <footer className={`flex flex-row justify-center items-center p-4 sticky ${marginTopValue}  w-1/2 mx-auto z-[11]`}>
//       {/* Center Icons */}
//       <div className="flex gap-8">
//         <button type="button" aria-label="Bookmark" className="transform transition-transform duration-300 hover:scale-150">
//           <Image src={bookmark} width={20} height={20} alt="img" quality={100} />
//         </button>
//         <button  type="button" aria-label="Like" className="transform transition-transform duration-300 hover:scale-150">
//           <Image src={like} width={20} height={20} alt="img" quality={100} />
//         </button>
//         <button  type="button" aria-label="Share" className="transform transition-transform duration-300 hover:scale-150">
//           <Image src={share} width={20} height={20} alt="img" quality={100} />
//         </button>
//       </div>
//     </footer>
//   );
// };

// export default FlixReelFooter;

import React from "react";
import Image from "next/image";
import bookmark from "@/Images/home/bookmark.svg";
import like from "@/Images/home/thumbs-up.svg";
import share from "@/Images/home/share.svg";
import Link from "next/link";

const FlixReelFooter = ({marginTopValue="mt-0"}) => {
  return (
    // mt-[-52px] 
    // py-2
    <footer className={`gap-2.5 px-4  py-6 flex flex-row justify-center items-center sticky ${marginTopValue}  w-1/2 mx-auto z-[11]`}>
      {/* Center Icons */}
      <div className=" gap-8 flex ">
        <button type="button" aria-label="Bookmark" className="transform transition-transform duration-300 hover:scale-150">
          <Image src={bookmark} width={20} height={20} alt="img" quality={100} />
        </button>
        <button  type="button" aria-label="Like" className="transform transition-transform duration-300 hover:scale-150">
          <Image src={like} width={20} height={20} alt="img" quality={100} />
        </button>
        <button  type="button" aria-label="Share" className="transform transition-transform duration-300 hover:scale-150">
          <Image src={share} width={20} height={20} alt="img" quality={100} />
        </button>
      </div>
    </footer>
  );
};

export default FlixReelFooter;