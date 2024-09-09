// import CloseIcon from '@mui/icons-material/Close';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import Badge from "@mui/material/Badge";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import React, { useEffect, useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Table from 'react-bootstrap/esm/Table';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { DLT } from '../redux/actions/Actions';


// function Header() {
//     const [price,setPrice]=useState(0)



//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const getData = useSelector((state) => state.cartReducer.carts)
//     console.log(getData);

//     const dispatch=useDispatch()
//     const dlt=(id)=>{
//         // console.log("Deleting item with id:", id);
//         dispatch(DLT(id))
//     }

//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const total=()=>{
//         let price=0
//         getData.map((ele)=>{
//             price=price+(ele.price*ele.qnty)
//     })
//     setPrice(price)
// }

// useEffect(()=>{
//     total()
// },[total])

//     return (
//         <Navbar collapseOnSelect expand="lg" className="bg-dark" data-bs-theme="dark">
//             <Container>
//                 <Navbar.Brand href="/"><i>Foodcart</i></Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <NavLink to="/" className='text-white text-decoration-none mx-3'>home</NavLink>
//                         <NavLink to="/Pizzas" className='text-white text-decoration-none mx-3'>pizzas</NavLink>
//                         <NavLink to="/Snacks" className='text-white text-decoration-none mx-3'>snacks</NavLink>

//                     </Nav>
//                     <Nav>
//                         <NavLink to="/">
//                             <div>
//                                 <Button
//                                     id="basic-botton"
//                                     aria-controls={open ? 'basic-menu' : undefined}
//                                     aria-haspopup="true"
//                                     area-expanded={open ? 'true' : undefined}
//                                     onClick={handleClick}>

//                                     <Badge badgeContent={getData.length} color="primary">
//                                         <ShoppingCartIcon className='text-white' />
//                                     </Badge>

//                                 </Button>
//                                 <Menu
//                                     id="basic-menu"
//                                     anchorEl={anchorEl}
//                                     open={open}
//                                     onClose={handleClose}
//                                     MenuListProps={{
//                                         'aria-labelledby': 'basic-button',
//                                     }}>

//                                     {
//                                         getData.length ?

//                                             <div className="card_details" style={{width:"24rem", padding:"10"}}>
//                                                 <Table>
//                                                     <thead>
//                                                         <tr>
//                                                             <th>Photos</th>
//                                                             <th>Restaurant name</th>
//                                                         </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             {
//                                                                 getData.map((e,id)=>{
//                                                                     return (
//                                                                         <tr key={e.id}>
//                                                                             <td>
//                                                                                 <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
//                                                                                 <img src={e.imgdata} style={{height:"5rem", width:"5rem"}} alt=""/>
//                                                                                 </NavLink>
//                                                                                 </td>
//                                                                             <td>
//                                                                                 <p>{e.rname}</p>
//                                                                                 <p>Price: {e.price}</p>
//                                                                                 <p>Quantity: {e.qnty}</p>
//                                                                                 <p style={{color:"red", fontsize:20, cursor:"pointer"}}><DeleteIcon onClick={()=>dlt(e.id)}/></p>

//                                                                             </td>

//                                                                         </tr>

//                                                                     )
//                                                                 })
//                                                             }
//                                                         </tbody>

//                                                 </Table>

//                                             </div>

//                                             :
//                                             <div className="card-details d-flex justify-content-center align-items-center" style={{ "width": "24rem", "padding": 10, "position": "relative" }}>
//                                                 <CloseIcon onClick={handleClose} style={{ "position": "absolute", "top": 2, "right": 20, "fontsize": 23, "cursor": "pointer" }} />
//                                                 <p>Cart is empty now</p>
//                                                 <img src='https://img.icons8.com/?size=100&id=7ykGA0wEPoEb&format=png&color=000000' alt="" className='emptycart_img' style={{ "width": "5rem", "padding": 10 }} />

//                                             </div>
//                                     }

//                                 </Menu>
//                             </div>
//                         </NavLink>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default Header;

import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/esm/Table';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DLT } from '../redux/actions/Actions';

function Header() {
    const [price, setPrice] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // Add search query state
    const getData = useSelector((state) => state.cartReducer.carts);

    const dispatch = useDispatch();

    const dlt = (id) => {
        dispatch(DLT(id));
    };

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const total = () => {
        let price = 0;
        getData.forEach((ele) => {
            price += ele.price * ele.qnty;
        });
        setPrice(price);
    };

    useEffect(() => {
        total();
    }, [getData]);

    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    // Filter and sort items based on search query
    const filteredData = getData
        .filter((item) =>
            item.rname.toLowerCase().includes(searchQuery)
        )
        .sort((a, b) => a.rname.localeCompare(b.rname));

    

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-dark" data-bs-theme="dark">
            <Container>
                <img
                    src="https://tse4.mm.bing.net/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&pid=Api&P=0&h=180"
                    alt=""
                    style={{
                        width: '10%',
                        marginRight: '20px',
                        marginLeft: '-64px',
                        borderRadius: '10px',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(0.8)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <Navbar.Brand href="/"><i>Eatables</i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home" className='text-white text-decoration-none mx-3'>home</NavLink>
                        <NavLink to="/Pizzas" className='text-white text-decoration-none mx-3'>pizzas</NavLink>
                        <NavLink to="/Snacks" className='text-white text-decoration-none mx-3'>snacks</NavLink>
                    </Nav>
                    <Nav className="ml-auto">
                        {/* Search Input */}
                        

                        {/* Cart Icon */}
                        <NavLink to="/">
                            <div>
                                <Button
                                    id="basic-botton"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <Badge badgeContent={getData.length} color="primary">
                                        <ShoppingCartIcon className='text-white' />
                                    </Badge>
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    {filteredData.length ?
                                        <div className="card_details" style={{ width: "24rem", padding: "10" }}>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>Photos</th>
                                                        <th>Restaurant name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {filteredData.map((e, id) => {
                                                        return (
                                                            <tr key={e.id}>
                                                                <td>
                                                                    <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                        <img src={e.imgdata} style={{ height: "5rem", width: "5rem" }} alt="" />
                                                                    </NavLink>
                                                                </td>
                                                                <td>
                                                                    <p>{e.rname}</p>
                                                                    <p>Price: {e.price}</p>
                                                                    <p>Quantity: {e.qnty}</p>
                                                                    <p style={{ color: "red", fontSize: 20, cursor: "pointer" }}>
                                                                        <DeleteIcon onClick={() => dlt(e.id)} />
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </Table>
                                        </div>
                                        :
                                        <div className="card-details d-flex justify-content-center align-items-center" style={{ width: "24rem", padding: 10, position: "relative" }}>
                                            <CloseIcon onClick={handleClose} style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }} />
                                            <p>Cart is empty now</p>
                                            <img src='https://img.icons8.com/?size=100&id=7ykGA0wEPoEb&format=png&color=000000' alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                                        </div>
                                    }
                                </Menu>
                            </div>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
