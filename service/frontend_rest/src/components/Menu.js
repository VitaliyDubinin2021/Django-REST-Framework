import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="ms-2 navbar-brand mb-0 h1">Menu</span>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Список всех пользователей</a>
                    <a className="nav-item nav-link disabled" href="#">Пользователь</a>
                    <a className="nav-item nav-link disabled" href="#">Справочная информация</a>
                    <a className="nav-item nav-link disabled" href="#">Контактная информация</a>
                </div>
            </div>
        </nav>
    )
}

export default Menu

