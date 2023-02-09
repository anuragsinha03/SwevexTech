import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedResponse(props) {
  const navigate = useNavigate();
  const [renderChildComponent, setChildComponent] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("Thankyou")) {
      navigate("/");
    }
    setChildComponent(true);
  });
  const { Component } = props;

  return <div>{renderChildComponent && <Component />}</div>;
}

export default ProtectedResponse;
