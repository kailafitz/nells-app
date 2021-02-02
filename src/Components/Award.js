import React from 'react'

export default function Award({ award }) {
    return (
        <div className="f-AwardDiv">
            <p className="f-p f-b f-i">{award}</p>
            <hr/>
        </div>
    )
}