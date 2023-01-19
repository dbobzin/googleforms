import React, { useState } from "react";
import axios from "axios";

const MyForm = () => {
  //Inside Class
  const myRequest = (url) => {
    let response;
    try {
      response = axios.post(url, null, null);
    } catch (e) {
      response = e;
    }
    console.log(response);
  };
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    const data = {
      inputValue,
    };
    const id = "1FAIpQLSe0yQWY1JWwvKr0bo9LIf-jgzLbq7geUPDp2bX-LspvlvRP0A"; //YOUR FORM ID
    e.preventDefault();
    const formUrl = "https://docs.google.com/forms/d/e/" + id + "/formResponse";
    const queryString = require("query-string");
    const q = queryString.stringifyUrl({
      url: formUrl,
      query: data,
    });
    myRequest(q);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        name="entry.540213316"
        placeholder="Name"
        value={inputValue}
        onChange={handleChange}
      />
      <button className="button" type="submit">
        submit the form
      </button>
    </form>
  );
};

export default MyForm;
