import React, {Component} from 'react';

class Header extends Component {
    constructor(){
        super()
        this.state = {
            showDropdown: false

        }
    }

    toggleDropdown = () => {
        this.setState({showDropdown: !this.state.showDropdown})
    }

    render(){
        return(
            <body>
                <header>
                    <div id='logo'>Start Bootstrap</div>
                    <nav id='desktop-nav'>
                        <a>SERVICES</a>
                        <a>PORTFOLIO</a>
                        <a>ABOUT</a>
                        <a>TEAM</a>
                        <a>CONTACT</a>
                    </nav>
                    <button id='mobile-nav' onClick=                       {this.toggleDropdown}> MENU </button>
                </header>
                {this.state.showDropdown
                    ? (<div class='dropdown'>
                        <div id='dropdown-container'>
                            <a>SERVICES</a>
                            <a>PORTFOLIO</a>
                            <a>ABOUT</a>
                            <a>TEAM</a>
                            <a>CONTACT</a>
                        </div>
                        <div></div>
                    </div>)
                    : null}
                <div class='container'>
                    <h4>WELCOME TO OUR STUDIO!</h4>
                    <h1>IT'S NICE TO MEET YOU</h1>
                    <button id="container-button" >TELL ME MORE</button>
                </div>
        </body> 
        )
    }
}

export default Header;