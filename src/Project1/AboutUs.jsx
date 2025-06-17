// import React from 'react'
// import c2 from "../assets/c2.jpg";

// const AboutUs = () => {
//   return (
//     <div>
//       <div className='bg-slate-900 h-[100vh] text-white pt-20'>
//         <div className='text-4xl flex justify-center py-5'>
//           <h1 className='underline underline-offset-8'>About Us</h1>
//         </div>

//         <div className='flex items-center px-10 py-5 gap-10 mt-8'>
//           <div className='w-[35%] border-dotted border-2'>
//             <img className='w-[26rem]' src={c2} alt="About Company" />
//           </div>
//           <div className='w-[65%] text-justify'>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eveniet commodi alias officia? Delectus iure dignissimos culpa porro dolorum eos impedit maxime laudantium quam alias, non adipisci eum fugit perspiciatis magnam error tempore aliquam consequatur autem cupiditate. Tempore earum quisquam recusandae. Quos quidem porro unde eaque totam quae adipisci? Cupiditate placeat ab eum dolores dicta ducimus quo architecto aut, ipsam minima iusto numquam officia perspiciatis. Facilis commodi recusandae nemo eveniet. Officiis aspernatur error numquam asperiores!</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AboutUs


import React from 'react';
import c2 from "../assets/c2.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className='bg-slate-900 min-h-screen text-white pt-20 pb-10 px-4'>
        <div className='text-3xl md:text-4xl flex justify-center py-5'>
          <h1 className='underline underline-offset-8'>About Us</h1>
        </div>

        <div className='flex flex-col md:flex-row items-center md:items-start gap-8 mt-6 max-w-6xl mx-auto'>
          {/* Image Section */}
          <div className='w-full md:w-1/2 border-dotted border-2 p-2'>
            <img className='w-full h-auto object-cover rounded-lg' src={c2} alt="About Company" />
          </div>

          {/* Text Section */}
          <div className='w-full md:w-1/2 text-justify'>
            <p className='text-base md:text-lg leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi eveniet commodi alias officia?
              Delectus iure dignissimos culpa porro dolorum eos impedit maxime laudantium quam alias, non
              adipisci eum fugit perspiciatis magnam error tempore aliquam consequatur autem cupiditate.
              Tempore earum quisquam recusandae. Quos quidem porro unde eaque totam quae adipisci? Cupiditate
              placeat ab eum dolores dicta ducimus quo architecto aut, ipsam minima iusto numquam officia
              perspiciatis. Facilis commodi recusandae nemo eveniet. Officiis aspernatur error numquam asperiores!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
