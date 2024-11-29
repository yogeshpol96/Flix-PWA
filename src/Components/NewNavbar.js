import Image from "next/image";
import Link from "next/link";
import React from "react";

import menuIcon from '@/Images/flix/menu-icon.svg';
import arrowLeft from '@/Images/flix/arrow-left.svg';

const NewNavbar = () => {
  return (
    <>
        <nav className=" gap-16 py-6 ">
      <div className="flex flex-row flex-grow w-full ">
      <Link href="/flix">
            <Image src={arrowLeft} width={24} height={24} alt="" quality={100}/>
        </Link>

        <Link href="#">
            <Image src={menuIcon} width={24} height={24} alt="" quality={100}/>
        </Link>
      </div>

        </nav>
    </>
  );
};

export default NewNavbar;
