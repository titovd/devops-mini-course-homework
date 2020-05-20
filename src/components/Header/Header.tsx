import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <header>
            <div className="header-logo">
                <Link to="/">
                    Рыбацкий остров
                </Link>
            </div>
            <div className="header-container">
                <div className="header-item">
                    <Link to="/post-create">
                        НОВЫЙ ПОСТ
                    </Link>
                </div>
                <div className="header-item">
                    <Link to="/login">
                        ВОЙТИ
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;