import React from "react";
// import Data from "../assets/Data";
import ListItem from "../Components/ListItem";
import {useState, useEffect} from "react";
import CreateItem from "../Components/CreateItem";

function Notes() {
    const [Data, setData] = useState([]);


    useEffect(()=> {
        getData();
    }, [])

    const getData = async() => {
        const response = await fetch("http://localhost:5000/data");
        const datass = await response.json();
        setData(datass)
    }

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title"> &#9782; Ro'yxatlar:</h2>
        <p className="notes-count">{Data.length}</p>
      </div>
      <div className="notes-list">
        {Data.map((good, index) => (
          <ListItem key={index} good={good} />
        ))}
      </div>
      <CreateItem />
    </div>
  );
}

export default Notes;
