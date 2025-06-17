// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Autoplay, Navigation } from 'swiper/modules';
// import { motion } from 'framer-motion';
// import bg1 from "../assets/bg1.jpg";
// import bg2 from "../assets/bg2.jpg";
// import bg3 from "../assets/bg3.jpg";
// import bg4 from "../assets/bg4.jpg";
// import bg5 from "../assets/bg5.jpg";


// const Home = () => {
//   return (
//     <div className="relative w-full h-screen">
//       <Swiper
//         modules={[Pagination, Autoplay, Navigation]}
//         pagination={{ clickable: true }}
//         navigation
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         className="h-full"
//       >
//         <SwiperSlide>
//           <img src={bg1} className="w-full h-screen object-cover" alt="Slide 1" />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img src={bg2} className="w-full h-screen object-cover" alt="Slide 2" />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img src={bg3} className="w-full h-screen object-cover" alt="Slide 3" />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img src={bg4} className="w-full h-screen object-cover" alt="Slide 3" />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img src={bg5} className="w-full h-screen object-cover" alt="Slide 3" />
//         </SwiperSlide>
//       </Swiper>

//       <motion.div
//         className="absolute bottom-20 w-full text-center text-white z-10"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//       </motion.div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import bg5 from "../assets/bg5.jpg";

const Home = () => {
  return (
    <div className="relative w-full h-screen min-h-[500px]">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        {[bg1, bg2, bg3, bg4, bg5].map((bg, index) => (
          <SwiperSlide key={index}>
            <img
              src={bg}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover max-h-screen"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional: Add text overlay or call-to-action */}
      <motion.div
        className="absolute bottom-10 sm:bottom-16 w-full text-center px-4 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-2xl sm:text-4xl font-bold drop-shadow-md">
          Welcome to Farhan Technical
        </h1>
        <p className="text-white text-base sm:text-lg mt-2 drop-shadow-sm">
          Empowering creativity with technology.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
