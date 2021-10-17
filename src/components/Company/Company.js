import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import './Company.css';
import Data from "./../../assets/data/company.json"
import { v1 as uuidv1 } from "uuid";
import axios from 'axios';

const Company = () => {
  const [data, setData] = useState(Data)
  const [formData, setFormData] = useState({
    id: uuidv1(),
    name: '',
    address: '',
    revanue: 0,
    phone: 0
  })

  useEffect(() => {
    return () => { }
  }, [data])


  const getCompanyDetail = (data) => {

  }

  //Add Company
  const addCompany = () => {
    let value = [...data, formData];
    setData(value)
    setFormData();

    saveCompany(value)
  }

  //Delete Company
  const deleteCompany = (key) => {
    const filterDelete = [...data].filter(res=> res.id !== key);
    setData(filterDelete);
  }

  //Save Json Company
  const saveCompany = (post) => {
    const url = "http://localhost:5000/write"; 
    axios.post(url, post).then(resp=> {
      console.log(resp, 'resp=>');
    });
  }

  //Add Office
  const addOffice = () => {

  }

  const onChangeValueForm = (e) => {
    console.log(e.target.name, e.target.value)
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    console.log(formData, 'form=>');
  }

  return (
    <Container>
      <Row className="mt-3  fade-in">
        <Col md={{ span: 3, offset: 3 }}>
          <Card>
            <h5 className="ml-2">CREATE COMPANY</h5>
            <Card.Body className="pt-0">
              <div style={{ height: '34h' }}>
                <Form className="overflow-hidden">
                  <Form.Row>
                    <Form.Group as={Col} controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" name="name" value={formData?.name || ''} onChange={onChangeValueForm.bind(this)} placeholder="Name"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="address">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" name="address" value={formData?.address || ''} onChange={onChangeValueForm.bind(this)} placeholder="Address" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId="revanue">
                    <Form.Label>Revanue</Form.Label>
                    <Form.Control type="number" name="revanue" value={formData?.revanue || ''} onChange={onChangeValueForm.bind(this)} placeholder="Revanue" />
                  </Form.Group>
                  <Form.Group controlId="phone">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control type="number" name="phone" value={formData?.phone || ''} onChange={onChangeValueForm.bind(this)} placeholder="Phone No" />
                  </Form.Group>
                </Form>
              </div>
              <div className="mt-3 text-center">
                <Button variant="primary" size="sm" onClick={() => { addCompany() }}>Create</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{ span: 3 }}>
          <Card>
            <h5 className="ml-2">CREATE OFFICE</h5>
            <Card.Body className="pt-0">
              <div style={{ height: '34h' }}>
                <Form className="overflow-hidden">
                  <Form.Row>
                    <Form.Group as={Col} controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" name="name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="address">
                      <Form.Label>Location</Form.Label>
                      <Form.Control type="text" name="address" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId="revanue">
                    <Form.Label>Office Start Date</Form.Label>
                    <Form.Control type="text" name="Revanue" />
                  </Form.Group>
                  <Form.Group controlId="phone">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="number" name="phone" />
                  </Form.Group>
                </Form>
              </div>
              <div className="mt-3 text-center">
                <Button variant="primary" size="sm" onClick={() => addOffice()}>Create</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <hr className="mt-2"></hr>
      </Row>
      <Row>
        <div className="text-center">
          <h5>COMPANIES</h5>
        </div>

          {data ? data.map((comp) => (
          <Col md={3}>

              <Card>
                <Card.Header as="h5">{comp.name}</Card.Header>
                <Card.Body className="pt-0" >
                  <ul className="text-left" style={{ height: '18vh' }}>
                    <li>
                      <label>
                        Address:
                      </label>
                      <span>{comp.address}</span>
                    </li>
                    <li>
                      <label>
                        Revenue:
                      </label>
                      <span>{comp.revenue}</span>
                    </li>
                    <li>
                      <label>
                        Phone No:
                      </label>
                      <span>{comp.phone}</span>
                    </li>
                  </ul>
                  <div className="mt-3 text-center">
                    <Button variant="primary" size="sm" onClick={() => getCompanyDetail(comp)}>Detail</Button>{' '}
                    <Button variant="secondary" size="sm" onClick={() => deleteCompany(comp.id)}>Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

          )) : null}
      </Row>
    </Container>
  )
}

export default Company;
