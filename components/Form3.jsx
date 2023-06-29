import React from 'react'

const Form3 = () => {
    return (
        <div class="bg-white rounded-md shadow-lg p-4 mx-1 mt-3 px-4 md:p-8 mb-6">
            <h2 class="font-semibold text-xl text-gray-900">Form Title</h2>
            <p class="text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="m-2 ml-0 gap-3">
                <button class="bg-yellow-400 rounded-md border-yellow-600 border-2 gap-2 mr-2 text-gray-800 font-bold py-2 px-4  inline-flex items-center">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1513_1298)">
                            <path d="M0 0H25V25H0V0Z" fill="#012169" />
                            <path d="M25 0V3.125L15.7227 12.5L25 21.6309V25H21.7285L12.4023 15.8203L3.32031 25H0V21.6797L9.08203 12.5488L0 3.61328V0H3.02734L12.4023 9.17969L21.4844 0H25Z" fill="white" />
                            <path d="M8.98438 15.8203L9.52148 17.4805L2.05078 25H0V24.8535L8.98438 15.8203ZM15.0391 15.2344L17.6758 15.625L25 22.8027V25L15.0391 15.2344ZM25 0L15.625 9.57031L15.4297 7.42188L22.7539 0H25ZM0 0.0488281L9.42383 9.27734L6.54297 8.88672L0 2.39258V0.0488281Z" fill="#C8102E" />
                            <path d="M8.59375 0V25H16.4062V0H8.59375ZM0 8.59375V16.4062H25V8.59375H0Z" fill="white" />
                            <path d="M0 10.1562V14.8438H25V10.1562H0ZM10.1562 0V25H14.8438V0H10.1562Z" fill="#C8102E" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1513_1298">
                                <rect width="25" height="25" rx="3" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <span>English</span>
                </button>
                <button class="bg-gray-100 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center justify-start gap-2">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1513_1278)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H25V25H0V0Z" fill="#E30A17" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0312 12.8906C17.0312 16.3379 14.1846 19.1357 10.6787 19.1357C7.17285 19.1357 4.32617 16.3379 4.32617 12.8857C4.32617 9.43359 7.16797 6.64551 10.6738 6.64551C14.1797 6.64551 17.0361 9.43848 17.0361 12.8906H17.0312Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3486 12.8906C17.3486 15.6494 15.0732 17.8857 12.2656 17.8857C9.45801 17.8857 7.1875 15.6494 7.1875 12.8906C7.1875 10.1318 9.45801 7.89551 12.2656 7.89551C15.0732 7.89551 17.3438 10.1318 17.3438 12.8906H17.3486Z" fill="#E30A17" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2666 9.9707L18.2178 12.2803L16.0596 12.8662L18.1836 13.623L18.1348 15.7373L19.5166 14.0869L21.6113 14.8096L20.4004 13.0371L21.875 11.2744L19.6094 11.8994L18.2666 9.9707Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1513_1278">
                                <rect width="25" height="25" rx="3" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <span>Turkish</span>
                </button>
            </div>
            <div class="grid gap-4 gap-y-2 text-sm">
                {/* <div class="text-gray-600">
            <p class="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
        </div> */}

                <div class="">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                        <div class="md:col-span-6">
                            <label for="full_name">Label Title</label>
                            <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                        </div>
                        {/* 
                <div class="md:col-span-5">

                </div> */}

                        <div class="md:col-span-2">
                            <label for="address">Label Title</label>
                            <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Placeholder content" />
                        </div>

                        <div class="md:col-span-2">
                            <label for="city">Label Title</label>
                            <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="Placeholder content" />
                        </div>

                        <div class="md:col-span-2">
                            <label for="country">Label Title</label>
                            <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                <input name="country" id="country" placeholder="Placeholder content" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />

                            </div>
                        </div>

                        <div class="md:col-span-3">
                            <label for="state">Label Title</label>
                            <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                <input name="state" id="state" placeholder="Placeholder content" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />

                                <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                    <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                </button>
                            </div>
                        </div>

                        <div class="md:col-span-3">
                            <label for="Label Title">Label Title</label>
                            <input type="text" name="Label Title" id="Label Title" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Placeholder content" value="" />
                        </div>



                        <div class="md:col-span-6">
                            <label for="Label Title">Label Title</label>

                            <textarea required="" name="message" id="" class="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" placeholder="Placeholder content" spellcheck="false"></textarea>
                        </div>

                        {/* <div class="md:col-span-6 text-right">
                    <div class="inline-flex items-end">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form3