import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Feedback.css";

export default function Feedback(props) {
  const [comment, setComment] = useState();
  const [rate, setRate] = useState("5");
  const [selectedOption, setSelectedOption] = useState("Nutral");
  const [courseCode, setCourseCode] = useState();
  const [courseName, setCourseName] = useState();
  const email = "Try";
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("I am here");
    navigate("/thanks");
  };

  return (
    <div>
      <CommentForm
        handleSubmit={handleSubmit}
        setComment={setComment}
        setRate={setRate}
        setSelectedOption={setSelectedOption}
        setCourseCode={setCourseCode}
        setCourseName={setCourseName}
        email={email}
        rate={rate}
        selectedOption={selectedOption}
        courseCode={courseCode}
        courseName={courseName}
      />
    </div>
  );
}

function CommentForm(props) {
  return (
    <div class="Feedback">
      <Form onSubmit={props.handleSubmit}>
        <h1>Enter Your Comments</h1>
        <Form.Group controlId="courseName">
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) => props.setCourseName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="courseCode">
          <Form.Label>Course Code</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) => props.setCourseCode(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Course Code</Form.Label>
          <Form.Control
            type="text"
            defaultValue={props.email}
            disabled={true}
          />
        </Form.Group>
        <Form.Group controlId="reteCourse">
          <Form.Label>Rate the course</Form.Label>
          <Form.Select
            value={props.rate}
            onChange={(event) => props.setRate(event.target.value)}
          >
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>This course met my expectations</Form.Label>
          <Form.Check
            label="Agree"
            value="Agree"
            checked={props.selectedOption === "Agree"}
            onChange={(event) => props.setSelectedOption(event.target.value)}
          />
          <Form.Check
            label="Nutral"
            value="Nutral"
            checked={props.selectedOption === "Nutral"}
            onChange={(event) => props.setSelectedOption(event.target.value)}
          />
          <Form.Check
            label="Disagree"
            value="Disagree"
            checked={props.selectedOption === "Disagree"}
            onChange={(event) => props.setSelectedOption(event.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Write Fyour feedback</Form.Label>
          <Form.Control
            as="textarea"
            onChange={(event) => props.setComment(event.target.value)}
            rows={5}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
