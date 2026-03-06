// import React from "react";
// import Logo from "/Azhizen Academy Logo.png"

// const logos = [
//     Logo,
//     "https://ksrce.ac.in/assets/img/logo/KSRCE_New_logo.png"
// ];

// const CompanyLogoSlider: React.FC = () => {
//     return (
//         <section className="py-16 bg-white overflow-hidden">
//             <div className="max-w-7xl mx-auto px-6">
//                 <h3 className="text-center text-4xl font-bold mb-12 text-gray-800">
//                     Students Across Campuses
//                 </h3>

//                 {/* <div className="relative overflow-hidden">
//           <div className="logo-marquee flex w-max items-center gap-16">
//             {[...logos, ...logos].map((logo, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 opacity-70 hover:opacity-100 transition duration-300"
//               >
//                 <img
//                   src={logo}
//                   alt="company logo"
//                   className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
//                 />
//               </div>
//             ))}
//           </div>
//         </div> */}

//                 <div className="relative overflow-hidden">
//                     <div className="logo-marquee flex w-max items-center gap-16">
//                         {[...logos, ...logos].map((logo, index) => (
//                             <div
//                                 key={index}
//                                 className="flex-shrink-0 opacity-70 hover:opacity-100 transition duration-300"
//                             >
//                                 <img
//   src={logo}
//   alt="company logo"
//   className="h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300"
// />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <style>
//                 {`
//           @keyframes logoScroll {
//             0% { transform: translateX(-50%); }
//             100% { transform: translateX(0); }
//           }

//           .logo-marquee {
//             animation: logoScroll 25s linear infinite;
//             will-change: transform;
//           }

//           .logo-marquee:hover {
//             animation-play-state: paused;
//           }

//           @media (max-width: 768px) {
//             .logo-marquee {
//               animation: logoScroll 35s linear infinite;
//             }
//           }
//         `}
//             </style>
//         </section>
//     );
// };

// export default CompanyLogoSlider;










import React from "react";

const logos = [
  "https://erode-sengunthar.ac.in/wp-content/uploads/2023/02/ESEC_Logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27kYOfju0RvmKVHdNUwvo6BmYdNbWmv0OgQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzJ2GtSRS3qK6CUH7JnqiGftJHrM9yGXcpQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShncADBHPKBUKYPmPdalI1ONye5zH4Ds9qlg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHdCWdGMknd4WAt_cBAq-NdjonT_dYX-VeA&s",
  "https://www.ksrct.ac.in/assets/images/home/KSRCT%20logo.png"
];

const CompanyLogoSlider: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h3 className="text-center text-4xl font-bold mb-12 text-gray-800">
          Students Across Campuses
        </h3>

        {/* Slider Container */}
        <div className="relative overflow-hidden flex justify-center">

  {/* Left Fade */}
  <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>

  {/* Right Fade */}
  <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

  {/* Logo Track */}
  <div className="logo-marquee flex w-max items-center gap-16">

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

  </div>

</div>
      </div>

      {/* Animation CSS */}
      <style>
        {`
        @keyframes logoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-marquee {
          animation: logoScroll 25s linear infinite;
          will-change: transform;
        }

        @media (max-width: 768px) {
          .logo-marquee {
            animation: logoScroll 35s linear infinite;
          }
        }
        `}
      </style>
    </section>
  );
};

export default CompanyLogoSlider;