import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import App2 from "./App2";
import Select from "react-select";
import DatePicke from "react-datepicker";
import { Oval as Loader } from "react-loader-spinner";

import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useParams, useNavigate } from "react-router-dom";
const myarr = { key3: "patel" };

function App() {
  const location = useLocation();
  console.log(location.state);
  // const userId = useParams();
  // console.log(userId);
  //loadinf
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay, and then stop loading
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  //loading end
  const [result, setResult] = useState("no backend meesage sent");
  const [result2, setResult2] = useState("get message unshiown");
  const [x, y] = useState("");
  const [myObject, setMyObject] = useState({ key: "value" });
  const [isSubmit, isSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const storedValue = localStorage.getItem("x");
    if (storedValue) {
      y(storedValue);
    }
  }, [x]);

  const Histry = (e) => {
    const parat = e.target.value;
    y(parat);
    localStorage.setItem("x", parat);
  };

  const opt = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleButtonClick = async () => {
    const response = await axios.post(
      "http://localhost:5500/appo",
      {
        dataToSend: x,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const resultFromApi = response.data;
    setMyObject({ ...myObject, ...myarr });
    console.log(myObject);
    isSubmitted(true);
    setResult(resultFromApi);
  };

  const get = async () => {
    const res = await axios.get("http://localhost:5500/appo", {
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.data;
    console.log(data);
    setResult2(JSON.stringify(data));
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader
          loading={loading}
          type="Oval" // Specify the loader type as "Oval"
          color="#00BFFF" // Specify the color
          height={100} // Specify the height of the loader
          width={100} // Specify the width of the loader
        />
      ) : (
        <div>
          <div style={{ margin: 30, width: 400 }}>
            <Select
              options={opt}
              placeholder="select "
              isMulti
              noOptionsMessage={() => "not found"}
            />

            <br />

            {/* react date pivler */}
            <div style={{ margin: 30, width: 400 }}>
              date{" "}
              <DatePicke
                selected={selectedDate}
                onChange={(e) => {
                  setSelectedDate(e);
                }}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
          <div className="app">
            <input
              style={{ margin: 20, width: 200 }}
              type="text"
              value={x}
              onChange={Histry}
              placeholder="enyter your post request"
            />
          </div>
          <button style={{ margin: 20, width: 50 }} onClick={handleButtonClick}>
            Post
          </button>
          <br />
          <span />
          {/* <button onClick={get}>GET</button> */}
          {/* conditiojnal rendering */}
          {isSubmit ? <h1>submied</h1> : <h1>not submit</h1>}
          <h5>{result}</h5>
          {/* props passing */}
          <App2
            data=" text for props "
            imagex="https://picsum.photos/200/300"
          />
          <App2 imagex="https://picsum.photos/200" data="text for props 2" />
          <br />
          <h5>{`get message:     ${result2}`}</h5>
          {/* <h1>{`swennerntf is ${userId}`}</h1> */}
          <br />
        </div>
      )}
    </div>
  );
}

export default App;
