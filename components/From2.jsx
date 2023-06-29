import React from 'react'

const From2 = () => {
    return (
        <div className=' grid grid-cols-4'>
            <div class="col-span-3 bg-white rounded-md shadow-lg p-4 mx-1 mt-3 px-4 md:p-8 mb-6">
                <h2 class="font-semibold text-xl text-gray-900">Form Title</h2>
                <p class="text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div class="grid gap-4 gap-y-2 my-4 text-sm">
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



                            <div class="md:col-span-6">
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
            <div className='col-span-1 bg-white rounded-md shadow-lg p-4 mx-1 mt-3 px-4 md:p-8 mb-6'>
                <h2 class="font-semibold text-xl text-gray-900">Form Title</h2>
                <p class="text-gray-500 ">Lorem ipsum dolor </p>

                <div class="grid gap-4 gap-y-2 my-4 text-sm">
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



                            <div class="md:col-span-6">
                                <label for="state">Label Title</label>
                                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                    <input name="state" id="state" placeholder="Placeholder content" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />

                                    <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                        <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                    </button>
                                </div>
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
                            <button type="button" class="col-span-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 bt-4  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Button Title</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default From2