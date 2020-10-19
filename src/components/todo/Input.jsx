import React from 'react'

function Input() {
    return (
        <form className="form-inline justify-content-center">
            
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="inputPassword2" className="sr-only">Password</label>
                <input type="text" className="form-control" placeholder="Add task..." />
            </div>
            <button type="submit" className="btn btn-outline-info mb-2">Add</button>
        </form>

    )
}

export default Input
