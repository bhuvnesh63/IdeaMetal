import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { AiFillDashboard } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IoIosCreate } from 'react-icons/io';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../Header/Header';
// import Layout from '../../../Header/Layout';



const EditCategory = () => {


    const params = useParams();
    const navigate = useNavigate();
    const [specificItem, setSpecificItem] = useState("");
    //   const [Category_Type, setCategory_Type] = useState("");
    const [materialType, setMaterial_Type] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/material/${params.id}`).then((response) => {
            setSpecificItem(response.data);
            setMaterial_Type(response.data.material.MaterialType);
        });
    }, []);


    const submitForm = (event) => {
        event.preventDefault();
        try {
            axios.put(`http://localhost:4000/api/v1/material/${params.id}`, {
                MaterialType: materialType,
            });
              toast.success("Material Updated Successfully");
        } catch (error) {
            console.log(error.response);
        }
    };

    return (

        <>

            <Header />
            <Container style={{ width: "90%", marginTop: "20px" }}>
                <Table striped bordered hover className="main-table">
                    <thead>
                        <tr>
                            <th>
                                <h5>
                                    <AiFillDashboard /> &nbsp;Dashboard / Update Material
                                </h5>
                            </th>
                        </tr>
                    </thead>
                </Table>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <div className="table-div">
                                        <Button className="table-btn" variant="light">
                                            <IoIosCreate />&nbsp;<Link to="/material-list">Go Back</Link>
                                        </Button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </Table>
                    <hr />
                </Row>
            </Container>
            {/* form section start */}
            <div className="form-div">
                <Container>
                    <Row>
                        <form className="row g-4 p-3 registration-form">
                            <div className="col-md-4 position-relative">
                                <label className="label">Material Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={materialType}
                                    onChange={(e) => setMaterial_Type(e.target.value)}
                                />
                            </div>
                            <br />
                            <center>
                                <Button
                                    className="stu_btn"
                                    style={{ marginTop: "-120px" }}
                                    variant="success"
                                    type="submit"
                                    onClick={(event) => submitForm(event)}
                                >
                                    Update Material
                                </Button>
                            </center>
                        </form>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default EditCategory;
