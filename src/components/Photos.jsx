import React, { useState } from 'react'
import { photos } from '../data/photos'
import SinglePhoto from './SinglePhoto'
import ExpandPhoto from './ExpandPhoto'

const Photos = () => {
    const [show, setShow] = useState(false)
    const [myImage, setMyImage] = useState({})
    const showPhoto = (id) => {
        const findImage = photos.find((item) => {
            return item.id === id
        })

        setMyImage(findImage)
    }


    return (
        <>
            <ExpandPhoto myImage={myImage} show={show} setShow={setShow} />

            <div className="container-fluid my-3">
                <div className="row">
                    {photos.map((item) => {
                        return (
                            <>
                                <div className="col-lg-3 col-md-6 my-1">
                                    <div className="card border-0 rounded-3 bg-transparent">
                                        <SinglePhoto {...item} show={show} setShow={setShow} showPhoto={showPhoto} />
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Photos
