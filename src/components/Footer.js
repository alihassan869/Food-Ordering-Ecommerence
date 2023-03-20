import React from 'react'
import play1 from '../assests/app-store.png'
import play2 from '../assests/play-store.png'
import play3 from '../assests/images/logo.png'
function Footer() {
  return (
    <>
     <footer className="footer card-footer bg-dark">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 col-10 mx-auto text-white">
            <h5>Download Our App</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              dicta!
            </p>
            <figure className="d-flex">
              <img
                src={play2}
                className="img-fluid w-25 h-25 me-2"
              />
              <img src={play1} className="img-fluid w-25 h-25" />
            </figure>
          </div>
          <div className="col-md-4 col-10 mx-auto text-center text-white">
            <figure className="mx-auto text-center">
              <img src={play3} className="img-fluid w-50 h-50" />
            </figure>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              deleniti necessitatibus neque non perferendis nihil!
            </p>
          </div>
          <div className="col-md-2 col-10 mx-auto text-center">
            <h5 className="text-white">UseFull Links</h5>
            <div className="links">
              <a href="#" className="d-block text-decoration-none text-white"
                >Coupans</a
              >
              <a href="#" className="d-block text-decoration-none text-white"
                >Blog Post</a
              >
              <a href="#" className="d-block text-decoration-none text-white"
                >Return Policy</a
              >

              <a href="#" className="d-block text-decoration-none text-white"
                >Join Affriate</a
              >
            </div>
          </div>
          <div className="col-md-2 col-10 mx-auto text-center">
            <h5 className="text-white">Follows Us</h5>
            <div className="links">
              <a href="#" className="d-block text-decoration-none text-white"
                >Facebook</a
              >
              <a href="#" className="d-block text-decoration-none text-white"
                >Twiiter</a
              >
              <a href="#" className="d-block text-decoration-none text-white"
                >Instragram</a
              >

              <a href="#" className="d-block text-decoration-none text-white"
                >Youtube</a
              >
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-white">CopyRights@2020-ALIturtorials</p>
    </footer>
    </>
  )
}

export default Footer