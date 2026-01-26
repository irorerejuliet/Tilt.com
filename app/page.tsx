import Link from "next/link";
import Herosection from "./components/Herosection";


export default function Home() {
  return (
    <>
    <Herosection/>
      <div className="  bg-[#F7F5EF]">
        <div className="wrapper md:flex flex-row justify-between items-center pt-10 md:px-0 px-4">
          <div className="space-y-2">
            <p className="text-[#64635c] text-xl font-medium">Our Products</p>
            <h2 className="md:text-5xl text-3xl font-bold md:w-150 w-96">
              Cash and credit designed for your success
            </h2>
            <p className="text-lg font-medium">
              Easy to apply. Quick to qualify.
            </p>
          </div>
          <div className="flex items-center gap-6 shadow py-8 px-12 rounded-full bg-white text-base font-medium">
            <Link href={"/"} className="hover:bg-[#EBEAE1] hover:rounded-full">
              CASH ADVANCE
            </Link>
            <Link href={"/"}>LINE OF CREDIT</Link>
            <Link href={"/"}>CREDIT CARD</Link>
          </div>
        </div>
      </div>
    </>
  );
}
