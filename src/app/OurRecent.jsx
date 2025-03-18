import {
  Building2,
  Users,
  VideoIcon,
  Search,
  MapPin,
  Clock,
  Briefcase,
  Share2,
  Heart,
  ArrowRight,
  Check,
} from "lucide-react";
import Image from "next/image";

export default function OurRecent() {
  return (
    <>
      {/* Recent Articles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Our Recent Articles
              </h2>
              <p className="text-gray-600 mt-2">
                Stay Informed with Our Latest Insights
              </p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-full border border-green-100 text-black hover:bg-gray-50">
                <ArrowRight fil className="h-6 w-6 rotate-180" />
              </button>
              <button className="p-2 rounded-full border border-green-100 text-black hover:bg-gray-50">
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="group">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={`/our${
                      index === 0 ? "1" : index === 1 ? "2" : "3"
                    }.png`}
                    alt="Office Space"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between  text-sm  text-gray-600">
                    <span className="text-[#B0968F] ">Mohamed MO</span>
                    <span>20 Apr 2024</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Blog Title Here
                  </h3>
                  <p className="text-gray-600">
                    In the realm of modern business operations, a fresh wave of
                    innovation serves as more than just a tool...
                  </p>
                  <button className="flex items-center gap-2 text-green-800 font-medium group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        {" "}
        <div className="text-center pb-10 ">
          <h2 className="text-5xl mx-auto justify-center font-bold font-sans text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-3xl text-gray-600 mb-5">
            We Are Here For Your Help
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className=" relative grid grid-cols-2 gap-5">
                <div>
                  <Image
                    src="/our4.png"
                    width={500}
                    height={500}
                    alt="Office Space"
                    className="pb-5"
                  />
                  <Image
                    src="/our5.png"
                    width={304}
                    height={200}
                    alt="Office Space"
                  />
                </div>
                <div>
                  <Image
                    src="/our6.png"
                    width={500}
                    height={500}
                    alt="Office Space"
                  />
                </div>
                <div
                  className="absolute top-1/2 right-58  bg-white/30 backdrop-blur-md backdrop-saturate-150 
 w-[120px] h-[120px]  rounded-full  "
                ></div>
              </div>
            </div>

            <div>
              <p className="text-black mb-4">
                Please fill the upcoming fields{" "}
                <span className="text-red-600">*</span>
              </p>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name..."
                    className="w-full px-4 py-3 rounded-md border border-b-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-mail..."
                    className="w-full px-4 py-3 rounded-md border border-b-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number..."
                    className="w-full px-4 py-3 rounded-md border border-b-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City..."
                    className="w-full px-4 py-3 rounded-md border border-b-gray-300 focus:outline-none focus:ring-2 placeholder:text-gray-400 focus:ring-green-800 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message Text..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-b-gray-300 focus:outline-none focus:ring-2 placeholder:text-gray-400 focus:ring-green-800 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className=" p-20 flex mx-auto bg-green-800 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
