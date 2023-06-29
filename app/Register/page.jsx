import Image from 'next/image'
import React from 'react'

const Register = () => {
    return (
        // <div >
        //     <div className='h-1/2 w-1/2 flex items-center justify-center '>
        //         <div className='w-1/2 h-full '>
        //             <Image
        //                 src="/login.png"
        //                 width={500}
        //                 height={500}
        //                 alt="Picture of the author"
        //             />
        //         </div>
        //         <div>

        //         </div>

        //     </div></div>

        <div className='h-screen w-full flex items-center justify-center bg-white'>

            <div
                class="container max-w-md mx-auto xl:max-w-3xl h-2/3 flex bg-white rounded-lg shadow overflow-hidden"
            >
                <div class="relative hidden xl:block xl:w-1/2 h-full">
                    <Image
                        class="absolute h-auto w-full object-cover"
                        src="/login.png"
                        alt="my zomato"
                        width={500}
                        height={500}
                    />
                </div>
                <div class="w-full xl:w-1/2 p-8">
                    <form method="post" action="#" onSubmit="return false">
                        <h1 className=' text-gray-700 text-lg font-semibold'>
                            Login
                        </h1>
                        {/* <h1 class=" text-2xl font-bold">Sign in to your account</h1> */}
                        <div>
                            <span class="text-gray-600 text-sm">
                                Dont have an account?
                            </span>
                            <span class="text-gray-700 text-sm font-semibold">
                                Sign up
                            </span>
                        </div>
                        <div class="mb-4 mt-6">
                            <label
                                class="block text-gray-700 text-sm font-semibold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                                id="email"
                                type="text"
                                placeholder="Your email address"
                            />
                        </div>
                        <div class="mb-6 mt-6">
                            <label
                                class="block text-gray-700 text-sm font-semibold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                class="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                                id="password"
                                type="password"
                                placeholder="Your password"
                            />
                            <a
                                class="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800 text-end w-full"
                                href="/forgot"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <div class="flex w-full mt-8">
                            <button
                                class="w-full bg-blue-500 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                                type="button"
                            >
                                Login
                            </button>

                        </div>
                        <div class="my-2 mb-4 border-b text-center">
                            <div
                                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                            >
                                or 
                            </div>
                        </div>
                        <div class="flex w-full ">
                            <button
                                class="w-full bg-blue-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                                type="button"
                            >
                              Register Now
                            </button>
                        </div>
                    </form>
                </div>
            </div></div >
    )
}

export default Register