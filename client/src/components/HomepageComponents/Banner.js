import React from 'react'

export default function Banner({message,heading,children}){
    return(
        <div className='col-lg-6 col-sm-10 mx-auto banner'>
                <h4 className='text-center heading'>{heading}</h4>
            <div className='text-center'>
                <p className='lead'>{message}</p>
            </div>
            {children}
        </div>
    )
}