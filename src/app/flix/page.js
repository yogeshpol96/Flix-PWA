"use client";
import React from "react";
import "@/Styles/login/login.css";

//components
import Header from "@/Components/Header";

import FlixSection from "@/Components/FlixSection";

const page = () => {
  return (
    <>
      <article className=" relative overflow-hidden max-w-[52.7vh] h-screen min-w-[200px] min-h-[200px]  flex flex-col mx-auto pb-[50px]">
        <Header displayBackButton="block" paddingLeft="pl-2" />
        <main className=" absolute top-0 left-0 w-full h-full">
          <FlixSection/>
        </main>
      </article>
    </>
  );
};

export default page;




 








//ORIGINAL CODE
// "use client";
// import React from "react";
// import '@/Styles/login/login.css';

// //components
// import Header from "@/Components/Header";
// import LoginSection from "@/Components/LoginSection";

// const page = () => {
//   return (
//     <>
//       <main className="relative overflow-hidden max-w-[52.7vh] h-screen min-w-[200px] min-h-[200px]  flex flex-col mx-auto pb-[50px]">
//         <Header displayBackButton="block" paddingLeft='pl-2'/>
//         <LoginSection />
//       </main>
//     </>
//   );
// };

// export default page;
