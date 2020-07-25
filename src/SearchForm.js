import React from "react";
import { Form, Col } from "react-bootstrap";

function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.description}
            name="description"
            type="text"
          ></Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Loaction</Form.Label>
          <Form.Control
            onChange={onParamChange}
            value={params.location}
            name="location"
            type="text"
          ></Form.Control>
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check
            onChange={onParamChange}
            value={params.full_time}
            name="full_time"
            id="full-time"
            label="Only Full Time"
            type="checkbox"
            className="mb-2"
          ></Form.Check>
        </Form.Group>
      </Form.Row>
    </Form>
  );
}

export default SearchForm;
