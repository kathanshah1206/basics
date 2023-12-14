import React from "react";
import { useParams } from "react-router-dom";

export default function App2(props) {
  const { name } = useParams();

  return (
    <div className="app2">
      <div style={{ margin: 20 }}>{props.data}</div>
      <img style={{ margin: 20, width: 200, height: 200 }} src={props.imagex} />
      <p>{name}</p>
    </div>
  );
}
