import React, { useState } from "react";
import { Form } from "react-bootstrap";

const SearchBox = ({ history, className }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline className={className}>
      <div className="input-group w-100   ">
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
        ></Form.Control>
        <div className="input-group-append">
          <span
            className="input-group-text  lighten-3"
            id="basic-text1"
            onClick={submitHandler}
          >
            <i className="fas fa-search text-grey" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </Form>
  );
};

export default SearchBox;
