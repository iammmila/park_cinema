import React, { useState } from 'react'
import { Link } from 'react-router-dom';

//general scss
import "./Navbar.scss"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='admin_nav'>
      <div className="container">
        <div className='nav_wrapper'>
          <div className="hamburger-menu">
            <button className={`hamburger ${isOpen ? 'hamburger--open' : ''}`} onClick={handleClick}>
              <span className="hamburger__box">
                <span className="hamburger__inner"></span>
              </span>
            </button>
            <nav className={`hamburger-menu__nav ${isOpen ? 'hamburger-menu__nav--open' : ''}`}>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                <li><Link to="/admin/users">Admins</Link></li>
                <li><Link to="/admin/cinemas">Cinemas</Link></li>
                <li><Link to="/admin/films">Films</Link></li>
                <li><Link to="/admin/languages">Languages</Link></li>
                <li><Link to="/admin/subtitles">Subtitles</Link></li>
                <li><Link to="/admin/formats">Formats</Link></li>
                <li><Link to="/admin/campaigns">Campaigns</Link></li>
                <li><Link to="/admin/contact">Contact</Link></li>
              </ul>
            </nav>
            {/* <button className="admin-navbar-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">Restaurant</h5>
              <button type="button" className="admin-close-btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-x"></i></button>
            </div>
            <div className="offcanvas-body">
              <div>
                <ul className='admin-list'>
                  <li>
                    <Link className="admin-list-link" to="/">Home</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminMenu">Food</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminDrink">Drink</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminChef">Chef</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminCocktail">Cocktail</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminDinner">Dinner</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminBreakfast">Breakfast</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminEvent">Event</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminShop">Bar Mleczny</Link>
                  </li>
                  <li >
                    <Link className="admin-list-link" to="adminBakery">Bakery</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminChurra">Churrascaria</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminBooth">Food Booth</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminCart">Food Cart</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminRestaurant">Restaurant</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminBlog">Blog</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminRes">Restaurant G</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminTable">TABLE G</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminGuest">GUEST G</Link>
                  </li>
                  <li>
                    <Link className="admin-list-link" to="adminInstagram">Instagram</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar