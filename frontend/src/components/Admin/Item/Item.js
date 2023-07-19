import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { AiFillDashboard } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './item.css'
import { toast } from 'react-toastify';


const baseURL = "http://localhost:4000/api/v1/categories";
const materialURL = "http://localhost:4000/api/v1/materials";


const Item = () => {


    const [get, setGetAll] = useState(null);
    const [getmaterial, setGetmaterial] = useState(null);
    const [item_Name, setItem_Name] = useState("");
    const [description, setDescription] = useState("");
    const [category_Type, setCategory_Type] = useState(null);
    const [materialType, setMaterialType] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(materialURL).then((response) => {
            setGetmaterial(response.data);
        });
    }, []);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setGetAll(response.data);
        });
    }, []);

    const submitForm = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:4000/api/v1/item/new", {
                "Item_Name": item_Name,
                "description": description,
                "Category_Name": category_Type,
                "material_Name": materialType,

            });
            toast.success("Item Add Successfully");
            navigate("/item-list");
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <>
            <Header />

            <Container style={{ width: "90%", marginTop: "20px" }}>
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add New Item</h5></th>
                        </tr>
                    </thead>
                </Table>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <div className='table-div'>
                                        <Button className='table-btn' variant="light">
                                            <IoIosCreate />&nbsp;<Link to="/item-list">Go Back</Link>
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
                <Container>
                    <Row>
                        <form className="row g-4 p-3 registration-form">

                            <Link to='/category'>
                                <Button variant='success' className='float-end'>Add Category</Button>
                            </Link>
                            <div className="col-md-4 position-relative">
                                <label className="label">Item Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={item_Name}
                                    onChange={(e) => setItem_Name(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-4 position-relative">
                                <label className="label">Item Image</label>
                                <input
                                    type="file"
                                    className="form-control"

                                    required
                                />
                            </div>

                            

                            <div className="col-md-4 position-relative">
                                <label className="label">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-md-4 position-relative">
                                <label className="label">Material Name</label>
                                <select
                                    className="form-control"
                                    value={materialType}
                                    onChange={(e) => setMaterialType(e.target.value)}
                                >
                                    <option value="">Select a Material</option>
                                    {getmaterial?.materials?.map((items) => (
                                        <option key={items._id} value={items.MaterialType}>
                                            {items.MaterialType}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-4 position-relative">
                                <label className="label">Category Name</label>
                                <select
                                    className="form-control"
                                    value={category_Type}
                                    onChange={(e) => setCategory_Type(e.target.value)}
                                >
                                    <option value="">Select a category</option>
                                    {get?.categories?.map((items) => (
                                        <option key={items._id} value={items.Category_Type}>
                                            {items.Category_Type}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <center>
                                <Button
                                    className="stu_btn"
                                    variant="success"
                                    type="submit"
                                    onClick={(event) => submitForm(event)}
                                >
                                    Submit
                                </Button>
                            </center>
                        </form>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Item