import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <p className="offer-text">
        FLAT 50% OFF on 2nd night on our newest escapes.
        Use code: <strong>NEWVISTAS</strong>
      </p>

      <nav className="navbar navbar-expand-lg navbar-dark p-5" style={{ marginTop: "-16px" }}>
        <div className="container-fluid" style={{marginTop:"-490px"}}>

          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="/media/images/stay-vista-icon.png"
              style={{ width: "120px" }}
              alt="Logo"
            />
          </Link>


          {/* Links */}
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav ms-auto align-items-center gap-3">

              <li className="nav-item" style={{fontFamily:"-moz-initial"}}>
                <Link className="nav-link" to="/brands">Brands</Link>
              </li>

              <li className="nav-item" style={{fontFamily:"-moz-initial"}}>
                <Link className="nav-link" to="/categories">Categories</Link>
              </li>

              <li className="nav-item" style={{fontFamily:"-moz-initial"}}>
                <Link className="nav-link" to="/listproperty">List your Property</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa-regular fa-bell"></i>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  <i className="fa-regular fa-user"></i>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <button className="btn btn-light btn-md">
                    <i className="fa-solid fa-phone me-1"></i>
                    Get in touch
                  </button>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
       <h3 style={{backgroundColor:"black",color:"white",fontFamily:"-moz-initial"}}>26% OFF On All Monday Stays</h3>
    </>
  );
}

export default Navbar;
