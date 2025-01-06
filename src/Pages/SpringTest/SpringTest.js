import React, { useState, useEffect } from "react";

const SpringTest = () => {
  const [title, setTitle] = useState("Default value");

  useEffect(() => {
    fetch("http://localhost:8080/home")
      .then(response => response.text())
      .then(text => setTitle(text))
      .catch(error => console.error("Error", error));
  }, []);

  return (
    <>
      <h1>React + {title}</h1>
    </>
  );
};

export default SpringTest;
