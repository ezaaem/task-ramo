import {
  Building2,
  Users,
  VideoIcon,
  Search,
  MapPin,
  User,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <main className="min-h-screen mx-auto w-80%">
      {/* Navigation */}
      <nav className="fixed top-2 w-full bg-white/80 backdrop-blur-md z-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex     h-16">
            <div className="flex ml-1 items-center">
              <Image src="/logo1.png" alt="Logo" width={67} height={59} />
            </div>
            <div className="hidden md:flex items-center pl-24 space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Products
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                how it works
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact Us
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Membership
              </a>{" "}
            </div>

            <div className="flex items-center pl-20 space-x-4">
              <button className=" text-black flex px-4 py-2 gap-1 rounded-md hover:bg-green-700">
                العربيه{" "}
                <Image
                  src="/saudi1.png"
                  alt="Arabic"
                  width={20}
                  height={20}
                  className=""
                />
                <ChevronDown className="text-black" />
              </button>

              <button className="bg-green-800 text-white px-4 py-2 rounded-md">
                Create Account
              </button>
              <button className=" text-black border-1 border-green-600 flex     px-6 py-2 rounded-md hover:bg-green-700">
                <User /> Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/office.png"
            alt="Office Background"
            width={1200}
            height={1000}
            className="object-cover pt-20  mx-auto brightness-50  "
            priority
          />
        </div>

        <div className="relative z-10 pt-32 pb-40 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-amber-100 mb-6">
              Office That Fit You
            </h1>
            <h1 className="text-4xl sm:text-6xl font-bold text-amber-100 mb-6">
              Creative Way To Work
            </h1>
          </div>
          <div className="max-w-5xl max-h-[18rem] mx-auto bg-white  mt-48 rounded-2xl  ">
            {/* Space Types */}
            <div className="max-w-4xl my-12 pt-3  mx-auto bg-white ">
              <div className="flex h-12 pt-4 space-x-3 pl-14   ">
                <div className="bg-gray-100  text-gray-400 backdrop-blur-sm rounded-lg p-5 flex  items-center cursor-pointer hover:bg-white transition-colors ">
                  <Image
                    src="/co-working.png"
                    width={25}
                    height={25}
                    className=" ml-2"
                  />
                  <span className=" pl-2 ">Shared Space</span>
                </div>
                <div className="bg-gray-100  text-gray-400 backdrop-blur-sm rounded-lg p-5 flex  items-center cursor-pointer hover:bg-white transition-colors ">
                  <Image
                    src="/workplace.png"
                    width={25}
                    height={25}
                    className=" ml-2"
                  />
                  <span className=" pl-2 ">Private Offices</span>
                </div>
                <div className="bg-gray-100  text-gray-400 backdrop-blur-sm rounded-lg p-5 flex  items-center cursor-pointer hover:bg-white transition-colors ">
                  <Image
                    src="/conss.png"
                    width={25}
                    height={25}
                    className=" ml-2"
                  />
                  <span className=" pl-2 ">Meeting Rooms</span>
                </div>
                <div className="bg-gray-100  text-gray-400 backdrop-blur-sm rounded-lg p-5 flex  items-center cursor-pointer hover:bg-white transition-colors ">
                  <Image
                    src="/call.png"
                    width={25}
                    height={25}
                    className=" ml-2"
                  />
                  <span className=" pl-2 ">Virtual Offices</span>
                </div>
              </div>
            </div>
            <div className="  mx-auto bg-amber-50 w-100% rounded-lg p-10">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search Here..."
                    className="w-full  text-gray-400 pl-10 pr-4 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                  />

                  <span className=" flex absolute  right-3 top-3  underline  text-sm text-black">
                    <Image
                      src="/fii.png"
                      width={20}
                      height={20}
                      className="pr-1 pb-1  "
                    />{" "}
                    Search Nearby
                  </span>
                </div>

                <button className="bg-green-800 text-white px-8 py-2 rounded-md hover:bg-green-700">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
