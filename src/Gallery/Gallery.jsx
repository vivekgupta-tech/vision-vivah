import React from 'react'
import imga1 from "../assets/imga1.jpg"
import imga2 from "../assets/imga2.jpeg"
import imga3 from "../assets/imga3.jpeg"
import imga4 from "../assets/imga4.jpeg"
import imga5 from "../assets/imga5.jpeg"
import imga6 from "../assets/imga6.jpeg"
import imga7 from "../assets/imga7.jpeg"
import imga8 from "../assets/imga8.jpeg"
import imga9 from "../assets/imga9.jpeg"
import imga10 from "../assets/imga10.jpeg"
import imga11 from "../assets/imga11.jpeg"
import imga12 from "../assets/imga12.jpeg"
import imga13 from "../assets/imga13.jpeg"
import imga14 from "../assets/imga14.jpeg"
import imga15 from "../assets/imga15.jpeg"
import imga16 from "../assets/imga16.jpeg"
import imga17 from "../assets/imga17.jpeg"
import imga18 from "../assets/imga18.jpg"
import imga19 from "../assets/imga19.jpg"
import imga20 from "../assets/imga20.jpg"
import imga21 from "../assets/imga21.jpg"
import imga22 from "../assets/imga22.jpg"
import imga23 from "../assets/imga23.jpg"
import imga24 from "../assets/imga24.jpg"
import imga25 from "../assets/imga25.jpg"
import imga26 from "../assets/imga26.jpg"
import imga27 from "../assets/imga27.jpg"
import imga28 from "../assets/imga28.jpg"
import imga29 from "../assets/imga29.jpg"
import imga30 from "../assets/imga30.jpg"
import './Gallery.css'

const cards =[
  { id: 1, card: imga1 },
  { id: 2, card: imga2 },
  { id: 3, card: imga3 },
  { id: 4, card: imga4 },
  { id: 5, card: imga5 },
  { id: 6, card: imga6 },
  { id: 7, card: imga7 },
  { id: 8, card: imga8 },
  { id: 9, card: imga9 },
  { id: 10, card: imga10 },
  { id: 11, card: imga11 },
  { id: 12, card: imga12 },
  { id: 13, card: imga13 },
  { id: 14, card: imga14 },
  { id: 15, card: imga15 },
  { id: 16, card: imga16 },
  { id: 17, card: imga17 },
  { id: 18, card: imga18 },
  { id: 19, card: imga19 },
  { id: 20, card: imga20 },
  { id: 21, card: imga21 },
  { id: 22, card: imga22 },
  { id: 23, card: imga23 },
  { id: 24, card: imga24 },
  { id: 25, card: imga25 },
  { id: 26, card: imga26 },
  { id: 27, card: imga27 },
  { id: 28, card: imga28 },
  { id: 29, card: imga29 },
  { id: 30, card: imga30 }
];


const cardlist=cards.map((card)=> <div className="card" key={card.id}>
<img src={card.card} alt="" />
 </div>  )
function Gallery() {

  return (
 <div className="gallery-main-wraper">
    <div className='gallery-wraper'>
   
   {cardlist}        
    </div>
    </div>
    
  )
}

export default Gallery
