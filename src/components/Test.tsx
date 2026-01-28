import Image from 'next/image';
import React from 'react'

const a = () => {
  return (
    <div className=" block flex-row  items-center border-8 border-red-900  px-10 pb-10">
     
        <div className="w-60 h-72 min-w-60 min-h-72  border-2 border-white relative">
          <Image
            src="/images/image-1.jpeg"
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
              src="/images/pot.svg"
              alt=""
              className="bg p-2 rounded-full"
              width={30}
              height={30}
            />
            <button className="text-base font-medium">+$200</button>
          </div>
        </div>
        <div className="w-60 h-72  min-w-60 min-h-72  border-2 border-white relative">
          <Image
            src="/images/image-2.webp"
            alt=""
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
          <p className="text-white text-base">
            High limit <span className="">to help the family</span>
          </p>
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
        <div className="w-60 h-72  min-w-60 min-h-72  border-2 border-white  relative">
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
        <div className="w-60 h-72  min-w-60 min-h-72  border-2 border-white mr-32 mt-8 relative">
          <Image
            src="/images/image-4.webp"
            alt="picture"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
          <p className="text-white text-base">
            High limit <span className="">to help the family</span>
          </p>
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
        <div className="w-60 h-72  min-w-60 min-h-72  border-2 border-white  mt-10 relative">
          <Image
            src="/images/image-5.webp"
            alt="picture"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
          <p className="text-white text-base">
            High limit <span className="">to help the family</span>
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
        <div className="w-60 h-72  min-w-60 min-h-72  border-2 border-white mt-20  relative">
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
     
    </div>
  );
}

export default a
