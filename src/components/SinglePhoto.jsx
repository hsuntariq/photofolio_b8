import React from 'react'
import { FaLink } from "react-icons/fa6";
import { FaExpandAlt } from "react-icons/fa";
import ExpandPhoto from './ExpandPhoto';

const SinglePhoto = ({ id, image, show, setShow, showPhoto }) => {

    return (
        <>
            <div className="position-relative touch rounded-3">
                <img className='rounded-3 photo' width='100%' src={image} alt="" />
                <div className="overlay rounded-3 d-flex justify-content-center align-items-center text-white fs-3 gap-3 position-absolute top-0" style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', opacity: '0' }}>
                    <div className="d-flex gap-3 icons">

                        <FaLink />
                        <FaExpandAlt cursor="pointer" onClick={() => {
                            showPhoto(id)
                            setShow(true)
                        }} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default SinglePhoto
