import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Feedback.css";

import auth from "../../Auth/auth";

export default function Feedback(props) {
  const [comment, setComment] = useState();
  const [rate, setRate] = useState("5");
  const [selectedOption, setSelectedOption] = useState("Nutral");
  const [courseCode, setCourseCode] = useState();
  const [courseName, setCourseName] = useState();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = auth.getToken();
    if (userToken !== "") {
      setEmail(userToken);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const feedbackData = {
      email,
      courseName,
      courseCode,
      rate,
      selectedOption,
      comment,
    };

    sessionStorage.setItem("feedbackData", JSON.stringify(feedbackData));
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
    <div className="Feedback">
      <Form onSubmit={props.handleSubmit}>
        <h1>Course survey</h1>
        <Form.Group controlId="courseName">
          <Form.Label>Course name</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) => props.setCourseName(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="courseCode">
          <Form.Label>Course code</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) => props.setCourseCode(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Your email</Form.Label>
          <Form.Control
            type="text"
            defaultValue={props.email}
            disabled={true}
            required
          />
        </Form.Group>

        <Form.Group controlId="reteCourse">
          <Form.Label>Rate the course</Form.Label>
          <Form.Select
            value={props.rate}
            onChange={(event) => props.setRate(event.target.value)}
            required
          >
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="selectChoice">
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

        <Form.Group controlId="commentFrom">
          <Form.Label>Write your feedback</Form.Label>
          <Form.Control
            as="textarea"
            onChange={(event) => props.setComment(event.target.value)}
            rows={5}
            required
          />
        </Form.Group>
        <br></br>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
