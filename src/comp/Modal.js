import React from 'react'

export default function Modal({ open, onClose, data }) {
    if(!open) return null;
    console.log(data.map(d => d.alt))
    return (
        <>
            <div className="overlay" />
            <div className="modal">
                <h6>{data[0].alt}</h6>
                <button className='modal-close-btn' onClick={onClose}>Close</button>
            </div>
        </>
    )
}
