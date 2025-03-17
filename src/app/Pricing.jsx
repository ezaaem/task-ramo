"use client";
import { useState } from "react";
import Image from "next/image"; // Optional: Only if using Next.js for optimized images

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedOption, setSelectedOption] = useState("meeting-rooms");

  const pricingOptions = [
    {
      id: "basic",
      title: "Basic",
      forText: "For individuals",
      price: 99,
      currency: "SAR",
      description:
        "Lorem ipsum dolor sit amet doloroli sitdol conse ctetur adipiscing elit.",
      features: [
        "10 Hours / Week",
        "25 Hours in Shared area / Month",
        "Free 1 hour private office",
        "Up to 3 team members",
      ],
      color: "bg-white",
      iconBg: "bg-lime-200",
      badge: null,
      icon: "/icon1.png",
    },
    {
      id: "enterprise",
      title: "Enterprise",
      forText: "For mid companies",
      price: 199,
      currency: "SAR",
      description:
        "Lorem ipsum dolor sit amet doloroli sitdol conse ctetur adipiscing elit.",
      features: [
        "All analytics features",
        "Up to (1 Million) tracked visits",
        "Premium support",
        "Up to 10 team members",
      ],
      color: "bg-green-800",
      iconBg: "bg-green-700",
      badge: "Popular Plan (Best Sales)",
      badgeColor: "bg-green-700",
      icon: "/icon2.png",
    },
    {
      id: "enterprise-plus",
      title: "Enterprise Plus",
      forText: "For big companies",
      price: 399,
      currency: "SAR",
      description:
        "Lorem ipsum dolor sit amet doloroli sitdol conse ctetur adipiscing elit.",
      features: [
        "All analytics features",
        "Up to (5 Million) tracked visits",
        "Dedicated support",
        "Up to 50 team members",
      ],
      color: "bg-white",
      iconBg: "bg-lime-200",
      badge: null,
      icon: "/icon3.png",
    },
  ];

  const spaceOptions = [
    {
      id: "shared-space",
      label: "Shared Space",
      icon: "/co-working.png",
    },
    {
      id: "meeting-rooms",
      label: "Meeting Rooms",
      icon: "/workplace.png",
    },
    {
      id: "private-offices",
      label: "Private Offices",
      icon: "/conss.png",
    },
    {
      id: "virtual-offices",
      label: "Virtual Offices",
      icon: "/call.png",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 pt-20 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest mb-2">
            PRICING
          </p>
          <h2 className="text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="max-w-xl mx-auto text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere
            vel venenatis eu sit massa volutpat.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <span
              className={`text-sm ${
                billingCycle === "monthly" ? "font-semibold" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "annually" : "monthly"
                )
              }
              className="relative w-12 h-6 bg-green-800 rounded-full flex items-center px-1 transition-colors"
            >
              <span
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                  billingCycle === "annually"
                    ? "translate-x-6"
                    : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm ${
                billingCycle === "annually" ? "font-semibold" : "text-gray-500"
              }`}
            >
              Annually
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10 pt-10">
          {/* Sidebar */}
          <div className="lg:w-1/4  h-[550px] ">
            <div className="bg-white  rounded-xl p-6  ">
              <h3 className="text-lg font-semibold mb-5">
                Select from the upcoming options.
              </h3>

              {/* Space Options Buttons */}
              <div className="flex flex-col gap-5 mb-12">
                {spaceOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`flex items-center px-4 py-3 rounded-md transition-all ${
                      selectedOption === option.id
                        ? "bg-[#E7CAAA] border-amber-300 font-medium"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <Image
                      src={option.icon}
                      alt={option.label}
                      width={20}
                      height={20}
                      className="mr-3"
                    />
                    {option.label}
                  </button>
                ))}
              </div>

              <div>
                <h4 className="font-medium pt-5">Do you face any problems?</h4>
                <p className="text-sm text-gray-600">
                  Contact us anytime, anywhere. We will be happy to help.
                </p>

                <div className="flex justify-between items-center mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M8.28125 8.14209H8.86719V10.4858H10.0391V8.14209V6.97021V4.62646H8.86719V6.97021H8.28125V4.62646H7.10938V6.97021V8.14209V10.4858H8.28125V8.14209Z"
                        fill="#66CCFF"
                      />
                      <path
                        d="M12.9688 9.31396H11.7969V8.14209H12.9688V6.97021H11.7969V5.79834H12.9688V4.62646H10.625V6.97021V8.14209V10.4858H12.9688V9.31396Z"
                        fill="#59ABFF"
                      />
                      <path
                        d="M15.8984 9.31396H14.7266V4.62646H13.5547V10.4858H15.8984V9.31396Z"
                        fill="#59ABFF"
                      />
                      <path
                        d="M18.2422 8.14209C19.2114 8.14209 20 7.35353 20 6.38428C20 5.41502 19.2114 4.62646 18.2422 4.62646H17.0703V6.97021V8.14209V10.4858H18.2422V8.14209ZM18.2422 5.79834C18.5653 5.79834 18.8281 6.06119 18.8281 6.38428C18.8281 6.70736 18.5653 6.97021 18.2422 6.97021V5.79834Z"
                        fill="#59ABFF"
                      />
                      <path
                        d="M3.59375 11.6577V17.5171H4.76562C5.73488 17.5171 6.52344 16.7285 6.52344 15.7593V13.4155C6.52344 12.4463 5.73488 11.6577 4.76562 11.6577H3.59375ZM5.35156 13.4155V15.7593C5.35156 16.0824 5.08871 16.3452 4.76562 16.3452V12.8296C5.08871 12.8296 5.35156 13.0924 5.35156 13.4155Z"
                        fill="#5C7199"
                      />
                      <path
                        d="M9.45312 16.3452H8.28125V15.1733H9.45312V14.0015H8.28125V12.8296H9.45312V11.6577H7.10938V14.0015V15.1733V17.5171H9.45312V16.3452Z"
                        fill="#5C7199"
                      />
                      <path
                        d="M11.7969 15.1733C12.12 15.1733 12.3828 15.4362 12.3828 15.7593C12.3828 16.0824 12.12 16.3452 11.7969 16.3452C11.6404 16.3452 11.4932 16.2843 11.3826 16.1736L10.9683 15.7593L10.1396 16.5879L10.5539 17.0022C10.8859 17.3342 11.3274 17.5171 11.7969 17.5171C12.7661 17.5171 13.5547 16.7285 13.5547 15.7592C13.5547 14.79 12.7661 14.0014 11.7969 14.0014C11.4738 14.0014 11.2109 13.7386 11.2109 13.4155C11.2109 13.0924 11.4738 12.8296 11.7969 12.8296C11.9534 12.8296 12.1005 12.8905 12.2112 13.0012L12.6255 13.4155L13.4541 12.5869L13.0398 12.1726C12.7078 11.8405 12.2664 11.6577 11.7969 11.6577C10.8276 11.6577 10.0391 12.4463 10.0391 13.4155C10.0391 14.3848 10.8276 15.1733 11.7969 15.1733Z"
                        fill="#4D5680"
                      />
                      <path
                        d="M15.3125 11.6577H14.1406V14.0015V15.1733V17.5171H15.3125V15.8976L16.2223 17.7172L17.2705 17.1932L15.9676 14.5874L17.2705 11.9816L16.2223 11.4575L15.3125 13.2772V11.6577Z"
                        fill="#4D5680"
                      />
                      <path
                        d="M2.34375 8.14209V6.97021H1.17188V5.2124C1.17188 4.24314 1.96043 3.45459 2.92969 3.45459C3.89895 3.45459 4.6875 4.24314 4.6875 5.2124V6.97021H3.51562V8.14209H4.6875V8.72803C4.6875 9.05111 4.42465 9.31396 4.10156 9.31396H2.34375V10.4858H4.10156C5.07082 10.4858 5.85938 9.69729 5.85938 8.72803V8.14209V6.97021V5.2124C5.85938 3.59697 4.54512 2.28271 2.92969 2.28271C1.31426 2.28271 0 3.59697 0 5.2124V6.97021V8.14209H1.17188H2.34375Z"
                        fill="#5C7199"
                      />
                    </svg>
                    <span>Available 24/7</span>
                  </div>
                  <button className="text-green-800 font-medium hover:underline">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="lg:w-3/4 grid md:grid-cols-3 gap-6 ">
            {pricingOptions.map((plan) => (
              <div
                key={plan.id}
                className={`flex flex-col rounded-xl shadow-sm transition-all ${
                  plan.color
                } relative 
               ${
                 plan.color === "bg-green-800"
                   ? "h-[600px]"
                   : plan.color === "bg-blue-800"
                   ? "h-[600px]"
                   : "h-[550px]"
               } ${plan.color === "bg-green-800" ? "-top-13" : ""}`} // Ensuring it's starting from the top if needed
              >
                {plan.badge && (
                  <div
                    className={`   ${plan.badgeColor} text-white   p-2 w-[80% ] mx-auto   justify-center rounded-xl mt-2 flex items-center gap-2`}
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.5565 20.6281C14.6097 20.8416 14.796 21 15.016 21C15.238 21 15.4253 20.8385 15.478 20.6229C15.644 19.9435 15.9672 19.2124 16.4583 18.4297C17.5538 16.7008 19.6941 15.0042 21.6264 14.4565C21.8421 14.3953 22 14.2039 22 13.9797C22 13.7574 21.8447 13.5668 21.6305 13.5074C20.7555 13.2647 19.8963 12.8414 19.0651 12.25C17.2643 10.9758 15.9068 9.11587 15.4796 7.37835C15.4263 7.1616 15.2376 7 15.0144 7C14.7946 7 14.6077 7.15693 14.5536 7.36997C14.3417 8.20487 13.9497 9.01738 13.3776 9.84375C12.1599 11.6103 10.2966 12.9412 8.36486 13.5024C8.1523 13.5641 8 13.7551 8 13.9765C8 14.2027 8.15899 14.3961 8.37698 14.4565C9.29403 14.7105 10.2218 15.1884 11.1354 15.8776C13.0859 17.3405 14.1833 19.129 14.5565 20.6281Z"
                          fill="white"
                        />
                        <path
                          d="M6.74659 10.7875C6.77696 10.9095 6.88343 11 7.00916 11C7.136 11 7.24303 10.9077 7.27315 10.7845C7.36803 10.3963 7.55268 9.97854 7.83333 9.53125C8.45934 8.54334 9.68234 7.5738 10.7865 7.26084C10.9097 7.22591 11 7.11649 11 6.98841C11 6.86139 10.9112 6.75247 10.7888 6.71851C10.2889 6.5798 9.79788 6.33795 9.32292 6C8.29388 5.27191 7.51817 4.20907 7.27403 3.2162C7.24358 3.09234 7.13577 3 7.00822 3C6.88262 3 6.77581 3.08967 6.74492 3.21141C6.62383 3.68849 6.39983 4.15279 6.07292 4.625C5.37706 5.63448 4.31236 6.39498 3.20849 6.71564C3.08703 6.75092 3 6.86006 3 6.98655C3 7.11581 3.09085 7.22636 3.21542 7.26086C3.73945 7.40602 4.26958 7.67906 4.79167 8.07292C5.90622 8.90883 6.53334 9.93087 6.74659 10.7875Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    {plan.badge}
                  </div>
                )}

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-5">
                    <div
                      className={`${plan.iconBg} w-12 h-12 rounded-xl flex justify-center items-center text-lg font-bold`}
                    >
                      <Image
                        src={plan.icon}
                        width={20}
                        height={20}
                        alt="icon p-5"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-black">{plan.forText}</p>
                      <h3 className="text-xl font-semibold">{plan.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-black mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      <span className="text-2xl">{plan.currency} </span>
                      {plan.price}
                    </span>
                    <span className="text-sm text-gray-800 ml-1">
                      /{billingCycle}
                    </span>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-medium mb-3">What's included</h4>
                    <ul className="flex flex-col gap-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span
                            className={`w-5 h-5 rounded-full flex justify-center items-center text-white text-xs mr-2 ${
                              plan.color === "bg-green-800"
                                ? "bg-[#B49D97]"
                                : "bg-green-800"
                            }`}
                          >
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <button
                      className={`px-5 items-center flex justify-center mx-auto py-3 rounded-full text-sm font-medium ${
                        plan.color === "bg-green-800"
                          ? "bg-white text-green-800 hover:bg-gray-100"
                          : "bg-green-800 text-white hover:bg-green-900"
                      } transition-all`}
                    >
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
