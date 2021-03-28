import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
    <div className="container"><a className="navbar-brand js-scroll-trigger" href="#">Smaztours</a><button data-toggle="collapse" data-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" value="Menu"><i className="fa fa-bars"></i></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item nav-link js-scroll-trigger"><a className="nav-link active js-scroll-trigger" href="#about">About</a></li>
                <li className="nav-item nav-link js-scroll-trigger"><a className="nav-link js-scroll-trigger" href="#services">services</a></li>
                <li className="nav-item nav-link js-scroll-trigger"><a className="nav-link js-scroll-trigger" href="#contact">contact</a></li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar;
