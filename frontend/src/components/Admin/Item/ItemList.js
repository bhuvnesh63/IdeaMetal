import React from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillEye } from 'react-icons/ai';
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import Header from '../../Header/Header'

const ItemList = () => {
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
                                        <th>Material</th>
                                        <th>Category</th>
                                        <th>Action Edit</th>
                                        <th>Action Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mug</td>
                                        <td>
                                            <div className='item-img'>
                                                {/* <img src={} /> */}
                                            </div>
                                        </td>
                                        <td>Mug</td>
                                        <td>Mug</td>
                                        <td>Mug</td>
                                        <td>
                                            <Button variant='light'> &#9998;Edit</Button>
                                        </td>

                                        <td>
                                            <Button variant='light'>
                                            <span className='delete-icon'>&#x2717;</span>Delete
                                            </Button>
                                        </td>
                                    </tr>

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