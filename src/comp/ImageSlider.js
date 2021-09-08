import React, {useState, useEffect} from 'react';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io';
import Modal from './Modal';


export default function ImageSlider({ silderData }) {
    const [current, setCurrent] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [imgData, setImgData] = useState(null)
    const len = silderData.length;

    useEffect(() => {
        let data = silderData.filter(d => d.id === current +1)
        setImgData(data);
    }, [current, silderData]);

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
                <div 
                    className="inner"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                {silderData.map((data, idx) => {
                    let path = 'images/slider-assets/' + data.image
                    return (
                        <img
                            onClick={() => setOpenModal(true)}
                            src={path}
                            alt={data.alt}
                            className="image"
                        /> 
                    ) 
                })}
                </div>
                <Modal open={openModal} onClose={() => setOpenModal(false)} data={imgData} />

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
