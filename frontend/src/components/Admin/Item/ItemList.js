import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillEye } from 'react-icons/ai';
import { Link } from "react-router-dom";
import './item.css'
import { IoIosCreate } from "react-icons/io";
import Header from '../../Header/Header'
import axios from 'axios';
import { toast } from 'react-toastify';

const baseURL = "http://ec2-13-232-144-169.ap-south-1.compute.amazonaws.com:4000/api/v1/items"

const ItemList = () => {

    const [get, setGetAll] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setGetAll(response.data);
            // console.log(response)
        })
    }, [])

    const deleteData = (id) => {
        axios.delete(`http://ec2-13-232-144-169.ap-south-1.compute.amazonaws.com:4000/api/v1/item/${id}`).then(response => {
            toast.success("Item deleted Succesfully")
        })
            .catch(error => {
                console.log(error)
            })

    }
    if (!get) return null;



    return (
        <>
            <Header />
            <Container className='main-col'  >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Item-Details</h5></th>
                        </tr>
                    </thead>
                </Table>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <div className='table-div' >

                                        <Button className='table-btn' variant="light" >
                                            <IoIosCreate />&nbsp;<Link to="/items">Create</Link>
                                        </Button>
                                        <Button className='table-btn' variant="light" >
                                            <AiFillEye />&nbsp;<Link to="/seeallcategory">See-All-Items</Link>
                                        </Button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </Table>
                    <hr />
                </Row>
            </Container>
            {/* Table Table Table */}

            <div className='form-div'>

                <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Item-Details</h5>
                <Container>
                    <Row>


                        <Table responsive>
                            <table class="table table-bordered border-secondary">
                                <thead>
                                    <tr>

                                        <th>Item Name</th>
                                        <th>Item Img</th>
                                        <th>Description  </th>
                                        <th>Category</th>
                                        <th>Material</th>
                                        <th>Action Edit</th>
                                        <th>Action Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {get?.items?.map((items) => (
                                        <tr>
                                            <td>{items.Item_Name}</td>
                                            <td>
                                                <div >
                                                <img className='item-img' src={`http://ec2-13-232-144-169.ap-south-1.compute.amazonaws.com:4000/images/${items.image}`} alt={items.Item_Name} />
                                                    {/* <td>{items.image}</td> */}
                                                </div>
                                            </td>
                                            <td>{items.description}</td>
                                            <td>{items.Category_Name}</td>
                                            <td>{items.material_Name}</td>
                                            <td>

                                                <Link to={`/edititem/${items._id}`}>
                                                    <Button className='table-btn'
                                                        variant="light" >
                                                        &#9998;Edit
                                                    </Button>
                                                </Link>
                                            </td>

                                            <td>
                                                <Button
                                                    variant="light"
                                                    onClick={(e) => { deleteData(items._id) }}
                                                    value={"Delete"}

                                                >
                                                    <span className='delete-icon'>&#x2717;</span>Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Table>
                    </Row>
                </Container>

            </div>

        </>
    )
}

export default ItemList