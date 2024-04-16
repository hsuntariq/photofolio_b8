import React from 'react'

const ExpandPhoto = ({ show, setShow, myImage }) => {
    return (
        <>
            <div onClick={() => setShow(false)} style={{
                background: 'rgba(0,0,0,0.6)',
                height: '100vh',
                width: '100vw',
                zIndex: '22222',
                position: 'fixed',
                top: '0',
                transition: 'all 0.9s',
                scale: `${show ? '1' : '0'}`
            }} className="">

                <img src={myImage?.image} width="50%" className='mx-auto d-block' style={{ objectFit: 'cover' }} height="90%" alt="" />

            </div>
        </>
    )
}

export default ExpandPhoto