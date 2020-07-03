import React, { useState, useEffect } from "react"
import { useHotkeys } from 'react-hotkeys-hook';

import './test.css'

function Models() {
    const [flipped, setFlipped] = useState(false)
    const toggleFlipped = () => { console.log('toggle flipped'); setFlipped(!flipped) }

    useEffect(() => {
        document.addEventListener('keydown', toggleFlipped)

        return () => document.removeEventListener('keydown', toggleFlipped)
    })

    useHotkeys('space', e => { e.preventDefault(); console.log('space'); toggleFlipped(); })

    const className = ["card", flipped ? ' flipped' : ''].join(' ')

    return (
        <div id="root" onClick={toggleFlipped}>
            {/* {flipped ? 'front' : 'back'}
            <span>{className}</span> */}
            <div className="card-wrapper">
                <div className={className}>
                    <div className="card-side front">Front</div>
                    <div className="card-side back">Back</div>
                </div>
            </div>
        </div>
    )
}

export default Models
