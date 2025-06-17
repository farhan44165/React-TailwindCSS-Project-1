// import React from 'react'
// import { FaCheckCircle } from "react-icons/fa";
// import { ImCross } from "react-icons/im";

// const OurServices = () => {
//     return (
//         <div>
//             <div className='bg-slate-900 py-10 pt-20'>
//                 <div className='text-4xl flex justify-center text-white italic py-5'>
//                     <h1 className='underline underline-offset-8'>Our Services</h1>
//                 </div>

//                 <div className='flex justify-between gap-5 ml-2 mr-2 pt-10'>
//                     {/* 1st Div-Column */}
//                     <div className='bg-black border-2 border-white text-white italic px-10 shadow-[8px_8px_10px_white] rounded-md hover:-translate-y-2 transition duration-500 ease-out'>
//                         <div className='ml-5 mr-5'>
//                             <p className='bg-sky-400 flex justify-center mt-5 text-2xl tracking-wider'>FREE</p>
//                             <h1 className='text-5xl font-serif flex justify-center py-5'>Price</h1>
//                             <p className='flex justify-center text-xl tracking-wider pb-4'>$ 0.00 / Month</p>
//                             <hr className='ml-14 mr-14 py-4' />
//                             <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, nihil quis voluptatum accusamus ducimus nemo a tempora, nisi doloremque tenetur laudantium temporibus, inventore pariatur dolor exercitationem ipsa quas obcaecati odit!</p>
//                             <div className='not-italic flex items-center font-serif py-5 justify-between'>
//                                 <p>Get Information</p>
//                                 <FaCheckCircle />
//                             </div>
//                             <div className='not-italic flex items-center font-serif justify-between'>
//                                 <p>Services</p>
//                                 <ImCross className='text-xs' />
//                             </div>
//                             <div className='not-italic flex items-center font-serif py-5 justify-between'>
//                                 <p>Packages</p>
//                                 <ImCross className='text-xs' />
//                             </div>
//                         </div>
//                     </div>

//                     {/* 2nd Div-Column */}
//                     <div className='bg-black border-2 border-white text-white italic px-10 shadow-[8px_8px_10px_white] rounded-md hover:-translate-y-2 transition duration-500 ease-out'>
//                         <div className='ml-5 mr-5'>
//                             <p className='bg-sky-400 flex justify-center mt-5 text-2xl tracking-wider'>PROFESSIONAL</p>
//                             <h1 className='text-5xl font-serif flex justify-center py-5'>Price</h1>
//                             <p className='flex justify-center text-xl tracking-wider pb-4'>$ 50.00 / Month</p>
//                             <hr className='ml-14 mr-14 py-4' />
//                             <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, nihil quis voluptatum accusamus ducimus nemo a tempora, nisi doloremque tenetur laudantium temporibus, inventore pariatur dolor exercitationem ipsa quas obcaecati odit!</p>
//                             <div className='not-italic flex items-center font-serif py-5 justify-between'>
//                                 <p>Get Information</p>
//                                 <FaCheckCircle />
//                             </div>
//                             <div className='not-italic flex items-center font-serif justify-between'>
//                                 <p>Services</p>
//                                 <FaCheckCircle />
//                             </div>
//                             <div className='not-italic flex items-center font-serif py-5 justify-between'>
//                                 <p>Packages</p>
//                                 <FaCheckCircle />
//                             </div>
//                         </div>
//                     </div>

//                     {/* 3rd Div-Column */}
//                     <div className='bg-black border-2 border-white text-white italic px-10 shadow-[8px_8px_10px_white] rounded-md hover:-translate-y-2 transition duration-500 ease-out'>
//                         <div className='ml-5 mr-5'>
//                             <p className='bg-sky-400 flex justify-center mt-5 text-2xl tracking-wider'>ENTERPRICE</p>
//                             <h1 className='text-5xl font-serif flex justify-center py-5'>Price</h1>
//                             <p className='flex justify-center text-xl tracking-wider pb-4'>$ 20.00 / Month</p>
//                             <hr className='ml-14 mr-14 py-4' />
//                             <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, nihil quis voluptatum accusamus ducimus nemo a tempora, nisi doloremque tenetur laudantium temporibus, inventore pariatur dolor exercitationem ipsa quas obcaecati odit!</p>
//                             <div className='not-italic flex items-center font-serif py-5 justify-between'>
//                                 <p>Get Information</p>
//                                 <FaCheckCircle />
//                             </div>
//                             <div className='not-italic flex items-center font-serif justify-between'>
//                                 <p>Services</p>
//                                 <FaCheckCircle />
//                             </div>
//                             <div className='not-italic flex items-center font-serif py-5 justify-between'>
//                                 <p>Packages</p>
//                                 <ImCross className='text-xs' />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default OurServices

import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const OurServices = () => {
    return (
        <div className='bg-slate-900 py-10 pt-20 min-h-screen'>
            <div className='text-4xl flex justify-center text-white italic py-5'>
                <h1 className='underline underline-offset-8'>Our Services</h1>
            </div>

            {/* Responsive Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 pt-10'>
                {/* Pricing Cards */}
                {[
                    {
                        plan: "FREE",
                        price: "$ 0.00 / Month",
                        info: [true, false, false],
                    },
                    {
                        plan: "PROFESSIONAL",
                        price: "$ 50.00 / Month",
                        info: [true, true, true],
                    },
                    {
                        plan: "ENTERPRICE",
                        price: "$ 20.00 / Month",
                        info: [true, true, false],
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className='bg-black border-2 border-white text-white italic px-6 py-4 shadow-[8px_8px_10px_white] rounded-md hover:-translate-y-2 transition duration-500 ease-out'
                    >
                        <p className='bg-sky-400 flex justify-center mt-3 text-xl tracking-wider'>
                            {item.plan}
                        </p>
                        <h1 className='text-4xl font-serif flex justify-center py-4'>Price</h1>
                        <p className='flex justify-center text-lg tracking-wider pb-3'>{item.price}</p>
                        <hr className='my-4 mx-auto w-4/5' />
                        <p className='text-justify text-sm md:text-base'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, nihil quis voluptatum accusamus ducimus nemo a tempora, nisi doloremque tenetur.
                        </p>

                        <div className='not-italic space-y-3 text-base font-serif mt-5'>
                            <div className='flex justify-between items-center'>
                                <p>Get Information</p>
                                {item.info[0] ? <FaCheckCircle /> : <ImCross className='text-xs' />}
                            </div>
                            <div className='flex justify-between items-center'>
                                <p>Services</p>
                                {item.info[1] ? <FaCheckCircle /> : <ImCross className='text-xs' />}
                            </div>
                            <div className='flex justify-between items-center'>
                                <p>Packages</p>
                                {item.info[2] ? <FaCheckCircle /> : <ImCross className='text-xs' />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
