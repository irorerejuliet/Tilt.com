import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Herosection = () => {
  return (
    <div className="bg-[#171616] hidden md:block">
      <div className="w-360 mx-auto pt-4 md:pt-12">
        <div className="flex items-center justify-between gap-10">
          {/* LEFT IMAGE */}
          <div className="w-44 h-60  border-2 border-white relative">
            <Image
              src="/images/image-1.jpeg"
              alt="picture"
               className="w-full h-full object-cover"
              width={100}
              height={100}
            />
            <div className="flex items-center py-1 px-3 rounded-full bg-white text-black w-24 absolute bottom-4 left-7">
              <Image src="/images/pot.svg" alt="" className="" width={4} height={4}/>
              <button className="text-base font-medium">+$200</button>
            </div>
          </div>

          {/* TEXT */}
          <h1 className="text-white max-w-3xl text-8xl font-bold text-center font-abcgravity">
            Cash and credit powered by your potential
          </h1>

          {/* RIGHT IMAGE */}
          <div className="w-40 h-52  border-2 border-white ">
            <Image
              src="/images/image-2.webp"
              alt=""
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
            <button className="py-1 px-3 rounded-full bg-red-700">+$200</button>
          </div>
        </div>

        <div className="">
          <div className="flex justify-between">
            <div className="w-60 h-72  border-2 border-white ml-40 mt-16">
              <Image
                src="/images/image-3.webp"
                alt="picture"
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>
            <div className="py-16 mx-auto text-center">
              <button className="py-4 px-8  rounded-full text-black bg-primary text-lg font-semibold">
                GET STARTED
              </button>
              <div className="flex items-center gap-1 pt-4">
                <p className="text-base font-medium text-gray-400">
                  Already have an account
                </p>
                <Link
                  href={"/"}
                  className="text-base font-normal text-primary border-b"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="w-40 h-52  border-2 border-white mr-32 mt-12">
              <Image
                src="/images/image-4.webp"
                alt="picture"
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex justify-between gap-10 ">
            <div className="w-40 h-50  border-2 border-white ml-24 mt-28">
              <Image
                src="/images/image-5.webp"
                alt="picture"
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>
            <div className="w-90 h-110  border-2 border-white ml-16">
              <Image
                src="/images/CashForGas.webp"
                alt=""
                className="w-full full border-white border-2"
                width={100}
                height={100}
              />
            </div>
            <div className="w-56 h-72 overflow-hidden mb-72  border-2 border-white mt-20  ">
              <Image
                src="/images/image-6.webp"
                alt="picture"
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection
