//FINAL CODE
"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import muteIcon from "@/Images/flix/volume-mute.svg";
import unmuteIcon from "@/Images/flix/volume-unmute.svg";
import ContentFooter from "./ContentFooter";

const FlixReelContent = ({ videoSrc }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [showMuteIcon, setShowMuteIcon] = useState(false); // State to control visibility of mute button
  const videoRef = useRef(null);
  const hideTimeoutRef = useRef(null); // Ref to keep track of timeout

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const handleVideoTap = () => {
    // Show the mute/unmute icon when tapped
    setShowMuteIcon(true);

    // Reset the timer to hide the icon after 5 seconds
    clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      setShowMuteIcon(false); // Hide the icon after 5 seconds
    }, 700);

    // Toggle mute/unmute
    handleMuteToggle();
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play();
            } else {
              video.pause();
            }
          });
        },
        {
          threshold: 0.5, // Trigger when 50% of the video is in view
        }
      );

      observer.observe(video);

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    // Cleanup timeout on unmount
    return () => clearTimeout(hideTimeoutRef.current);
  }, []);

  return (
    <section className="relative w-full h-full flex flex-col snap-start snap-always">
      <video
        ref={videoRef}
        className="h-full w-full object-cover min-w-[200px] aspect-video"
        playsInline
        muted={isMuted}
        loop
        onClick={handleVideoTap} // Listen for tap/click events
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <ContentFooter backOption="/flix" positionValue="absolute" />

      {/* Conditionally render the Mute/Unmute Button */}
      {showMuteIcon && (
        <button
          onClick={handleMuteToggle}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 gap-2.5 p-3 rounded-[2px] sound-button-gradient flex items-center justify-center"
        >
          <Image
            src={isMuted ? muteIcon : unmuteIcon}
            width={24}
            height={24}
            alt=""
            quality={100}
          />
        </button>
      )}
    </section>
  );
};

export default FlixReelContent;



// //ORIGINAL CODE
// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";

// import muteIcon from "@/Images/flix/volume-mute.svg";
// import unmuteIcon from "@/Images/flix/volume-unmute.svg";
// import ContentFooter from "./ContentFooter";

// const FlixReelContent = ({ videoSrc }) => {
//   const [isMuted, setIsMuted] = useState(true);
//   const videoRef = useRef(null);

//   const handleMuteToggle = () => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = !video.muted;
//       setIsMuted(video.muted);
//     }
//   };

//   useEffect(() => {
//     const video = videoRef.current;

//     if (video) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               video.play();
//             } else {
//               video.pause();
//             }
//           });
//         },
//         {
//           threshold: 0.5, // Trigger when 50% of the video is in view
//         }
//       );

//       observer.observe(video);

//       return () => observer.disconnect();
//     }
//   }, []);

//   // Adding tap event listener to the video element
//   const handleVideoTap = (e) => {
//     // Check if the tap occurred on the video
//     if (videoRef.current) {
//       handleMuteToggle();
//     }
//   };

//   return (
//     <section className="relative w-full h-full flex flex-col snap-start snap-always">
//       <video
//         ref={videoRef}
//         className="h-full w-full object-cover min-w-[200px] aspect-video"
//         playsInline
//         muted={isMuted}
//         loop
//         onClick={handleVideoTap} // Listen for tap/click events
//       >
//         <source src={videoSrc} type="video/mp4" />
       
//       </video>
//      <ContentFooter backOption="/flix" positionValue="absolute" />

//       {/* Mute/Unmute Button */}
//       <button
//         onClick={handleMuteToggle}
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 gap-2.5 p-3 rounded-[2px] sound-button-gradient flex items-center justify-center"
//       >
//         <Image
//           src={isMuted ? muteIcon : unmuteIcon}
//           width={24}
//           height={24}
//           alt=""
//           quality={100}
//         />
//       </button>
      
//     </section>
//   );
// };

// export default FlixReelContent;




// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import FlixReelFooter from "./FlixReelFooter";
// import Image from "next/image";

// import muteIcon from "@/Images/flix/volume-mute.svg";
// import unmuteIcon from "@/Images/flix/volume-unmute.svg";
// import ContentFooter from "./ContentFooter";

// const FlixReelContent = ({ videoSrc }) => {
//   const [isMuted, setIsMuted] = useState(true);
//   const [isIconVisible, setIsIconVisible] = useState(false); // To control the visibility of the button
//   const videoRef = useRef(null);
//   let visibilityTimeout = useRef(null); // To store the timeout reference

//   const handleMuteToggle = () => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = !video.muted;
//       setIsMuted(video.muted);

//       // Show the button/icon for 0.5 seconds
//       setIsIconVisible(true);
//       clearTimeout(visibilityTimeout.current); // Clear any existing timeout
//       visibilityTimeout.current = setTimeout(() => {
//         setIsIconVisible(false);
//       }, 500); // 500ms
//     }
//   };

//   useEffect(() => {
//     const video = videoRef.current;

//     if (video) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               video.play();
//             } else {
//               video.pause();
//             }
//           });
//         },
//         {
//           threshold: 0.5, // Trigger when 50% of the video is in view
//         }
//       );

//       observer.observe(video);

//       return () => {
//         observer.disconnect();
//         clearTimeout(visibilityTimeout.current); // Cleanup timeout on unmount
//       };
//     }
//   }, []);

//   return (
//     <section className="relative w-full h-full flex flex-col snap-start snap-always">
//       <video
//         ref={videoRef}
//         className="h-full w-full object-cover min-w-[200px] aspect-video -z-[1]"
//         playsInline
//         muted={isMuted}
//         loop
//         onClick={handleMuteToggle} // Listen for tap/click events
//  >
//         <source src={videoSrc} type="video/mp4" />
       
//       </video>

//       <ContentFooter positionValue="absolute" backOption="/flix"/>

     

//       {/* Mute/Unmute Button */}
//       {isIconVisible && ( // Conditionally render the button based on visibility state
//         <button
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 gap-2.5 p-3 rounded-[2px] sound-button-gradient flex items-center justify-center"
//         >
//           <Image
//             src={isMuted ? muteIcon : unmuteIcon}
//             width={24}
//             height={24}
//             alt=""
//             quality={100}
//           />
//         </button>
//       )}
//       {/* <FlixReelFooter marginTopValue="mt-[-68px]" /> */}
//     </section>
//   );
// };

// export default FlixReelContent;






//CODE -2
// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import FlixReelFooter from "./FlixReelFooter";
// import Image from "next/image";

// import muteIcon from "@/Images/flix/volume-mute.svg";
// import unmuteIcon from "@/Images/flix/volume-unmute.svg";

// const FlixReelContent = ({ videoSrc }) => {
//   const [isMuted, setIsMuted] = useState(true);
//   const videoRef = useRef(null);

//   const handleMuteToggle = () => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = !video.muted;
//       setIsMuted(video.muted);
//     }
//   };

//   useEffect(() => {
//     const video = videoRef.current;

//     if (video) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               video.play();
//             } else {
//               video.pause();
//             }
//           });
//         },
//         {
//           threshold: 0.5, // Trigger when 50% of the video is in view
//         }
//       );

//       observer.observe(video);

//       return () => observer.disconnect();
//     }
//   }, []);

//   return (
//     <section className="relative w-full h-full flex flex-col snap-start snap-always">
//       <video
//         ref={videoRef}
//         className="h-full w-full object-cover min-w-[200px] aspect-video"
//         playsInline
//         muted={isMuted}
//         loop
//       >
//         <source src={videoSrc} type="video/mp4" />
//       </video>

//       {/* Mute/Unmute Button */}
//       <button
//         onClick={handleMuteToggle}
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 gap-2.5 p-3 rounded-[2px] sound-button-gradient flex items-center justify-center"
//       >
//         <Image
//           src={isMuted ? muteIcon : unmuteIcon}
//           width={24}
//           height={24}
//           alt=""
//           quality={100}
//         />
//       </button>

//       <FlixReelFooter marginTopValue="mt-[-68px]" />
//     </section>
//   );
// };

// export default FlixReelContent;




//code 1
// import React, { useState, useRef, useEffect } from "react";
// import FlixReelFooter from "./FlixReelFooter";
// import Image from "next/image";

// import muteIcon from '@/Images/flix/volume-mute.svg';
// import unmuteIcon from '@/Images/flix/volume-unmute.svg';

// const FlixReelContent = ({ videoSrc }) => {
//   const [isMuted, setIsMuted] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false); // Track whether video is playing
//   const videoRef = useRef(null);

//   const handleMuteToggle = () => {
//     const video = videoRef.current;
//     video.muted = !video.muted;
//     setIsMuted(video.muted);
//   };

//   useEffect(() => {
//     const video = videoRef.current;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             video.play();
//             setIsPlaying(true);
//           } else {
//             video.pause();
//             setIsPlaying(false);
//           }
//         });
//       },
//       {
//         threshold: 0.5, // Trigger when 50% of the video is in the viewport
//       }
//     );

//     if (video) {
//       observer.observe(video);
//     }

//     return () => {
//       if (video) {
//         observer.unobserve(video);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <section className="relative w-full h-full flex flex-col snap-start snap-always">
//         <video
//           ref={videoRef}
//           className="h-full w-full object-cover min-w-[200px] aspect-video"
//           autoPlay={isPlaying} // Only autoplay when the video is in view
//           playsInline
//           muted={isMuted}
//           loop
//         >
//           <source src={videoSrc} type="video/mp4" />
//         </video>

//         {/* Mute/Unmute Button */}
//         <button
//           onClick={handleMuteToggle}
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 gap-2.5 p-3 rounded-[2px] sound-button-gradient flex items-center justify-center"
//         >
//           {isMuted ? (
//             <Image src={muteIcon} width={24} height={24} alt="" quality={100} />
//           ) : (
//             <Image src={unmuteIcon} width={24} height={24} alt="" quality={100} />
//           )}
//         </button>

//         <FlixReelFooter marginTopValue="mt-[-68px]" />
//       </section>
//     </>
//   );
// };

// export default FlixReelContent;

//************************** ORIGINAL code
// import React from "react";
// import FlixReelFooter from "./FlixReelFooter";

// const FlixReelContent = ({ videoSrc }) => {
//   return (
//     <>
//       <section className=" w-full h-full flex flex-col snap-start snap-always ">
//         <video loadind="lazy" className="h-full w-full object-cover min-w-[200px] aspect-video "
//          autoPlay  playsInline muted loop >
//           <source src={videoSrc} type="video/mp4" />
//         </video>
//         <FlixReelFooter marginTopValue="mt-[-68px]" />
//       </section>
//     </>
//   );
// };

// export default FlixReelContent;

// 'use client';
// import React, { useState, useEffect } from "react";
// import FlixReelFooter from "./FlixReelFooter";

// const FlixReelContent = ({ videoSrc }) => {
//   const [isFooterVisible, setIsFooterVisible] = useState(true);

//   useEffect(() => {
//     console.log("hello")
//     const handleScroll = () => {
//       // Hide footer when scrolling down, show it when at the top
//       if (window.scrollY > 0) {
//         setIsFooterVisible(false);
//         console.log(isFooterVisible);
//       } else {
//         setIsFooterVisible(true);
//         console.log(isFooterVisible);
//       }

//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup event listener on unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   },[]);

//   return (
//     <>
//       <section className="w-full h-full flex flex-col snap-start snap-always">
//         <video
//           className="h-full w-full object-cover min-w-[200px] aspect-video"
//           autoPlay
//           muted
//           loop
//         >
//           <source src={videoSrc} type="video/mp4" />
//         </video>
//         {isFooterVisible && <FlixReelFooter />}
//       </section>
//     </>
//   );
// };

// export default FlixReelContent;
