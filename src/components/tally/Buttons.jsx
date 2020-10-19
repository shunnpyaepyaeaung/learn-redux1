import React from 'react'

function Buttons({ icon, color , click}) {
    return (
        <div className="ui icon buttons">
            <button
                onClick={click}
                className="ui button">
                <i className={`${icon} ${color} icon`} />
            </button>
            
        </div>

    )
}

export default Buttons
