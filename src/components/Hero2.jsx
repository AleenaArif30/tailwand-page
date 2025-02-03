// import React from 'react'

// const Hero2 = () => {
//   return (
// <>
// <div className='w-full bg-gray-100 flex items-center justify-center'>
    
//     <div className='grid grid-cols-3 justify-items-center items-center'>
//         <h1>15K</h1>
        
        
//     </div>
//     <div className='grid grid-cols-3 justify-items-center items-center'>
//         <h1>150K</h1>
        
        
        
//     </div>
//     <div className='grid grid-cols-3 justify-items-center items-center'>
//         <h1>15</h1>
        
        
//     </div>
//     <div className='grid grid-cols-3 justify-items-center items-center'>
//         <h1>100+</h1>
        
        
//     </div>
    
// </div>


    
    
    



// </>
//   )
// }

// export default Hero2

import React from 'react';

const Hero2 = () => {
  return (
    <>
      <div className='w-full bg-white flex items-center justify-center py-12'>
        <div className='max-w-screen-xl w-full px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8'>
            {/* Card 1 */}
            <div className='text-center'>
              <h1 className='text-lime-500 font-bold text-4xl sm:text-5xl md:text-6xl'>
                15K
              </h1>
              <p className='text-gray-600 text-base sm:text-lg md:text-xl mt-2'>
                Happy customers
              </p>
            </div>

            {/* Card 2 */}
            <div className='text-center'>
              <h1 className='text-lime-500 font-bold text-4xl sm:text-5xl md:text-6xl'>
                150K
              </h1>
              <p className='text-gray-600 text-base sm:text-lg md:text-xl mt-2'>
                Monthly Visitors
              </p>
            </div>

            {/* Card 3 */}
            <div className='text-center'>
              <h1 className='text-lime-500 font-bold text-4xl sm:text-5xl md:text-6xl'>
                15
              </h1>
              <p className='text-gray-600 text-base sm:text-lg md:text-xl mt-2'>
                Countries Worldwide
              </p>
            </div>

            {/* Card 4 */}
            <div className='text-center'>
              <h1 className='text-lime-500 font-bold text-4xl sm:text-5xl md:text-6xl'>
                100+
              </h1>
              <p className='text-gray-600 text-base sm:text-lg md:text-xl mt-2'>
                Top Partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
