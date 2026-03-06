import React from "react";
import Logo from "/Azhizen Academy Logo.png";

const logos = [
  "https://cropengine.in/cropengine-logo.png",
  "https://tse3.mm.bing.net/th/id/OIP.X8XMweKtxMnEq9vIkC92cgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
];

const IndustryLogoRow: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h3 className="text-center text-4xl font-bold mb-12 text-gray-800">
          Industry Powerhouses
        </h3>

        <div className="relative overflow-hidden">

          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>

          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* <div className="industry-slider flex w-max items-center gap-16">

            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 transition duration-300"
              >
                <img
                  src={logo}
                  alt="company logo"
                  className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100"
                />
              </div>
            ))}

          </div> */}

          <div className="relative overflow-hidden flex justify-center">

            <div className="industry-slider flex w-max items-center gap-16">

              {[...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 transition duration-300"
                >
                  <img
                    src={logo}
                    alt="company logo"
                    className="h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100"
                  />
                </div>
              ))}

            </div>

          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes industrySlideLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        // .industry-slider {
        //   animation: industrySlideLeftToRight 25s linear infinite;
        //   will-change: transform;
        // }

        @media (max-width: 768px) {
          .industry-slider {
            animation: industrySlideLeftToRight 35s linear infinite;
          }
        }
        `}
      </style>
    </section>
  );
};

export default IndustryLogoRow;