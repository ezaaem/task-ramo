import { Building2, Users, VideoIcon, Clock, Check } from "lucide-react";
import Image from "next/image";

export default function Shared() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Space Type Navigation */}
        <div className="bg-green-800 rounded-full  mx-auto gap-2 max-w-4xl p-5 flex justify-between items-center mb-12">
          <button className="flex-1 flex items-center justify-center gap-2 bg-white text-green-800 py-3 px-6 rounded-full">
            <Users className="h-5 w-5" />
            <span className="font-medium">Shared Space</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 text-white py-3 px-6 bg-green-700 hover:bg-white rounded-full transition-colors">
            <Building2 className="h-5 w-5" />
            <span className="font-medium">Private Offices</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 text-white py-3 px-6 bg-green-700 rounded-full transition-colors">
            <Users className="h-5 w-5" />
            <span className="font-medium">Meeting Rooms</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 text-white py-3 px-6 bg-green-700 rounded-full transition-colors">
            <VideoIcon className="h-5 w-5" />
            <span className="font-medium">Virtual Offices</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shared Space
              <span className="block text-2xl text-gray-600 mt-2">
                (CO Work Space)
              </span>
            </h2>

            <p className="text-gray-600 mb-8">
              Rent as many desks as you need in a dynamic, shared office space.
              Business Address and storage options included.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-[rgba(180,157,151,1)] h-4 w-4  p-1 rounded-full"></div>

                <span className="text-gray-700">
                  Reserved permanent workspace as long as you need
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[rgba(180,157,151,1)] h-4 w-4  p-1 rounded-full"></div>

                <span className="text-gray-700">
                  Book a desk by the hour or day in anyplace
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[rgba(180,157,151,1)] h-4 w-4  p-1 rounded-full"></div>
                <span className="text-gray-700">
                  A well-prepared place for your service and comfort
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[rgba(180,157,151,1)] h-4 w-4  p-1 rounded-full"></div>

                <span className="text-gray-700">
                  Hot desk as often as you need in any place
                </span>
              </div>
            </div>
            <div className="h-0.5 w-40 border-2"></div>
            <div className="mb-8 pt-4">
              <div className="flex items-center gap-2 text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.74873 9.81607L3.34072 15.7193C3.04222 16.2361 2.96123 16.8503 3.11573 17.4271C3.27023 18.0031 3.64747 18.4951 4.16422 18.7928L6.74873 20.2853C6.75848 20.8696 6.99398 21.4276 7.40798 21.8408C7.82948 22.2631 8.40173 22.5001 8.99873 22.5001H17.9987C18.5957 22.5001 19.168 22.2631 19.5895 21.8408C20.0117 21.4193 20.2487 20.8471 20.2487 20.2501V8.82007C20.2487 8.26957 20.0462 7.73707 19.6802 7.32532L15.1802 2.26282C14.7535 1.78282 14.1415 1.50757 13.4987 1.50757C12.856 1.50757 12.244 1.78282 11.8172 2.26282C10.4477 3.80332 8.20522 6.32707 7.31722 7.32532C6.95122 7.73707 6.74873 8.26957 6.74873 8.82007V9.81607ZM8.24873 20.2501V8.82007C8.24873 8.63632 8.31622 8.45932 8.43847 8.32207L12.9385 3.25957C13.0802 3.09982 13.2842 3.00757 13.4987 3.00757C13.7132 3.00757 13.9172 3.09982 14.059 3.25957L18.559 8.32207C18.6812 8.45932 18.7487 8.63632 18.7487 8.82007V20.2501C18.7487 20.4488 18.67 20.6401 18.529 20.7803C18.3887 20.9213 18.1975 21.0001 17.9987 21.0001H8.99873C8.79998 21.0001 8.60873 20.9213 8.46848 20.7803C8.32748 20.6401 8.24873 20.4488 8.24873 20.2501ZM6.74873 12.8161L4.63972 16.4693C4.53997 16.6418 4.51299 16.8466 4.56474 17.0386C4.61649 17.2306 4.74172 17.3948 4.91422 17.4938L6.74873 18.5536V12.8161Z"
                    fill="#365327"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5 6.75C12.258 6.75 11.25 7.758 11.25 9C11.25 10.242 12.258 11.25 13.5 11.25C14.742 11.25 15.75 10.242 15.75 9C15.75 7.758 14.742 6.75 13.5 6.75ZM13.5 8.25C13.914 8.25 14.25 8.586 14.25 9C14.25 9.414 13.914 9.75 13.5 9.75C13.086 9.75 12.75 9.414 12.75 9C12.75 8.586 13.086 8.25 13.5 8.25Z"
                    fill="#B49D97"
                  />
                </svg>{" "}
                <span className="font-medium text-sm ">
                  Price Starting From:
                </span>
                <span className="text-sm font-bold text-green-800">
                  1250 EGP
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-green-800 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors">
                Book Now
              </button>
              <button className="border border-green-800 text-green-800 px-8 py-3 rounded-md hover:bg-green-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/creat.png"
              alt="Shared Space"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
