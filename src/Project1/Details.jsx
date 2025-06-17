// import React from 'react'
// import ig1 from '../assets/ig1.jpg'
// import ig2 from '../assets/ig2.jpg'
// import ig3 from '../assets/ig3.jpg'
// import ig8 from '../assets/ig8.jpg'

// const Details = () => {
//     return (
//         <div>
//             <div className=' bg-slate-900 text-white italic pt-20 h-[100vh]'>
//                 <div className='flex gap-10 py-4 h-[75vh]'>
//                     <div className='w-[34%] px-2'>
//                         <h1 className='font-serif text-sky-400 text-4xl tracking-wider'>MR FARHAN TECHNICAL</h1>
//                         <p className='text-sm py-3 leading-relaxed text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam expedita hic, eos laboriosam quaerat esse repellendus quam? Ipsa officia labore, quas, vero debitis distinctio aliquam eos rerum ipsam doloribus impedit expedita a voluptates molestiae voluptatum illo. Sed minus Perspiciatis deleniti vel delectus.</p>
//                     </div>
//                     <div className='w-[33%] px-20'>
//                         <h1 className='font-serif text-sky-400 text-4xl pb-3'>PROJECTS</h1>
//                         <ul className='list-[square] list-inside leading-relaxed'>
//                             <li>Software Development</li>
//                             <li>Web Development</li>
//                             <li>Transport Company</li>
//                             <li>Shopping Mall</li>
//                             <li>7-Star Hotels</li>
//                         </ul>
//                     </div>
//                     <div className='w-[33%]'>
//                         <div className='flex items-center gap-1 py-1'>
//                             <img className='w-[45%] h-[30%] border-2 border-white' src={ig1} alt="pic" />
//                             <img className='w-[45%] h-[30%] border-2 border-white' src={ig2} alt="pic" />
//                         </div>
//                         <div className='flex items-center gap-1'>
//                             <img className='w-[45%] h-[30%] border-2 border-white' src={ig3} alt="pic" />
//                             <img className='w-[45%] h-[30%] border-2 border-white' src={ig8} alt="pic" />
//                         </div>
//                     </div>
//                 </div>
//                 <h2 className='flex justify-center font-serif tracking-wider py-3'>Copyright &copy; 2022 All Rights Reserved. Design By               <span className='text-sky-400 underline tracking-wider'>Mr Farhan</span></h2>
//             </div>

//         </div>
//     )
// }

// export default Details


import React from 'react';
import ig1 from '../assets/ig1.jpg';
import ig2 from '../assets/ig2.jpg';
import ig3 from '../assets/ig3.jpg';
import ig8 from '../assets/ig8.jpg';

const Details = () => {
    return (
        <div
            className='
                text-white italic pt-20 px-4
                bg-slate-800
                sm:bg-slate-700
                md:bg-slate-600
                lg:bg-slate-900
                xl:bg-black
            '
        >
            {/* Main content area */}
            <div className='flex flex-col lg:flex-row gap-10 py-8'>
                {/* Left column */}
                <div className='lg:w-1/3'>
                    <h1 className='font-serif text-sky-400 text-3xl md:text-4xl tracking-wider'>MR FARHAN TECHNICAL</h1>
                    <p className='text-sm py-3 leading-relaxed text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam expedita hic, eos laboriosam
                        quaerat esse repellendus quam? Ipsa officia labore, quas, vero debitis distinctio aliquam eos
                        rerum ipsam doloribus impedit expedita a voluptates molestiae voluptatum illo. Sed minus
                        Perspiciatis deleniti vel delectus.
                    </p>
                </div>

                {/* Center column */}
                <div className='lg:w-1/3'>
                    <h1 className='font-serif text-sky-400 text-3xl md:text-4xl pb-3'>PROJECTS</h1>
                    <ul className='list-[square] list-inside leading-relaxed text-base'>
                        <li>Software Development</li>
                        <li>Web Development</li>
                        <li>Transport Company</li>
                        <li>Shopping Mall</li>
                        <li>7-Star Hotels</li>
                    </ul>
                </div>

                {/* Right column - Images */}
                <div className='lg:w-1/3 flex flex-wrap gap-2 justify-center lg:justify-start'>
                    <img className='w-[48%] border-2 border-white' src={ig1} alt="pic" />
                    <img className='w-[48%] border-2 border-white' src={ig2} alt="pic" />
                    <img className='w-[48%] border-2 border-white' src={ig3} alt="pic" />
                    <img className='w-[48%] border-2 border-white' src={ig8} alt="pic" />
                </div>
            </div>

            {/* Footer */}
            <h2 className='text-center font-serif tracking-wider py-6 text-sm sm:text-base'>
                Copyright &copy; 2022 All Rights Reserved.
                Design By <span className='text-sky-400 underline tracking-wider'>Mr Farhan</span>
            </h2>
        </div>
    );
};

export default Details;
