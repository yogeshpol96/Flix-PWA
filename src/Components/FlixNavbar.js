import Image from "next/image";
import LeftArrow from '@/Images/flix/arrow-left.svg';

import '@/Styles/flix/flix.css';
import Link from "next/link";

function FlixNavbar()
{
    return(
        <>
        <nav className="flex items-center pl-4 py-6 header-gradient absolute z-[1] top-0 w-full ">
            {/* <Image src={LeftArrow} width={24} height={24} alt="" quality={100} className="" /> */}

            <div className="flex items-center relative ">
                <h2 className="custom-text-white heading-h2 mr-4">Flix</h2>
                <div className="h-7 w-[1px] background-custom-white"></div>
                <div className="flex items-center gap-5 overflow-scroll max-w-[75%]  ">
                   <Link href='/'>
                        <div className="body-bold custom-text-white  pl-4 whitespace-nowrap">For You</div>
                   </Link> 
                   <Link href='/'>
                        <div className="body-sm custom-text-white  ">#Trends</div>
                   </Link> 
                   <Link href='/'>
                        <div className="body-sm custom-text-white  ">#FashionTips</div>
                   </Link> 
                   <Link href='/'>
                        <div className="body-sm custom-text-white  ">#Lookbooks</div>
                   </Link> 
                   <Link href='/'>
                        <div className="body-sm custom-text-white  ">#Lookbooks</div>
                   </Link> 
                   <Link href='/'>
                        <div className="body-sm custom-text-white  ">#Lookbooks</div>
                   </Link> 
                   <div className="pr-14"></div>
                </div>
            </div>
        </nav>

        </>
    )
}


export default FlixNavbar;