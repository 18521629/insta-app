import React from 'react';
import NavLogo from './NavLogo';
import NavLink from './NavLink';
import NavLinkDrop from './NavLinkDrop';
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            username: "User"
        }
    }

    render() {
        return (
            <div className="navbar_wrapper">
                <nav>
                    <div className="navbar__contents">
                        <NavLogo />
                        <div className="navbar__links__wrapper">
                            <ul className="navbar__links">
                                <NavLink title="Home" />
                                <NavLink title="Categories" />
                                <NavLink title="Cart" />
                                <NavLinkDrop title={this.state.username} />
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;