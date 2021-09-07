import React from 'react'

const Header = (props) => {
    return (
        <header className="App-header">
            <p>
                {props.title}
            </p>
            <p>
                {props.title2}
            </p>
        </header>
    )
}

export default Header
