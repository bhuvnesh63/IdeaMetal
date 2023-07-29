import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { IoIosCreate } from 'react-icons/io';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../Header/Header';



const baseURL = "http://ec2-13-232-144-169.ap-south-1.compute.amazonaws.com:4000/api/v1/materials"
const ListMaterial = () => {

    //   List Function Start
    const [get, setGetAll] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setGetAll(response.data);
            console.log(response)
        })
    }, [get])

    const deleteData = (id) => {
        // console.log(id)
        axios.delete(`http://ec2-13-232-144-169.ap-south-1.compute.amazonaws.com:4000/api/v1/material/${id}`).then(response => {
            toast.success("Material deleted Succesfully")
        })
            .catch(error => {
                console.log(error)
            })

    }
    if (!get) return null;

    return (
        <>

            <Header />
            <Container style={{ width: "90%", marginTop: "20px" }} >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp;Dasboard / Material List</h5></th>
                        </tr>
                    </thead>
                </Table>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <div className='table-div'>

                                        <Button className='table-btn' variant="light" >
                                            <IoIosCreate />&nbsp;<Link to="/material">Go Back</Link>
                                        </Button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </Table>
                    <hr />
                </Row>
            </Container>

            <div className='form-div'>
                <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Material-Details</h5>
                <Container>
                    <Row>
                        <Table responsive>
                            <table class="table table-bordered border-secondary">
                                <thead>
                                    <tr>
                                        <th>Material Name</th>
                                        <th>Action Edit</th>
                                        <th>Action Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {get?.materials?.map((items) => (
                                        <tr>
                                            <td>{items.MaterialType}</td>
                                            <td>
                                                <Link to={`/Edit-material/${items._id}`}>
                                                    <Button className='table-btn'

                                                        variant="light" >
                                                        &#9998;Edit
                                                    </Button>
                                                </Link>
                                            </td>
                                            <td>
                                                <Button className='table-btn'
                                                    variant="light"
                                                    onClick={(e) => { deleteData(items._id) }} value={"Delete"}
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

export default ListMaterial