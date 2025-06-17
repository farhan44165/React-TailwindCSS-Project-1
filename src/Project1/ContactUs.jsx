// import React from 'react'

// const ContactUs = () => {
//     return (
//         <div>
//             <div className='bg-slate-900 py-7 pt-20'>
//                 <div className='text-4xl flex justify-center text-white italic py-5'>
//                     <h1 className='underline underline-offset-8'>Contact Us</h1>
//                 </div>

//                 <div className='flex items-center py-5'>
//                     <div className='w-[40%] h-[25rem] italic bg-black pt-24 pb-36 px-5'>
//                         <h2 className='text-yellow-300 text-3xl font-serif'>Contact Us Form</h2>
//                         <p className='text-white text-sm pt-5 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus temporibus voluptatem cum nostrum excepturi sunt quo aperiam consectetur dolor perferendis. Modi, quas. Sunt, sint culpa sit nesciunt, quos aliquam debitis porro asperiores fugit labore velit fuga aliquid voluptatem totam dolorum! Obcaecati doloremque, dolores at exercitationem voluptas vitae necessitatibus quos mollitia.</p>
//                     </div>
//                     <div className='w-[60%] h-[25rem] bg-white font-serif'>
//                         <form action="#" method='post' className='flex flex-col ml-8'>
//                             <label className='pt-5 italic '>YOUR NAME :</label>
//                             <input type="text" placeholder='Name...' required className='border border-black w-[60%] placeholder:italic focus:outline-none py-1 placeholder:px-2 rounded'/>
//                             <label className='pt-5 italic'>EMAIL ADDRESS :</label>
//                             <input type="email" placeholder='Email...' required className='border border-black w-[60%] placeholder:italic focus:outline-none py-1 placeholder:px-2 rounded'/>
//                             <label className='pt-5 italic'>MESSAGE :</label>
//                             <textarea cols="50" rows="5" placeholder='Message...' className='border border-black mt-2 w-[80%] placeholder:italic focus:outline-none py-1 placeholder:px-2 rounded'></textarea>
//                             <button className='border-black bg-zinc-500 text-white italic w-[25%] h-8 border-2 rounded mt-6'>SUBMIT</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ContactUs


import React from 'react';

const ContactUs = () => {
    return (
        <div className='bg-slate-900 py-10 pt-20 min-h-screen'>
            <div className='text-4xl flex justify-center text-white italic py-5'>
                <h1 className='underline underline-offset-8'>Contact Us</h1>
            </div>

            <div className='flex flex-col lg:flex-row items-stretch gap-6 px-4 md:px-10 py-6'>
                {/* Left Column */}
                <div className='w-full lg:w-1/2 bg-black italic text-white p-6 flex flex-col justify-center'>
                    <h2 className='text-yellow-300 text-3xl font-serif mb-4'>Contact Us Form</h2>
                    <p className='text-sm text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus temporibus voluptatem cum
                        nostrum excepturi sunt quo aperiam consectetur dolor perferendis. Modi, quas. Sunt, sint culpa sit
                        nesciunt, quos aliquam debitis porro asperiores fugit labore velit fuga aliquid voluptatem totam
                        dolorum! Obcaecati doloremque, dolores at exercitationem voluptas vitae necessitatibus quos mollitia.
                    </p>
                </div>

                {/* Right Column */}
                <div className='w-full lg:w-1/2 bg-white font-serif p-6'>
                    <form action="#" method="post" className='flex flex-col gap-4'>
                        <div>
                            <label className='italic block mb-1'>YOUR NAME:</label>
                            <input
                                type="text"
                                placeholder='Name...'
                                required
                                className='border border-black w-full placeholder:italic focus:outline-none py-2 px-3 rounded'
                            />
                        </div>
                        <div>
                            <label className='italic block mb-1'>EMAIL ADDRESS:</label>
                            <input
                                type="email"
                                placeholder='Email...'
                                required
                                className='border border-black w-full placeholder:italic focus:outline-none py-2 px-3 rounded'
                            />
                        </div>
                        <div>
                            <label className='italic block mb-1'>MESSAGE:</label>
                            <textarea
                                rows="5"
                                placeholder='Message...'
                                className='border border-black w-full placeholder:italic focus:outline-none py-2 px-3 rounded resize-none'
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className='bg-zinc-500 text-white italic border-2 border-black rounded py-2 px-4 w-fit hover:bg-zinc-600 transition'
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
