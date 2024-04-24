import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Row, Button, Form, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [fullData, setFullData] = useState([]);
  const [sid, setSid] = useState(null);
  const [sid2, setSid2] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [stack, setStack] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/users")
      .then((res) => setFullData(res.data))
      .catch((err) => console.log(err));
  }, []);

  //insert
  const handleSubmit = (e) => {
    e.preventDefault();
    let patchData = {
      name: name,
      email: email,
      stack: stack,
      contact: contact,
    };
    axios
      .post(`http://localhost:3002/api/users`, patchData)
      .then((res) => {
        console.log(res.data);
        toast.success("Inserted !", {
          position: "top-center",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error !", {
          position: "top-left",
        });
      });
    // Implement update logic here
    console.log("created student data:");
  };

  //delete
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3002/api/users/${id}`)
      .then((res) => {
        toast.success("Deleted !", {
          position: "top-right",
          theme: "dark",
        });
      })
      .catch((err) => console.log(err));

    // Implement delete logic here
    console.log("Deleting student with ID:", id);
  };

  //update
  // console.log(sid2);
  const handleUpdate = (id) => {
    let patchData = {
      name: name,
      email: email,
      stack: stack,
      contact: contact,
    };
    if (name && email && stack && contact) {
      axios
        .put(`http://localhost:3002/api/users/${id}`, patchData)
        .then((res) => {
          console.log(res.data);
          toast.success("Updated !", {
            position: "top-right",
            theme: "colored",
          });
        })
        .catch((err) => {
          console.log(err);
          alert("failed");
        });
      // Implement update logic here
      console.log("Updating student with ID:", id);
    } else {
      toast.warning("Please fill all fiedls");
    }
  };

  //get 1 user
  const handleData = () => {
    axios
      .get(`http://localhost:3002/api/users/${sid}`)
      .then((res) => {
        setSid2(res.data);
        alert("success");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="p-3 h-100">
      <Row className="d-flex justify-content-center">CRUD-APPLICATION</Row>
      <Row className="mt-5">
        <Form className="" onSubmit={handleSubmit}>
          <Row className="">
            <Col sx={3}>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col sx={3}>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            <Col sx={3}>
              <Form.Control
                required
                type="text"
                placeholder="Stack"
                onChange={(e) => setStack(e.target.value)}
              />
            </Col>
            <Col sx={3}>
              <Form.Control
                required
                type="number"
                placeholder="Contact"
                onChange={(e) => setContact(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Button type="submit" className="bg-success border-0 shadow ">
              create
            </Button>
            <ToastContainer />{" "}
          </Row>
        </Form>
      </Row>
      <Row className="mt-3 p-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Stack</th>
              <th>Contact</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fullData?.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.stack}</td>
                <td>{student.contact}</td>
                <td>
                  <Button
                    onClick={() => handleDelete(student._id)}
                    className="bg-danger shadow border-0 "
                    size="sm"
                  >
                    Delete
                  </Button>
                  <ToastContainer />
                </td>
                <td>
                  <Button
                    onClick={() => handleUpdate(student._id)}
                    className="bg-warning border-0 shadow"
                    size="sm"
                  >
                    <i className=""></i>
                    Update
                  </Button>
                  <ToastContainer />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </div>
  );
}

export default App;

// "name": "Kevin",
// "email": "kevinmathew365@gmail.com",
// "stack": "MERN",
// "contact": 7094616545,
