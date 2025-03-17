"use client";

import Image from "next/image";

const companies = [
  {
    name: "Almarai",
    logo: "/almarai.png",
  },
  {
    name: "Alrajhi Bank",
    logo: "/alrajhi.png", // Add actual logo URLs if missing
  },
  {
    name: "Visa",
    logo: "/visa.png",
  },
  {
    name: "Slack",
    logo: "/slack.png",
  },
  {
    name: "Xbox",
    logo: "/xbox.png",
  },
  {
    name: "LinkedIn",
    logo: "/linkedin.png",
  },
  {
    name: "Cisco",
    logo: "/cisco.png",
  },
  {
    name: "Bank Albilad",
    logo: "/bankalbilad.png",
  },
];

export function Trusted() {
  return (
    <section className="relative pt-30 h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/backgr.png"
          alt="Office Background"
          fill
          className="object-cover"
        />
        {/* Optional Blur & Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Block */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Chair Location Is
              <br />
              Trusted By The World's
              <br />
              Largest Companies.
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Join thousands of satisfied customers who trust us with their
              workspace needs. From startups to Fortune 500 companies, we
              provide flexible solutions for every business.
            </p>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-2 gap-7">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 h-[122px ] border-1 border-[#97A986] flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <div className="relative w-full h-12">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
