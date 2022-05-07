import React from "react";

import { useParams, UseNavigate } from "react-router-dom";

const DeatailWorks = () => {
  const { id } = useParams();

  


  console.log(id);

  return <div>{id}</div>;
};

export default DeatailWorks;
