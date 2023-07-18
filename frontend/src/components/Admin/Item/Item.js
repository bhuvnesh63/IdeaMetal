import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Table, Button } from 'react-bootstrap';
import { AiFillDashboard} from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './item.css'

const baseURL = "http://localhost:4000/api/v1/items";


const Item = () => {
    const [get, setGetAll] = useState(null);
    const [item_Name, setItem_Name] = useState("");
    const [description, setdescription] = useState("");
    const [category_Type, setCategory_Type] = useState(null);
    const navigate = useNavigate();

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
            "price": price,
            "Category_Name":category_Type,
          });
        //toast.success("Item Add Successfully");
          navigate("/item-list");
        //   setItem_Name("");
        //   setPrice("");
        //   setCategory_Type(null);
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
                            <Link to='/add-category'>
                                <Button variant='success' className='float-end'>Add Category</Button>
                            </Link>
                            <div className="col-md-4 position-relative">
                                <label className="label">Item Name</label>
                                <input
                                    type="text"
                                    className="form-control"

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

                                    required
                                />
                            </div>

                            <div className="col-md-4 position-relative">
                                <label className="label">Material Name</label>
                                <select
                                    className="form-control"
                                >
                                    <option value="">Select a Material</option>
                                    <option value="">Silver</option>
                                    <option value="">Copper</option>
                                    <option value="">Brass</option>
                                    <option value="">Mattel</option>
                                </select>
                            </div>

                            <div className="col-md-4 position-relative">
                                <label className="label">Category Name</label>
                                <select
                                    className="form-control"
                                >
                                    <option value="">Select a category</option>
                                    <option value="">MUG</option>
                                    <option value="">Jug</option>
                                    <option value="">Tub</option>
                                    <option value="">Gilas</option>
                                </select>
                            </div>

                            <center>
                                <Button
                                    className="stu_btn"
                                    variant="success"
                                    type="submit"

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