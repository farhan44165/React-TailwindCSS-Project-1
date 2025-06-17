// import React from 'react'
// import ot1 from "../assets/ot1.jpg";
// import ot2 from "../assets/ot2.jpg";
// import ot3 from "../assets/ot3.jpg";


// const OurTeam = () => {
//     return (
//         <div>
//             <div className='bg-slate-900 py-10 pt-20'>
//                 <div className='text-4xl flex justify-center text-white italic py-5'>
//                     <h1 className='underline underline-offset-8'>Our Team</h1>
//                 </div>

//                 <div className='flex items-center justify-between gap-3 ml-2 mr-2 pt-10'>
//                     <div className='bg-black border-4 border-white border-double h-[27rem] leading-relaxed hover:border-dotted hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition duration-500 ease-in-out'>
//                         <img className='w-[30rem] h-[20rem]' src={ot1} alt="IMG" />
//                         <div className='flex flex-col text-white items-center italic'>
//                             <h1 className='font-serif text-lg pt-3'>Elon Musk</h1>
//                             <h2 className='font-semibold tracking-wider'>CEO & Founder</h2>
//                             <h3 className='text-orange-600'>Web Developer & Programmer</h3>
//                         </div>
//                     </div>
//                     <div className='bg-black border-4 border-white border-double h-[27rem] leading-relaxed hover:border-dotted hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition duration-500 ease-in-out'>
//                         <img className='w-[30rem] h-[20rem]' src={ot2} alt="IMG" />
//                         <div className='flex flex-col text-white items-center italic'>
//                             <h1 className='font-serif text-lg pt-3'>Hira Virk</h1>
//                             <h2 className='font-semibold tracking-wider'>VCEO & Planner</h2>
//                             <h3 className='text-orange-600'>IT Expert</h3>
//                         </div>
//                     </div>
//                     <div className='bg-black border-4 border-white border-double h-[27rem] leading-relaxed hover:border-dotted hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition duration-500 ease-in-out'>
//                         <img className='w-[30rem] h-[20rem]' src={ot3} alt="IMG" />
//                         <div className='flex flex-col text-white items-center italic'>
//                             <h1 className='font-serif text-lg pt-3'>Mahrukh Jutt</h1>
//                             <h2 className='font-semibold tracking-wider'>Managing Director</h2>
//                             <h3 className='text-orange-600'>Web Designer</h3>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default OurTeam


import React from 'react';
import ot1 from "../assets/ot1.jpg";
import ot2 from "../assets/ot2.jpg";
import ot3 from "../assets/ot3.jpg";

const OurTeam = () => {
    const teamMembers = [
        {
            name: "Elon Musk",
            role: "CEO & Founder",
            skill: "Web Developer & Programmer",
            img: ot1,
        },
        {
            name: "Hira Virk",
            role: "VCEO & Planner",
            skill: "IT Expert",
            img: ot2,
        },
        {
            name: "Mahrukh Jutt",
            role: "Managing Director",
            skill: "Web Designer",
            img: ot3,
        },
    ];

    return (
        <div className='bg-slate-900 py-10 pt-20 min-h-screen'>
            <div className='text-4xl flex justify-center text-white italic py-5'>
                <h1 className='underline underline-offset-8'>Our Team</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 pt-10'>
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className='bg-black border-4 border-white border-double rounded-md overflow-hidden shadow-xl hover:border-dotted hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.4)] transition duration-500 ease-in-out'
                    >
                        <img
                            className='w-full h-64 object-cover'
                            src={member.img}
                            alt={member.name}
                        />
                        <div className='flex flex-col text-white items-center italic py-4 px-2'>
                            <h1 className='font-serif text-lg'>{member.name}</h1>
                            <h2 className='font-semibold tracking-wider'>{member.role}</h2>
                            <h3 className='text-orange-600'>{member.skill}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam;
