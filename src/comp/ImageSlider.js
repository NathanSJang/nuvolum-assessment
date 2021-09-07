import React, {useState} from 'react'
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io';


export default function ImageSlider({ silderData }) {
    const [current, setCurrent] = useState(0);
    const length = silderData.length;

    return (
        <section className="slider">
            <IoMdArrowDropleftCircle className="left-arrow" />
            <IoMdArrowDroprightCircle className="right-arrow" />

            {silderData.map((data, idx) => {
                let path = 'images/slider-assets/' + data.image
                return <img src={path} alt={data.alt} />
            })}
        </section>
    )
}
