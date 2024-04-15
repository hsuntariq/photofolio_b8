import React from 'react'
import { photos } from '../data/photos'
import SinglePhoto from './SinglePhoto'

const Photos = () => {
    return (
        <>
            <div className="container-fluid my-3">
                <div className="row">
                    {photos.map((item) => {
                        return (
                            <>
                                <div className="col-lg-3 col-md-6 my-1">
                                    <div className="card border-0 rounded-3 bg-transparent">
                                        <SinglePhoto {...item} />
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
