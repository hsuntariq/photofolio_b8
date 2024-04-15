import React from 'react'
import Button from './Button'

const Front = () => {
    return (
        <>
            <div className="col-lg-5 col-md-8 col-sm-10 mx-auto text-center">
                <h1>I'm <span className='name'>Jenny Wilson</span> a Professional Photographer from New York City</h1>
                <p className='text-secondary'>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
                <Button content="Available for hire" color="red" text="white" />
            </div>
        </>
    )
}

export default Front
