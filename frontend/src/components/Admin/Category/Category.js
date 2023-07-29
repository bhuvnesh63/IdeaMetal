import Header from '../../Header/Header'
import React, { useState } from 'react'
import { Container, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard,  } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosCreate } from 'react-icons/io';
import axios from 'axios';
import { toast } from 'react-toastify';




const Category = () => {



  const navigate = useNavigate()
  const [category_Type, setCategory_Type] = useState(null);
  const submitform = (event) => {
      event.preventDefault();
      try {
          axios.post("http://ec2-13-232-144-169.ap-south-1.compute.amazonaws.com:4000/api/v1/category/new", {

              "Category_Type": category_Type,
          })
          toast.success("Category Add Succesfully")
          navigate("/category-list")
      } catch (error) {
          console.log(error.response)

      }
  }




  return (
    <>
    <Header />

    <Container style={{ width: "90%", marginTop: "20px" }} >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add New Category</h5></th>
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
                                            <IoIosCreate />&nbsp;<Link to="/category-list">Go Back</Link>
                                        </Button>
                                    </div>

                                </th>
                            </tr>
                        </thead>
                    </Table>
                    <hr />
                </Row>
            </Container>

            <div className='form-div' >
                <Container>
                    <Row>
                        <form className="row g-4 p-3 registration-form" >
                            <div class="col-md-4 position-relative">
                                <label className="label">Category Name</label>
                                <input type="text" class="form-control"
                                    value={category_Type} onChange={(e) => setCategory_Type(e.target.value)} required
                                />
                            </div>
                            <br />
                            <center>
                                <Button className="stu_btn"
                                    style={{ marginTop: "-120px" }}
                                    variant="success"
                                    type="submit"
                                    // onClick={submitform}
                                    onClick={(event) => submitform(event)}
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

export default Category