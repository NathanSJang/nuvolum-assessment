import React, {useState} from 'react';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io';


export default function ImageSlider({ silderData }) {
    const [current, setCurrent] = useState(0);
    const len = silderData.length;

    if(len <= 0) {
        return null;
    }

    const nextSlide = () => {
        const next = current === len -1 ? 0 : current + 1;
        setCurrent(next);
    }

    const prevSlide = () => {
        const prev = current === 0 ? len -1 : current - 1;
        setCurrent(prev);
    }

    const moveDot = (idx) => {
        setCurrent(idx);
    }

    return (
        <div className="slider-container">
            <section className="slider">
                <IoMdArrowDropleftCircle className='left-arrow' onClick={prevSlide}/>
                <IoMdArrowDroprightCircle className="right-arrow" onClick={nextSlide}/>
    

                {silderData.map((data, idx) => {
                    let path = 'images/slider-assets/' + data.image
                    return (
                        <div className={idx === current ? "slide active" : "slide"} key={idx}>
                            {idx === current && (
                                <img 
                                src={path} 
                                alt={data.alt}
                                className="image"
                                />
                                )}
                        </div>
                    ) 
                })}
                <div className='container-dots'>
                    {Array.from({length: len}).map((dot, idx) => (
                        <div 
                            onClick={() => moveDot(idx)}
                            className={idx === current ? "dot active" : "dot"}
                        >
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
