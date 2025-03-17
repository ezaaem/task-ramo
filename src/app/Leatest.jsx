import Image from "next/image";
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
  SquareMenu,
} from "lucide-react";
export default function Leatest() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Listings
          </h2>
          <p className="text-xl text-gray-600">Check our latest listings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { type: "Shared Area", status: "Available" },
            { type: "Meeting Room", status: "Not Available" },
            { type: "Private Office", status: "Available" },
            { type: "Meeting Room", status: "Available" },
          ].map((space, index) => (
            <div
              key={index}
              className="bg-white  overflow-hidden border-2 border-gray-200 rounded-2xl"
            >
              <div className="relative">
                <div
                  className={`absolute top-4 -left-6 -rotate-40 px-8 py-1  text-sm font-medium ${
                    space.status === "Available"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {space.status}
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.41203 2.21104C8.59116 2.13017 8.80103 2.16175 8.94843 2.29175L14.4291 7.12508C14.9558 7.58955 14.9558 8.41061 14.4291 8.87508L8.94843 13.7084C8.80103 13.8384 8.59116 13.87 8.41203 13.7891C8.2329 13.7083 8.11776 13.5299 8.11776 13.3334V10.8339C6.8193 10.8382 5.70896 10.8739 4.7009 11.1628C3.62768 11.4703 2.65314 12.0719 1.73203 13.3001C1.6029 13.4723 1.37809 13.5425 1.17392 13.4744C0.969745 13.4064 0.832031 13.2153 0.832031 13.0001C0.832031 9.92095 1.85133 7.93748 3.3765 6.73488C4.7725 5.63413 6.52462 5.24184 8.11776 5.17685V2.66675C8.11776 2.47021 8.2329 2.2919 8.41203 2.21104ZM9.11776 3.77436V5.53342C9.11776 5.88235 8.8367 6.16363 8.49043 6.16745C6.9161 6.18482 5.25469 6.52739 3.99568 7.52015C2.9773 8.32315 2.1686 9.59428 1.9151 11.6049C2.6933 10.8922 3.52749 10.4588 4.42544 10.2015C5.68508 9.84055 7.0525 9.83375 8.48383 9.83341C8.83156 9.83335 9.11776 10.1148 9.11776 10.4667V12.2258L13.7677 8.12508C13.8429 8.05875 13.8429 7.94141 13.7677 7.87508L9.11776 3.77436Z"
                        fill="#365327"
                      />
                    </svg>{" "}
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                <Image
                  src="/large.png"
                  alt="Office Space"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-3 ">
                <div className="flex items-center  gap-5 mb-2">
                  <span className="text-sm bg-[#F4F1ED] p-1 px-2 rounded-2xl text-gray-600">
                    {space.type}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-600 ml-1">
                      4.9 (162 Review)
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Spot Co-Working Space
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Chair location is a website where you can search, find and
                  reserve co-working space, including co-working
                </p>
                <div className=" items-center gap-4 text-sm text-gray-600 mb-2">
                  <div className="flex items-center pt-3 gap-1 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.24419 8.56918C3.40375 6.51817 4.82954 4.17725 7.03994 4.17725H8.31751C10.5279 4.17725 11.9537 6.51817 11.1133 8.56918C10.9424 8.98621 10.5416 9.27261 10.0812 9.27261H9.75207L9.19834 11.5892C9.02913 12.2971 8.41223 12.8172 7.67873 12.8172C6.94522 12.8172 6.32832 12.2971 6.15911 11.5892L5.6054 9.27261H5.27625C4.8158 9.27261 4.41507 8.98621 4.24419 8.56918ZM7.03994 5.13725C5.57683 5.13725 4.52588 6.72477 5.13251 8.20515C5.16321 8.28009 5.22496 8.31261 5.27625 8.31261H5.72615C6.11338 8.31261 6.42842 8.58633 6.51361 8.94288L7.09281 11.366C7.16513 11.6686 7.41639 11.8572 7.67873 11.8572C7.94106 11.8572 8.19233 11.6686 8.26465 11.366L8.84385 8.94288C8.92903 8.58633 9.2441 8.31261 9.6313 8.31261H10.0812C10.1325 8.31261 10.1942 8.28009 10.225 8.20515C10.8316 6.72477 9.78062 5.13725 8.31751 5.13725H7.03994Z"
                        fill="#907D78"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.67766 1.9373C7.0591 1.9373 6.55766 2.43874 6.55766 3.0573C6.55766 3.67586 7.0591 4.1773 7.67766 4.1773C8.29622 4.1773 8.79766 3.67586 8.79766 3.0573C8.79766 2.43874 8.29622 1.9373 7.67766 1.9373ZM5.59766 3.0573C5.59766 1.90854 6.52892 0.977295 7.67766 0.977295C8.82639 0.977295 9.75766 1.90854 9.75766 3.0573C9.75766 4.20605 8.82639 5.13729 7.67766 5.13729C6.52892 5.13729 5.59766 4.20605 5.59766 3.0573Z"
                        fill="#907D78"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.19875 11.8572C3.46384 11.8572 3.67875 12.0721 3.67875 12.3372C3.67875 12.44 3.72532 12.578 3.89245 12.7474C4.06162 12.9187 4.33021 13.0951 4.69999 13.2537C5.43786 13.5699 6.49065 13.7772 7.67875 13.7772C8.86685 13.7772 9.91965 13.5699 10.6575 13.2537C11.0273 13.0951 11.2959 12.9187 11.4651 12.7474C11.6322 12.578 11.6788 12.44 11.6788 12.3372C11.6788 12.0721 11.8937 11.8572 12.1587 11.8572C12.4238 11.8572 12.6388 12.0721 12.6388 12.3372C12.6388 12.7646 12.4346 13.1316 12.1483 13.4217C11.8641 13.7097 11.4766 13.947 11.0357 14.136C10.1521 14.5147 8.96489 14.7372 7.67875 14.7372C6.39259 14.7372 5.2054 14.5147 4.32183 14.136C3.8809 13.947 3.49341 13.7097 3.20917 13.4217C2.9229 13.1316 2.71875 12.7646 2.71875 12.3372C2.71875 12.0721 2.93366 11.8572 3.19875 11.8572Z"
                        fill="#907D78"
                      />
                    </svg>{" "}
                    <span>12 Per</span>
                  </div>
                  <div
                    className={`flex items-center gap-1 ${
                      space.status === "Available"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    <SquareMenu className="h-4 w-4" />
                    <span>
                      {space.status === "Available" ? "Open" : "Closed"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-black">Starts From : </span>
                    <span className=" text-gray-500 ">
                      <span className="text-black">20</span>SAR/HOUR
                    </span>
                  </div>
                  <ArrowRight className="h-6 w-6 bg-[#F8FFF3] rounded-full text-green-800" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
