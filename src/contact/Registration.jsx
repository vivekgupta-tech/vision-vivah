import React from 'react'
import { LuPhoneCall } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { PiMapPinAreaDuotone } from "react-icons/pi";
function Registration() {
  return (
    <> 
    <div className='flex mt-24'>

    <div className='w-[40%] h-[120vh]   ml-24'>
    <marquee behavior="scroll" direction="left" className="bg-customRed"><p className=' text-white p-2 font-bold text-sm'> Do not Post Job and Promotional Queries</p></marquee>
   
   
   <form action="/submit" method="POST" class="space-y-4  p-6 rounded-lg ">
  {/* <!-- Name --> */}
  <div>
    <label for="name" class="block text-gray-700 text-xl font-semibold ">Name:</label><br />
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Enter your name"
      required
      class="border border-gray-300 rounded w-full p-2"
    />
  </div>

  {/* <!-- Email --> */}
  <div>
    <label for="email" class="block text-gray-700 text-xl font-semibold ">Email:</label><br />
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Enter your email"
      required
      class="border border-gray-300 rounded w-full p-2"
    />
  </div>

  {/* <!-- Mobile --> */}
  <div>
    <label for="mobile" class="block text-gray-700 text-xl font-semibold ">Mobile:</label><br />
    <input
      type="tel"
      id="mobile"
      name="mobile"
      placeholder="Enter your mobile number"
      pattern="[0-9]{10}"
      required
      class="border border-gray-300 rounded w-full p-2"
    />
  </div>

  {/* <!-- City --> */}
  <div>
    <label for="city" class="block text-gray-700 text-xl font-semibold ">City:</label><br />
    <input
      type="text"
      id="city"
      name="city"
      placeholder="Enter your city"
      required
      class="border border-gray-300 rounded w-full p-2"
    />
  </div>

  {/* <!-- Message --> */}
  <div>
    <label for="message" class="block text-gray-700 text-xl font-semibold ">Message:</label><br />
    <textarea
      id="message"
      name="message"
      placeholder="Type your message here"
      rows="4"
      required
      class="border border-gray-300 rounded w-full p-2"
    ></textarea>
  </div>

  {/* <!-- Submit Button --> */}
  <div>
    <button
      type="submit"
      class="bg-customRed text-white p-4 text-xl w-full rounded-3xl hover:bg-blue-600  "
    >
      SEND NOW
    </button>
  </div>
</form>

   






</div>
    <div className=' w-[45%] h-[100vh] ml-20 '>
     
    <LuPhoneCall  className='text-3xl mt-12  ml-64'/>
    <p className='text-center mt-2 text-md'>+91-7544037190</p>

    <TfiEmail className='text-3xl mt-24  ml-64'/>
    <p className='text-center mt-2 text-md'>info@visionvivaah.com</p>
    <PiMapPinAreaDuotone className='text-4xl mt-24  ml-64'/>
    <p className=' mt-2 text-sm text-center'>D-104, East of Kailash, New Delhi-110065 <br />
    Mumbai: H-26/A, Nootan Nagar, Gurunanak Road, Bandra West,<br />
    Mumbai-400050</p>
    </div>
    </div>
    </>

  )
}

export default Registration