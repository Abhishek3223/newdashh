import React from 'react'

const Form1 = () => {
    return (
        <div class="bg-white rounded-md shadow-lg p-4 mx-1 mt-3 px-4 md:p-8 mb-6">
            <h2 class="font-semibold text-xl text-gray-900">Form Title</h2>
            <p class="text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="bg-red-100 border flex gap-3 border-red-400 text-red-700 px-4 py-2 my-2 rounded relative" role="alert">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" fill="#7F1D1D" />
                </svg>
                <div>
                    {/* <strong class="font-bold">Holy smokes !</strong> */}
                    <span class="block sm:inline"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga delectus doloribus aliquid sed vitae.</span>
                </div>

            </div>
            <div class=" mt-3 w-full">
                <div class="shadow overflow-hidden rounded border-b border-gray-200">
                    <table class="min-w-full bg-white  rounded-md">
                        <thead class="bg-gray-400 text-white">
                            <tr>
                                <th class="w-1/4 text-left py-3 px-4  font-semibold text-sm">Table Title</th>
                                <th class="w-1/4 text-left py-3 px-4  font-semibold text-sm">Table Title</th>
                                <th class="w-1/4 text-left py-3 px-4  font-semibold text-sm">Table Title</th>
                                <th class="w-1/4 text-left py-3 px-4 font-semibold text-sm">Table Title</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-700">


                            <tr class=" ">
                                <td class="w-1/4 text-left py-3 px-4 border">Emma</td>
                                <td class="w-1/4 text-left py-3 px-4 border">Johnson</td>
                                <td class="w-1/4 text-left py-3 px-4 border"><a class="hover:text-blue-500" href="tel:lorem ipusm">lorem ipusm</a></td>
                                <td class="w-1/4 text-left py-3 flex px-4 gap-3">
                                    <button type="button" class="focus:outline-none text-white bg-blue-500   font-medium rounded-lg text-sm px-3 py-1 mb-2 dark:hover:bg-purple-700  flex">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z" fill="white" />
                                        </svg>
                                        Edit
                                    </button>
                                    <button type="button" class=" flex focus:outline-none text-white bg-[#D97706] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-1 mb-2  ">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z" fill="white" />
                                        </svg>Purple
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-gray-100  r">
                                <td class="w-1/4 text-left py-3 px-4 border">Emma</td>
                                <td class="w-1/4 text-left py-3 px-4 border">Johnson</td>
                                <td class="w-1/4 text-left py-3 px-4 border"><a class="hover:text-blue-500" href="tel:lorem ipusm">lorem ipusm</a></td>
                                <td class="w-1/4 text-left py-3 flex px-4 gap-3">
                                    <button type="button" class="focus:outline-none text-white bg-blue-500   font-medium rounded-lg text-sm px-3 py-1 mb-2 dark:hover:bg-purple-700  flex">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z" fill="white" />
                                        </svg>
                                        Edit
                                    </button>
                                    <button type="button" class=" flex focus:outline-none text-white bg-[#D97706] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-1 mb-2  ">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z" fill="white" />
                                        </svg>Purple
                                    </button>
                                </td>
                            </tr>
                            <tr class="  r">
                                <td class="w-1/4 text-left py-3 px-4 border">Emma</td>
                                <td class="w-1/4 text-left py-3 px-4 border">Johnson</td>
                                <td class="w-1/4 text-left py-3 px-4 border"><a class="hover:text-blue-500" href="tel:lorem ipusm">lorem ipusm</a></td>
                                <td class="w-1/4 text-left py-3 flex px-4 gap-3">
                                    <button type="button" class="focus:outline-none text-white bg-blue-500   font-medium rounded-lg text-sm px-3 py-1 mb-2 dark:hover:bg-purple-700  flex">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z" fill="white" />
                                        </svg>
                                        Edit
                                    </button>
                                    <button type="button" class=" flex focus:outline-none text-white bg-[#D97706] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-1 mb-2  ">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z" fill="white" />
                                        </svg>Purple
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-gray-100  r">
                                <td class="w-1/4 text-left py-3 px-4 border">Emma</td>
                                <td class="w-1/4 text-left py-3 px-4 border">Johnson</td>
                                <td class="w-1/4 text-left py-3 px-4 border"><a class="hover:text-blue-500" href="tel:lorem ipusm">lorem ipusm</a></td>
                                <td class="w-1/4 text-left py-3 flex px-4 gap-3">
                                    <button type="button" class="focus:outline-none text-white bg-blue-500   font-medium rounded-lg text-sm px-3 py-1 mb-2 dark:hover:bg-purple-700  flex">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z" fill="white" />
                                        </svg>
                                        Edit
                                    </button>
                                    <button type="button" class=" flex focus:outline-none text-white bg-[#D97706] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-1 mb-2  ">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z" fill="white" />
                                        </svg>Purple
                                    </button>
                                </td>
                            </tr>
                            <tr class="">
                                <td class="w-1/4 text-left py-3 px-4 border">Emma</td>
                                <td class="w-1/4 text-left py-3 px-4 border">Johnson</td>
                                <td class="w-1/4 text-left py-3 px-4 border"><a class="hover:text-blue-500" href="tel:lorem ipusm">lorem ipusm</a></td>
                                <td class="w-1/4 text-left py-3 flex px-4 gap-3">
                                    <button type="button" class="focus:outline-none text-white bg-blue-500   font-medium rounded-lg text-sm px-3 py-1 mb-2 dark:hover:bg-purple-700  flex">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z" fill="white" />
                                        </svg>
                                        Edit
                                    </button>
                                    <button type="button" class=" flex focus:outline-none text-white bg-[#D97706] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-1 mb-2  ">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z" fill="white" />
                                        </svg>Purple
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-gray-100  r">
                                <td class="w-1/4 text-left py-3 px-4 border">Emma</td>
                                <td class="w-1/4 text-left py-3 px-4 border">Johnson</td>
                                <td class="w-1/4 text-left py-3 px-4 border"><a class="hover:text-blue-500" href="tel:lorem ipusm">lorem ipusm</a></td>
                                <td class="w-1/4 text-left py-3 flex px-4 gap-3">
                                    <button type="button" class="focus:outline-none text-white bg-blue-500   font-medium rounded-lg text-sm px-3 py-1 mb-2 dark:hover:bg-purple-700  flex">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z" fill="white" />
                                        </svg>
                                        Edit
                                    </button>
                                    <button type="button" class=" flex focus:outline-none text-white bg-[#D97706] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-1 mb-2  ">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5325 6.9675L11.0325 2.4675C10.9634 2.40004 10.8819 2.34656 10.7925 2.31C10.6995 2.27221 10.6004 2.25187 10.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V13.5C2.25 14.0967 2.48705 14.669 2.90901 15.091C3.33097 15.5129 3.90326 15.75 4.5 15.75H13.5C14.0967 15.75 14.669 15.5129 15.091 15.091C15.5129 14.669 15.75 14.0967 15.75 13.5V7.5C15.7506 7.4013 15.7317 7.30345 15.6943 7.21207C15.657 7.12069 15.602 7.03758 15.5325 6.9675ZM6.75 3.75H9.75V5.25H6.75V3.75ZM11.25 14.25H6.75V12C6.75 11.8011 6.82902 11.6103 6.96967 11.4697C7.11032 11.329 7.30109 11.25 7.5 11.25H10.5C10.6989 11.25 10.8897 11.329 11.0303 11.4697C11.171 11.6103 11.25 11.8011 11.25 12V14.25ZM14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25H12.75V12C12.75 11.4033 12.5129 10.831 12.091 10.409C11.669 9.98705 11.0967 9.75 10.5 9.75H7.5C6.90326 9.75 6.33097 9.98705 5.90901 10.409C5.48705 10.831 5.25 11.4033 5.25 12V14.25H4.5C4.30109 14.25 4.11032 14.171 3.96967 14.0303C3.82902 13.8897 3.75 13.6989 3.75 13.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H5.25V6C5.25 6.19891 5.32902 6.38968 5.46967 6.53033C5.61032 6.67098 5.80109 6.75 6 6.75H10.5C10.6989 6.75 10.8897 6.67098 11.0303 6.53033C11.171 6.38968 11.25 6.19891 11.25 6V4.8075L14.25 7.8075V13.5Z" fill="white" />
                                        </svg>Purple
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <nav className=' w-full  flex justify-center items-center mt-3' aria-label="Page navigation  example">
                <ul class="inline-flex items-center gap-1 -space-x-px">
                    <li>
                        <a href="#" class="  rounded-md block px-3 py-2 ml-0 leading-tight text-gray-500 bg-whiterounded-l-lg hover:bg-blue-700 hover:text-gray-700  dark:text-gray-400  dark:hover:text-white">
                            <span class="sr-only">Previous</span>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="px-3 rounded-md py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-700 hover:text-gray-700  dark:text-gray-400  dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" class="px-3 rounded-md py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-700 hover:text-gray-700  dark:text-gray-400  dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" class="z-10 rounded-md px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-500 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" class="px-3 py-2 leading-tight rounded-md text-gray-500 bg-white border border-gray-300 hover:bg-blue-700 hover:text-gray-700  dark:text-gray-400  dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" class="px-3 py-2 leading-tight rounded-md text-gray-500 bg-white border border-gray-300 hover:bg-blue-700 hover:text-gray-700  dark:text-gray-400  dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#" class="block px-3 rounded-md py-2 leading-tight text-gray-500 bg-white  rounded-md rounded-r-lg hover:bg-blue-700 hover:text-gray-700  dark:text-gray-400  dark:hover:text-white">
                            <span class="sr-only">Next</span>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Form1