import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assests/images/logo.png'
import { useForm } from 'react-hook-form';
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteMany, DeleteOne, ADD, Search } from '../redux/actions/action';
function Header() {
  const dispatch = useDispatch();
   const { register, handleSubmit } = useForm();
   const [Price, setPrice] = useState('');
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };
   const send = (item) => {
    // console.log(item);
    dispatch(ADD(item));
  };
  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);
  const total = () => {
    let price = 0;
    getdata.map((item, id) => {
      price = item.price * item.qnty + price;
    });
    setPrice(price);
  };
  useEffect(() => {
    total();
  }, [total]);
  // delete Many
  const dlt = (id) => {
    dispatch(DeleteMany(id));
  };
  // delete one
  const dltone = (item) => {
    dispatch(DeleteOne(item));
  };
  useEffect(() => {
    return () => {
      dispatch(Search(''));
    };
  }, []);
  return (
    <>
         <Navbar  className='bg-dark navbar position-sticky z-10 '>
      <Container className='flex  flex-md-row flex-column'>
        <Navbar.Brand href="#home">
          <figure className='text-center ms-5  '>
          <img src={logo} alt="not found" className='w-75 h-10 d-none d-lg-block' />
          </figure>
        </Navbar.Brand>
        <div id="sidebarMenu">
          <Nav className="ms-auto menu  ">
          <input type="checkbox" name="Checkbox" id="Checkbox" />
      <label for="Checkbox" id="label">
        <div className="spinner top"></div>
        <div className="spinner middle"></div>
        <div className="spinner bottom"></div>
      </label>
      <ul className=' flex flex-column bg-dark '>
        <li>
      <Badge
              badgeContent={getdata.length}
              color="primary"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              className="cursor-pointer"
            >
              <i
                className="fa-solid fa-cart-shopping text-white cursor-pointer "
                style={{ fontSize: '30px' }}
              ></i>
            </Badge>
            </li>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {getdata.length ? (
                <div
                  className="flex flex-column justify-center items-center"
                  style={{ width: '23rem' }}
                >
                  <table>
                    <thead>
                      <tr className="flex justify-content-around">
                        <th className="text-red-800">Photo</th>
                        <th className="text-red-800">Items Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getdata.map((element, id) => {
                        return (
                          <>
                            <tr className="flex justify-content-around pe-5">
                              <td>
                                <figure className="ps-4 pt-3">
                                  <img
                                    src={element.imgdata}
                                    alt="not found"
                                    srcset=""
                                    className="w-50"
                                  />
                                </figure>
                              </td>
                              <td className="pe-3">
                                <p className="text-red-800">{element.rname}</p>
                                <p className="text-red-800">
                                  Price:Rs{element.price}
                                </p>
                                <p className="text-red-800">
                                  Quanity:{element.qnty}
                                </p>
                                <div className="flex justify-around bg-red-800 items-center my-2 rounded">
                                  <span
                                    style={{ fontSize: 23 }}
                                    className="cursor-pointer text-white"
                                    onClick={() => dltone(element)}
                                  >
                                    -
                                  </span>
                                  <span
                                    style={{ fontSize: 23 }}
                                    className="cursor-pointer text-white"
                                  >
                                    {element.qnty}
                                  </span>
                                  <span
                                    style={{ fontSize: 23 }}
                                    className="cursor-pointer text-white"
                                    onClick={() => send(element)}
                                  >
                                    +
                                  </span>
                                </div>
                                <p>
                                  <i
                                    className="fas fa-trash cursor-pointer text-red-800"
                                    onClick={() => dlt(element.id)}
                                  ></i>
                                </p>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                      <p className="ps-4 text-red-800">Total:Rs{Price}</p>
                    </tbody>
                  </table>
                  <Link
                    to={`/Checkout/${Price}`}
                    className="py-2 bg-red-800 text-decoration-none px-2 text-white"
                  >
                    Check out
                  </Link>
                </div>
              ) : (
                <div
                  className="flex justify-around items-center"
                  style={{ width: '20rem' }}
                >
                  <h5 className="text-center">Your cart is Empty </h5>
                  {/* <figure>
                    <img src={cart} alt="not found" className="w-10 h-10" />
                  </figure> */}
                </div>
              )}
            </Menu>
        <li><Link to='/' className='text-decoration-none'>
            <Nav.Link href="#home"  className='text-white'>Home</Nav.Link>
            </Link></li>
        <li><Link to='/Pizza' className='text-decoration-none'>
            <Nav.Link href="#link" className='text-white'>Pizzaa</Nav.Link>
            </Link></li>
        <li> <Link to='/Biryani' className='text-decoration-none'>
            <Nav.Link href="#link" className='text-white'>Biryani</Nav.Link>
            </Link></li>
        <li><Link to='/Login'><Nav.Link href="#link" className='text-white'>Login</Nav.Link></Link></li>
        <li><Link to='/Register'><Nav.Link href="#link" className='text-white'>Create Account</Nav.Link></Link></li>
      
      </ul>  
            
          </Nav>   
          </div>
          <form
              onSubmit={handleSubmit((data) => {
                if (data) {
                  dispatch(Search(data.search));
                }
              })}
              className="search-box bg-red-800 me-md-3 flex justify-between items-center "
            >
              <input
                type="text"
                {...register('search', { required: true })}
                id="text-box"
                className="text-white ps-3"
                placeholder="Enter Product Name ....."
              />
              <button className="search-btn bg-gray-800 px-3 py-2 ">
               Search 
              </button>
            </form> 
           
      </Container>
    </Navbar>
    </>
  )
}

export default Header