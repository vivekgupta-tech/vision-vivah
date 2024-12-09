import React from "react";
import { BiColor } from "react-icons/bi";

function Navbar() {
  return (
    <>
    <div className="flex justify-center gap-40 pr-2"style={{backgroundColor: "var(--deepblue)",color:"var(--yellow)" }} >
     <div  >
        <ul className="flex  gap-7 text-lg p-4 mt-2" style={{color:"var(--yellow)"}}>
            <li >Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Our Blog </li>
        </ul>
    </div>

 <div> <img src="https://www.visionvivaah.com/argon/img/brand/logo.png"alt="" className="h-[11vh] w-[16vh] mx-1 mb-1"/> </div>
 {/* <button style={{ backgroundColor: "var(--cyan)", color: "white" }}>
 Cyan Button  </button> */}
    <div>
        
        <ul className="flex text-center   gap-7 text-lg p-4 mt-2">
            <li>Gallery</li>
            <li>Client Testimonials</li>
            <li>Contact Us</li>
        </ul>
    </div>
      </div>
    </>
  );
}

export default Navbar;
