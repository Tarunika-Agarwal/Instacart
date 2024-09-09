import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD, DLT, REMOVE } from '../redux/actions/Actions';
const CardDetails = () => {


    const [data, setData] = useState([])
    console.log(data)

    const { id } = useParams()
    // console.log(id)
    const getData = useSelector((state) => state.cartReducer.carts)
    console.log(getData)

    const compare = () => {
        let compareData = getData.filter((e) => {
            return e.id == id
        })
        setData(compareData)
    }

    useEffect(() => {
        compare();
    }, [id])

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const dlt = (id) => {
        // console.log("Deleting item with id:", id);
        dispatch(DLT(id))
        navigate('/')
    }
    const send=(e)=>{
        console.log(e)
           dispatch(ADD(e))
      }
const remove=(item)=>{
dispatch(REMOVE(item))
}


    return (
        <div>
            <Container>
                <h2 className='text-center'><i>Item details</i></h2>

                <div className='container mt-3'>
                    <div className='iteamsdetails'>

                        {
                            data.map((ele) => {
                                return (
                                    <>
                                        <div className="items_img">
                                            <img src={ele.imgdata} alt="not found" />
                                        </div>


                                        <div className='details'>
                                            <Table>
                                                <tr>
                                                    <td>
                                                        <p><strong>Restaurante:</strong>{ele.name}</p>
                                                        <p><strong>Price:Rs.</strong>{ele.price}</p>
                                                        <p><strong>Dishes:</strong>{ele.address}</p>
                                                        <p><strong>Total:Rs.</strong>{ele.price*ele.qnty}</p>
                                                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:"4rem"}}>
                                                            <span onClick={ele.qnty<=1?()=>dlt(ele.id):()=>remove()}>-</span>
                                                            <span>{ele.qnty}</span>
                                                            <span onClick={()=>send(ele)}>+</span>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <p><strong>Rating:</strong><span style={{ backgroundColor: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating}</span></p>
                                                        <p><strong>Order Review:</strong><span>{ele.somedata}</span></p>
                                                        <p><strong>Remove:</strong><span><DeleteIcon onClick={() => DLT(ele.id)} /></span></p>
                                                    </td>
                                                </tr>
                                            </Table>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </Container >
        </div >
    )
}


export default CardDetails
