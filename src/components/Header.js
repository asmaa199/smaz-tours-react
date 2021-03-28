import React from 'react';

const Header = () => {
    const background = {
        backgroundImage:`url(assets/img/background.jpg)`,
        height: '100vh',
    }
  return (
    <header className="masthead" style={background}>
      <div className="intro-body">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h1 className="text-center">Time for vacation?</h1>
                    <p>SmazTours is here to make your work easier.<br/> So, be at ease and trust us for everything.</p>    
                   <p><a className="btn btn-link btn-circle" role="button" href="#about"><i className="fa fa-angle-double-down animated"></i></a></p>
                </div>
            </div>
        </div>
     </div>
  </header>
  )
}

export default Header;
