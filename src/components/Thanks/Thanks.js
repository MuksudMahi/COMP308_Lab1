import React from "react";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Thanks.css";
import auth from "../../Auth/auth";

export default function Thanks(props) {
  let data = sessionStorage.getItem("feedbackData");
  data = JSON.parse(data);
  console.log(data.email);

  return (
    <div className="Thanks">
      <h1>Thank You {data.email} for your feedback!!!</h1>
      <h2>Following are your responses</h2>
      <ListGroup>
        <ListGroup.Item>Course name: {data.courseName}</ListGroup.Item>
        <ListGroup.Item>Course code: {data.courseCode}</ListGroup.Item>
        <ListGroup.Item>Rating: {data.rate}</ListGroup.Item>
        <ListGroup.Item>
          This course met my expectations: {data.selectedOption}
        </ListGroup.Item>
        <ListGroup.Item>Comment: {data.comment}</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
