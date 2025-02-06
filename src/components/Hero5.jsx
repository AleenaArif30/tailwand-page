// import React from 'react'

// const Hero5 = () => {
//   return (
//     <>

//     <div className='w-full bg-white flex items-center justify-center'>
//     <div className='max-w-screen-xl w-full px-4 py-6'>

//         <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1' >

//             <div className='items-center justify-center'><img src="https://images.unsplash.com/flagged/photo-1559475555-b26777ed3ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" className='w-20 rounded-full'/></div>
//             <div className='items-center'>            <h4 className='text center font-bold text-black'>Roy Hardy</h4>
//             <p className='text-center'>web Developer</p>

//             </div>
//         </div>
//     </div>
//     </div>

//     </>
//   )
// }

// export default Hero5

import React from 'react'

const Hero5 = () => {
    return (
        <>
            <div className='w-full bg-white flex items-center justify-center'>
                <div className='max-w-screen-xl w-full px-4 py-6'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-4'>
                        <div className='flex flex-col items-center justify-center'>
                            <img
                            src='https://images.unsplash.com/flagged/photo-1559475555-b26777ed3ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
                                alt=""
                                className='w-40 h-40 rounded-full mb-4'
                            />
                            <h4 className='text-center font-bold text-black'>Roy Hardy</h4>
                            <p className='text-center'>Web Developer</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            {/* You can place any other content you want for the second column */}
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className='w-40 h-40 rounded-full mb-4'
                            />
                            <h4 className='text-center font-bold text-black'>Donnie houstal</h4>
                            <p className='text-center'>visual Designer</p>


                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className='w-40 h-40 rounded-full mb-4'
                            />
                            <h4 className='text-center font-bold text-black'>Jake Burk</h4>
                            <p className='text-center'>Graphic Designer</p>



                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero5
