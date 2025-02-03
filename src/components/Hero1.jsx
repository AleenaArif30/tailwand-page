// // import React from 'react'

// // const Hero1 = () => {
// //   return (
// //     <>
// //     <br /><br /><br />
    
// // <div className='max-w-1xl w-full bg-gray-100 items-center justify-items-center'>
// // <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center text-center '>


// // <div>
// //     <h1 className='font-bold text-black-800 lg:text-7xl md:text-6xl text-3xl'>25K + Students Trust Us</h1>
// //     <br />
// //     <br />
// //     <p className='text black-300 lg:text-3xl text-2xl'>Every day brings with it a fresh set of learning possibilities.

// // </p>
// // <br /><br />
// // <button className='bg-green-500 text-white w-50 h-10'>Get Quote now</button>
// // <button className='bg-white text-green-500 border border-green-500 w-50 h-10 lg:ml-2 ml-2 mt-2'>Get Quote now</button>

// // </div>

// // <div>
// //     <img src="https://faazizpro.github.io/online-class-landing-page/Assets/images/hero-bg.webp" alt="" className='w-full rounded=lg' />
// // </div>

// // </div> 


// // </div>

    
// //     </>
// //   )
// // }

// // export default Hero1



// import React from 'react';

// const Hero1 = () => {
//   return (
//     <>
//       <br /><br /><br />
//       <div className='w-full bg-gray-100 flex items-center justify-center'>
//         <div className='max-w-screen-xl w-full px-4 py-6'>
//           <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center text-center'>
//             {/* Text Section */}
//             <div className='text-center'>
//               <h1 className='font-bold text-black lg:text-6xl md:text-5xl text-3xl'>
//                 25K + Students Trust Us
//               </h1>
//               <br />
//               <p className='text-gray-600 lg:text-3xl text-xl'>
//                 Every day brings with it a fresh set of learning possibilities.
//               </p>
//               <br />
//               <br />
//               <div className='flex justify-center gap-4'>
//                 <button className='bg-green-500 text-white px-4 py-3 text-sm rounded-lg hover:bg-green-600 transition'>
//                   Get Quote Now
//                 </button>
//                 <button className='bg-white text-green-500 border border-green-500 px-4 py-3 text-sm rounded-lg hover:bg-green-100 transition'>
//                   Get Quote Now
//                 </button>
//               </div>
//             </div>

//             {/* Image Section */}
//             <div className='w-full'>
//               <img
//                 src='https://faazizpro.github.io/online-class-landing-page/Assets/images/hero-bg.webp'
//                 alt='Hero Background'
//                 className='w-full rounded-lg shadow-lg'
//               />
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero1;

import React from 'react';

const Hero1 = (props) => {
  return (
    <>
      <br /><br /><br />
      <div className='w-full bg-gray-100 flex items-center justify-center'>
        <div className='max-w-screen-xl w-full px-4 py-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center text-center'>
            {/* Text Section */}
            <div className='text-center'>
              <h1 className='font-bold text-black lg:text-6xl md:text-5xl text-3xl'>
                {props.title1}
              </h1>
              <br />
              <p className='text-gray-600 lg:text-3xl text-xl'>
                {props.dec}
              </p>
              <br />
              <br />
              <div className='flex justify-center gap-4'>
                <button className='bg-green-500 text-white px-4 py-3 text-sm rounded-lg hover:bg-green-600 transition'>
                  Get Quote Now
                </button>
                <button className='bg-white text-green-500 border border-green-500 px-4 py-3 text-sm rounded-lg hover:bg-green-100 transition'>
                  Get Quote Now
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className='w-full'>
              <img
                
        src={props.src}
                alt='Hero Background'
                className='w-full rounded-lg shadow-lg'
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-1 justify-items-center'>
            {/* Card 1 */}
            <div className='bg-white shadow-lg rounded-lg overflow-hidden h-60 w-60'>
              <img
                src='https://faazizpro.github.io/online-class-landing-page/Assets/icons/edu.png'
                alt=''
                className='w-15 h-15 '
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>expert instruction</h3>
                <p className='text-gray-600 text-sm'>
                The gradual accumulation of information about atomic and small-scale behaviour...


                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className='bg-white shadow-lg rounded-lg overflow-hidden h-60 w-60'>
              <img
                src='https://faazizpro.github.io/online-class-landing-page/Assets/icons/edu.png'
                alt=''
                className='w-15 h-15 '
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>expert instruction</h3>
                <p className='text-gray-600 text-sm'>
                The gradual accumulation of information about atomic and small-scale behaviour...


                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className='bg-white shadow-lg rounded-lg overflow-hidden h-60 w-60'>
              <img
                src='https://faazizpro.github.io/online-class-landing-page/Assets/icons/edu.png'
                alt=''
                className='w-15 h-15 '
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>expert instruction</h3>
                <p className='text-gray-600 text-sm'>
                The gradual accumulation of information about atomic and small-scale behaviour...


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero1;
