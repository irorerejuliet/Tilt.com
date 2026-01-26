import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="">
        {/* Yellow  */}
        <div className="flex justify-center gap-5 py-3 bg-[#E4E24E]">
          <Image
            src="/images/email.svg"
            alt="emailIcon"
            width={20}
            height={20}
          />
          <p className="uppercase text-black text-base font-semibold">
            respond to a mail offer
          </p>
          <Image
            src="/images/arrow-right.svg"
            alt="arrowRight"
            width={20}
            height={20}
          />
        </div>

        {/* main Navbar */}
        <nav className="sticky top-0 z-50 bg-black text-white py-5 md:block hidden">
          <div className="w-360 mx-auto flex justify-between items-center">
            <Link href={"/"}>
              <Image
                src="/images/logo.svg"
                alt="logo"
                className="size-16 invert"
                width={10}
                height={10}
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link href={"/cashadvance"}>CASH ADVANCE</Link>
              <Link href={"/lineofcredit"}>LINE OF CREDIT</Link>
              <div className="flex items-center gap-1">
                <Link href={"/creditcard"}>CREDIT CARD</Link>
                <Image
                  src="/images/arrow-top.svg"
                  alt=""
                  className="invert"
                  width={10}
                  height={10}
                />
              </div>
              <div className="flex items-center gap-1">
                <Link href={"/company"}>COMPANY</Link>
                <Image
                  src="/images/arrow-top.svg"
                  alt=""
                  className="invert"
                  width={10}
                  height={10}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button className="py-1 px-4 border rounded-full">LOGIN</button>
              <button className="py-1 px-4 rounded-full bg-[#E4E24E] text-black">
                GET STARTED
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/* Mobile navBar*/}
      <div className="md:hidden block sticky top-0 z-50 bg-black text-white">
        <div className=" flex justify-between items-center px-4">
          <Link href={"/"}>
            <Image
              src="/images/logo.svg"
              alt="logo"
              className="size-16 invert"
              width={10}
              height={10}
            />
          </Link>
          <button onClick={() => {setIsOpen(isOpen)}}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar
