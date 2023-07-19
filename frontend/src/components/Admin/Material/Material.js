import Header from '../../Header/Header'
import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard,  } from 'react-icons/ai';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { IoIosCreate } from 'react-icons/io';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Material = () => {

  const navigate = useNavigate()
  const [materialType, setMaterialType] = useState(null);
  const submitform = (event) => {
      event.preventDefault();
      try {
          axios.post(" http://localhost:4000/api/v1/material/new", {

              "MaterialType": materialType,
          })
          toast.success("Material Add Succesfully")
          navigate("/material-list")
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
                          <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add New Material</h5></th>
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
          <div className='form-div' >
              <Container>
                  <Row>
                      <form className="row g-4 p-3 registration-form" >
                          <div class="col-md-4 position-relative">
                              <label className="label">Material Name</label>
                              <input type="text" class="form-control"
                                  value={materialType} onChange={(e) => setMaterialType(e.target.value)} required
                              />
                          </div>
                          <br />
                          <center>
                              <Button className="stu_btn"
                                  style={{ marginTop: "-120px" }}
                                  variant="success"
                                  type="submit"
                                  onClick={(event) => submitform(event)}
                              >
                                Submit
                             </Button>
                          </center>
                      </form>
                  </Row>
              </Container>
          </div>
          <br />



      </>
  )

}

export default Material