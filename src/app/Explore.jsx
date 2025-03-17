import Image from "next/image";
import Link from "next/link";

const Explore = () => {
  return (
    <section className="bg-[#FDF8F2] relative lift-10   max-w-7xl  pt-10 md:px-8 rounded-2xl ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center  ">
        {/* Mobile App Mockup */}
        <div className=" pl-10">
          <Image
            src="/iphone.png"
            width={435}
            height={900}
            alt="Chair Location App on mobile device"
            className=" "
          />
        </div>

        {/* Content */}
        <div className="    ">
          <h1 className="text-4xl tracking-wider	   font-bold text-gray-800  ">
            Explore The Chair Location App
          </h1>
          <p className="text-lg text-gray-600 pt-5">
            Hybrid working offers you the freedom to work closer to clients,
            <br />
            colleagues or home.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="https://play.google.com" className="flex-shrink-0">
              <Image
                src="/google1.png"
                width={180}
                height={53}
                alt="Get it on Google Play"
                className="h-12 w-auto"
              />
            </Link>
            <Link href="https://apps.apple.com" className="flex-shrink-0">
              <Image
                src="/apple.png"
                width={180}
                height={53}
                alt="Download on the App Store"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Handshake Icon */}
          <div className="  absolute top-40 right-0  transform -translate-y-1/2">
            <Image
              src="/hand.png"
              width={159}
              height={162}
              alt="Handshake"
              className=""
            />
          </div>
          <div className=" absolute -top-4 right-80 w-[25rem] h-14 bg-[#365327] rounded-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
