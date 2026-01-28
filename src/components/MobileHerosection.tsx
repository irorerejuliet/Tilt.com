"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const MobileHerosection = () => {
  const settings = {
    dots: false,
    infinite: true,
    
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="md:hidden block">
      <h1 className="text-white max-w-3xl text-3xl font-bold text-center font-abcgravity ">
        Cash and credit powered by your potential™
      </h1>
      <div className="py-16 mx-auto text-center md:hidden block flex-row">
        <button className="py-4 px-8  rounded-full text-black bg-[#E4E24E] text-lg font-semibold">
          GET STARTED
        </button>
        <div className="flex justify-center items-center gap-1 pt-4">
          <p className="text-base font-medium text-gray-400">
            Already have an account
          </p>
          <Link
            href={"/"}
            className="text-base font-normal text-[#E4E24E] underline"
          >
            Login
          </Link>
        </div>
      </div>
      {/* Mobile Herosection with carousel */}
      <div className="slider-container gap-6 items-center md:px-0 px-8">
        <Slider {...settings}>
          <div className="w-60 h-72  border-2 border-white relative">
            <Image
              src="/images/image-1.jpeg"
              alt="picture"
              className=" object-cover"
              width={500}
              height={500}
            />
            <div className="flex items-center p-1 rounded-full bg-white text-black w-24 absolute bottom-2 left-20">
              <Image
                src="/images/pot.svg"
                alt=""
                className="bg p-2 rounded-full"
                width={30}
                height={30}
              />
              <button className="text-base font-medium">+$200</button>
            </div>
          </div>
          <div className="w-60 h-72  border-2 border-white relative">
            <Image
              src="/images/image-2.webp"
              alt=""
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
            <div className="flex items-center p-1 rounded-full bg-white text-black w-24 absolute bottom-2 left-20 ">
              <Image
                src="/images/network.svg"
                alt=""
                className="bg-[#E4E24E] p-2 rounded-full"
                width={30}
                height={30}
              />
              <button className="text-base font-medium">+$200</button>
            </div>
          </div>
          <div className="w-60 h-72  border-2 border-white  relative">
            <Image
              src="/images/image-3.webp"
              alt="picture"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
            <p className="text-white">
              Credit history <span>to buy a home</span>
            </p>
            <div className="flex items-center p-1 rounded-full bg-white text-black w-24 absolute bottom-2 left-16">
              <Image
                src="/images/tv.svg"
                alt="tv"
                className="bg-[#E4E24E] p-2 rounded-full"
                width={30}
                height={30}
              />
              <button className="text-base font-medium">+$200</button>
            </div>
          </div>
          <div className="w-60 h-72  border-2 border-white mr-32 mt-8 relative">
            <Image
              src="/images/image-4.webp"
              alt="picture"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
            <div className="flex items-center p-1 rounded-full bg-white text-black w-24 absolute bottom-2 left-16">
              <Image
                src="/images/pot.svg"
                alt=""
                className="bg-[#E4E24E] p-2 rounded-full"
                width={30}
                height={30}
              />
              <button className="text-base font-medium">+$200</button>
            </div>
          </div>
          <div className="w-60 h-72  border-2 border-white  mt-10 relative">
            <Image
              src="/images/image-5.webp"
              alt="picture"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
            <div className="flex items-center p-1 rounded-full bg-white text-black w-24 absolute bottom-2 left-16">
              <Image
                src="/images/tv.svg"
                alt="tv"
                className="bg-[#E4E24E] p-2 rounded-full"
                width={30}
                height={30}
              />
              <button className="text-base font-medium">+$200</button>
            </div>
          </div>
          <div className="w-60 h-72  border-2 border-white relative">
            <Image
              src="/images/CashForGas.webp"
              alt=""
              className="w-full h-full border-white border-2"
              width={500}
              height={500}
            />
            <p className="text-white">
              Cash<span>for cash and groceries</span>
            </p>
            <div className="flex items-center p-1 rounded-full bg-white text-black w-24 absolute bottom-2 left-20">
              <Image
                src="/images/pot.svg"
                alt=""
                className="bg-[#E4E24E] p-2 rounded-full"
                width={30}
                height={30}
              />
              <button className="text-base font-medium">+$200</button>
            </div>
          </div>
          <div className="w-60 h-72  border-2 border-white mt-20  relative">
            <Image
              src="/images/image-6.webp"
              alt="picture"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
            <p className="text-white text-base">
              High limit <span className="">to help the family</span>
            </p>
            <div className="flex items-center p-1 rounded-full bg-white text-black w-24 absolute bottom-2 left-20">
              <Image
                src="/images/tv.svg"
                alt="tv"
                className="bg-[#E4E24E] p-2 rounded-full"
                width={30}
                height={30}
              />
              <button className="text-base font-medium">+$200</button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MobileHerosection;
