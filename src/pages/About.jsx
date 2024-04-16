import React from 'react'
import Button from '../components/Button'
import AboutUs from '../components/AboutUs'
import Testemonials from '../components/Testemonials'
import Slider from '../components/Slider'

const About = () => {
    return (
        <>
            <div className="col-lg-5 mx-auto text-center col-md-8 col sm-10">
                <h1>About</h1>
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore et totam libero perferendis molestiae voluptates sapiente adipisci sint natus? Cum rerum tempora at atque, ullam est eveniet velit expedita earum!
                </p>
                <Button content="Available for hire" text="white" color="purple" />
            </div>
            <div className="container mx-auto col-lg-8 col-md-8 col-sm-10">
                <AboutUs />
            </div>
            <Testemonials />

            <div className="container">
                <Slider />
            </div>
        </>
    )
}

export default About