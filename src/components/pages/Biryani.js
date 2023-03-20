import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Card from 'react-bootstrap/Card';
import Cardsdata3 from '../Carddata3'
import { Types } from '../Types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Biryani() {
  const search = useSelector((state) => state.cartreducer.search);
  const datafilter = Cardsdata3.filter((item) =>
    search?.length > 0
      ? item.rname?.toLowerCase()?.includes(search?.toLowerCase())
      : true,
  );
  return (
    <>
    <Header/>
   
   <div className="container py-5">
 <div className="row">
 {datafilter.length > 0 ? (
            datafilter.map((item, id) => {
              return (
                <Card
                  style={{ width: '22rem' }}
                  className="col-md-4 col-10 mx-auto mb-3 cursor-pointer"
                >
                  <Link to={`/Cartpage/${item.id}/${Types.Biryani}`}>
                    <Card.Img variant="top" src={item.imgdata} style={{height:'200px'}} />
                  </Link>
                  <Card.Body>
                    <Card.Title>{item.rname}</Card.Title>
                    <Card.Text>RS{item.price}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <div
              className="py-5 text-center text-red-800"
              style={{ minHeight: '80vh' }}
            >
              <h3>Items not found</h3>
            </div>
          )}
     </div>
     </div>
   <Footer/>
   </>
  )
}

export default Biryani