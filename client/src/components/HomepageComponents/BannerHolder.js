import React from 'react'

export default function BannerHolder({classBanner,children}){
    return(
        <div className={classBanner}>
            {children}
        </div>
    )
}