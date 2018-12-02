import React from 'react'

export const PictureRow = ({ children, image, invert }) => (
    <article style={{
        display: 'flex',
        flexDirection: invert ? 'row' : 'row-reverse',
        flexWrap: 'wrap',
        width: '100%',
    }}>
        <img style={{
            width: '50%',
        }}
            src={image}></img>
        <section style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '1rem',
            width: '50%',
        }}>
            {children}
        </section>
    </article>
)


