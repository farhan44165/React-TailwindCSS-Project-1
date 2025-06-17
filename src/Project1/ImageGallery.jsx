// import React from 'react'
// import ig1 from "../assets/ig1.jpg";
// import ig2 from "../assets/ig2.jpg";
// import ig3 from "../assets/ig3.jpg";
// import ig4 from "../assets/ig4.jpg";
// import ig5 from "../assets/ig5.jpg";
// import ig6 from "../assets/ig6.jpg";
// import ig7 from "../assets/ig7.jpg";
// import ig8 from "../assets/ig8.jpg";
// import ig9 from "../assets/ig9.jpg";


// const ImageGallery = () => {
//     return (
//         <div>

//             <div className='bg-slate-900 py-10 pt-20'>
//                 <div className='text-3xl flex justify-center text-white italic py-5'>
//                     <h1 className='underline underline-offset-8'>Image Gallery</h1>
//                 </div>
                
//                 <div className='px-12 pt-10'>
//                     <div className='flex justify-center gap-20 py-5'>
//                         <img className='w-[30rem] h-[12rem] opacity-50 hover:opacity-100 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition duration-500 ' src={ig1} alt="img" />
//                         <img className='w-[30rem] h-[12rem] opacity-50 hover:opacity-100 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition duration-500 ' src={ig2} alt="img" />
//                         <img className='w-[30rem] h-[12rem] opacity-50 hover:opacity-100 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition duration-500 ' src={ig3} alt="img" />
//                     </div>

//                     <div className='flex justify-center gap-20 py-5'>
//                         <img className='w-[30rem] h-[12rem] opacity-50 hover:opacity-100 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition duration-500 ' src={ig4} alt="img" />
//                         <img className='w-[30rem] h-[12rem] opacity-50 hover:opacity-100 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition duration-500 ' src={ig5} alt="img" />
//                         <img className='w-[30rem] h-[12rem] opacity-50 hover:opacity-100 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition duration-500 ' src={ig6} alt="img" />
//                     </div>

//                     <div className='flex justify-center gap-20 py-5'>
//                         <img className='w-[30rem] h-[12rem] opacity-50 hover:opacity-100 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition duration-500 ' src={ig7} alt="img" />
//                         <img className='w-[30rem] h-[12rem] opacity-50 hover:opacity-100 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition duration-500 ' src={ig8} alt="img" />
//                         <img className='w-[30rem] h-[12rem] opacity-50 hover:opacity-100 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition duration-500 ' src={ig9} alt="img" />
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default ImageGallery


import React from 'react';
import ig1 from "../assets/ig1.jpg";
import ig2 from "../assets/ig2.jpg";
import ig3 from "../assets/ig3.jpg";
import ig4 from "../assets/ig4.jpg";
import ig5 from "../assets/ig5.jpg";
import ig6 from "../assets/ig6.jpg";
import ig7 from "../assets/ig7.jpg";
import ig8 from "../assets/ig8.jpg";
import ig9 from "../assets/ig9.jpg";

const ImageGallery = () => {
    const images = [ig1, ig2, ig3, ig4, ig5, ig6, ig7, ig8, ig9];

    return (
        <div className='bg-slate-900 py-10 pt-20 min-h-screen'>
            <div className='text-3xl flex justify-center text-white italic py-5'>
                <h1 className='underline underline-offset-8'>Image Gallery</h1>
            </div>

            <div className='px-4 sm:px-8 md:px-12 pt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            className='w-full max-w-md h-48 object-cover rounded-lg opacity-50 hover:opacity-100 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition duration-500'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
