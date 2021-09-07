import React from 'react'

export default function Modal({ open, onClose, data }) {
    if(!open) return null;
    console.log(data.map(d => d.alt))
    return (
        <>
            <div className="overlay" />
            <div className="modal">
                {data[0].alt}
                <button className='modal-close-btn' onClick={onClose}>Close</button>
            </div>
        </>
    )
}
