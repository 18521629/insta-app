import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ title, url }) => {
    return (
        <>
            <a href={url}>{title}</a>
        </>
    );
}

const NavLinkDrop = ({ title }) => {
    return (
        <>
            <li>
                <div className="navbar__links__drop">
                    <button className="dropBtn">
                        {title} <i className="fas fa-caret-down"></i>
                    </button>
                    <div className="dropdown__menu">
                        <Link title="Login" />
                        <Link title="Register" />
                    </div>
                </div>
            </li>
        </>
    )
}

NavLinkDrop.propTypes = {
    title: PropTypes.string
}

Link.defaultProps = {
    title: "Link",
    url: "#"
}

Link.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
}

export default NavLinkDrop