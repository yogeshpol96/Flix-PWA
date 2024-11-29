'use client';
import React, { useState } from "react";
import Link from "next/link";
import '@/Styles/flix/flix.css';
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

//Icons

import backButtonIcon from '@/Images/flix/arrow-left.svg';
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = ({displayBackButton='hidden', paddingLeft='pl-6',paddingRight='pr-0'}) => {
  // State to track which link is active
  const [activeLink, setActiveLink] = useState("");

  let router=useRouter();

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  
  // Styles for active and inactive links
  const defaultButtonStyle = {
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: "400",
  };

  const activeButtonStyle = {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "600",
  };

  const activeLinkStyle = {
    display: "block",
    backgroundColor: "#FFFFFF",
    // width: "20px",
    width:"40%",
    height: "1px",
  };

  // function handleFlixClick()
  // {
  //   router.push('/flix/for-you');
  // }

// old nav paddings -> pb-8 pt-6  pl-6 

  return (
    <header className="header-gradient z-[10] w-full">
     <nav className={`pt-4 pb-6 custom-text-white flex flex-row ${paddingLeft} ${paddingRight} ` + plus_jakarta_sans.className} aria-label="Main navigation">
    
    
      <div className="flex gap-1 ">

        <Link href="https://payppy.co/payppy-india"  className={`h-8 w-8 mr-1 ${displayBackButton}`} >
            <Image src={backButtonIcon} width={32} height={32} alt="img" quality={100} />
         </Link>

        <Link href="/flix/flix-reels"  className="heading-h2 pr-4">Flix</Link>

        <div className="border-l custom-border-white opacity-50 h-8 "></div>

      </div>

      <div className={"flex flex-row items-center gap-5 body-sm font-normal overflow-x-scroll overflow-y-hidden scroll-smooth " + plus_jakarta_sans.className}>
        <Link href="/flix/for-you"
              style={activeLink === "/flix/for-you" ? activeButtonStyle : defaultButtonStyle}
              onClick={() => handleLinkClick("/flix/for-you")}
              className="gap-1 opacity-80 pl-4">
          ForYou
          <div className="flex flex-row justify-center ">
            <div style={activeLink === "/flix/for-you" ? activeLinkStyle : {}}></div>
          </div>
        </Link>

        <Link href="#trends" style={activeLink === "#trends" ? activeButtonStyle : defaultButtonStyle} onClick={() => handleLinkClick("#trends")} className="gap-1 opacity-80"> #Trends
          <div className="flex flex-row justify-center">
            <div style={activeLink === "#trends" ? activeLinkStyle : {}}></div>
          </div>
        </Link>

        <Link href="#lookbooks"
              style={activeLink === "#lookbooks" ? activeButtonStyle : defaultButtonStyle}
              onClick={() => handleLinkClick("#lookbooks")}
              className="gap-1 opacity-80">
          #Lookbooks
          <div className="flex flex-row justify-center">
            <div style={activeLink === "#lookbooks" ? activeLinkStyle : {}}></div>
          </div>
        </Link>

        <Link href="#release"
              style={activeLink === "#release" ? activeButtonStyle : defaultButtonStyle}
              onClick={() => handleLinkClick("#release")}
              className="gap-1 opacity-80">
          #Release
          <div className="flex flex-row justify-center">
            <div style={activeLink === "#release" ? activeLinkStyle : {}}></div>
          </div>
        </Link>

        {/* trial */}

        <Link href="#release"
              style={activeLink === "#release" ? activeButtonStyle : defaultButtonStyle}
              onClick={() => handleLinkClick("#release")}
              className="gap-1 opacity-80">
          #Release
          <div className="flex flex-row justify-center">
            <div style={activeLink === "#release" ? activeLinkStyle : {}}></div>
          </div>
        </Link> 
         <Link href="#release"
              style={activeLink === "#release" ? activeButtonStyle : defaultButtonStyle}
              onClick={() => handleLinkClick("#release")}
              className="gap-1 opacity-80">
          #Release
          <div className="flex flex-row justify-center">
            <div style={activeLink === "#release" ? activeLinkStyle : {}}></div>
          </div>
        </Link> 
         <Link href="#release"
              style={activeLink === "#release" ? activeButtonStyle : defaultButtonStyle}
              onClick={() => handleLinkClick("#release")}
              className="gap-1 opacity-80">
          #Release
          <div className="flex flex-row justify-center">
            <div style={activeLink === "#release" ? activeLinkStyle : {}}></div>
          </div>
        </Link>
      </div>
    </nav>
   </header>
  );
};

export default Header;


// import React, { useState } from "react";
// import Link from "next/link";
// import '@/Styles/flix/flix.css';
// import { Plus_Jakarta_Sans } from "next/font/google";

// const plus_jakarta_sans = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   display: "swap",
// });

// const Header = () => {
//   // State to track which link is active
//   const [activeLink, setActiveLink] = useState("");

//   const handleLinkClick = (linkName) => {
//     setActiveLink(linkName);
//   };
  
//   // Styles for active and inactive links
//   const defaultButtonStyle = {
//     fontSize: "12px",
//     lineHeight: "18px",
//     fontWeight: "400",
//   };

//   const activeButtonStyle = {
//     fontSize: "14px",
//     lineHeight: "20px",
//     fontWeight: "600",
//   };

//   const activeLinkStyle = {
//     display: "block",
//     backgroundColor: "#FFFFFF",
//     // width: "20px",
//     width:"40%",
//     height: "1px",
//   };



//   return (
//     <header className=" absolute left-0 header-gradient z-[2] top-0 w-full  ">
//      <nav className={" pb-8 pt-6  pl-6 custom-text-white flex flex-row " + plus_jakarta_sans.className} aria-label="Main navigation" >
      
//       <div className="flex gap-3 ">
//         <Link href="/flix" className="heading-h2">Flix</Link>
//         <div className="border-l custom-border-white opacity-50 h-8 "></div>
//       </div>

//       <div className={"flex flex-row  items-center gap-5 body-sm font-normal overflow-x-scroll overflow-y-hidden  " + plus_jakarta_sans.className}>
//         <Link href="/flix/for-you"
//               style={activeLink === "/flix/for-you" ? activeButtonStyle : defaultButtonStyle}
//               onClick={() => handleLinkClick("/flix/for-you")}
//               className="gap-1 opacity-80 pl-3">
//           ForYou
//           <div className="flex flex-row justify-center ">
//             <div style={activeLink === "/flix/for-you" ? activeLinkStyle : {}}></div>
//           </div>
//         </Link>

//         <Link href="#trends"
//               style={activeLink === "#trends" ? activeButtonStyle : defaultButtonStyle}
//               onClick={() => handleLinkClick("#trends")}
//               className="gap-1 opacity-80">
//           #Trends
//           <div className="flex flex-row justify-center">
//             <div style={activeLink === "#trends" ? activeLinkStyle : {}}></div>
//           </div>
//         </Link>

//         <Link href="#lookbooks"
//               style={activeLink === "#lookbooks" ? activeButtonStyle : defaultButtonStyle}
//               onClick={() => handleLinkClick("#lookbooks")}
//               className="gap-1 opacity-80">
//           #Lookbooks
//           <div className="flex flex-row justify-center">
//             <div style={activeLink === "#lookbooks" ? activeLinkStyle : {}}></div>
//           </div>
//         </Link>

//         <Link href="#release"
//               style={activeLink === "#release" ? activeButtonStyle : defaultButtonStyle}
//               onClick={() => handleLinkClick("#release")}
//               className="gap-1 opacity-80">
//           #Release
//           <div className="flex flex-row justify-center">
//             <div style={activeLink === "#release" ? activeLinkStyle : {}}></div>
//           </div>
//         </Link>

//         {/* trial */}

//         <Link href="#release"
//               style={activeLink === "#release" ? activeButtonStyle : defaultButtonStyle}
//               onClick={() => handleLinkClick("#release")}
//               className="gap-1 opacity-80">
//           #Release
//           <div className="flex flex-row justify-center">
//             <div style={activeLink === "#release" ? activeLinkStyle : {}}></div>
//           </div>
//         </Link>  <Link href="#release"
//               style={activeLink === "#release" ? activeButtonStyle : defaultButtonStyle}
//               onClick={() => handleLinkClick("#release")}
//               className="gap-1 opacity-80">
//           #Release
//           <div className="flex flex-row justify-center">
//             <div style={activeLink === "#release" ? activeLinkStyle : {}}></div>
//           </div>
//         </Link>  <Link href="#release"
//               style={activeLink === "#release" ? activeButtonStyle : defaultButtonStyle}
//               onClick={() => handleLinkClick("#release")}
//               className="gap-1 opacity-80">
//           #Release
//           <div className="flex flex-row justify-center">
//             <div style={activeLink === "#release" ? activeLinkStyle : {}}></div>
//           </div>
//         </Link>
//       </div>
//     </nav>
//    </header>
//   );
// };

// export default Header;
