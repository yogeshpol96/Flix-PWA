'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

// icons
import arrow from "@/Images/home/arrow-icon.svg";

const LoginFooter = () => {
  return (
    <footer className="flex flex-row p-4 border-t custom-border-grey900 background-custom-grey950 w-full">
      <Link href="https://payppy.co/payppy-india" aria-label="Go to Flix homepage">
        <Image src={arrow} width={20} height={20} alt="" quality={100} />
      </Link>
    </footer>
  );
};

export default LoginFooter;
