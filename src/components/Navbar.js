import React from 'react'

const Navbar = ({showForm,changeBtn}) => {

    return (
        <nav className="navbar">
            <div className="navbar-title">
                Notes Keeper
            </div>
            {changeBtn ? <div style={{ background:"red" }} onClick={showForm} className="addBtn">
                Close
            </div> : <div onClick={showForm} className="addBtn">
                Add
            </div>
            }
        </nav>
    )
}

export default Navbar
