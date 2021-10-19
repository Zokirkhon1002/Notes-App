import React from "react";
// import Data from "../assets/Data";
import { useState, useEffect } from "react";
import { ReactComponent as Prev } from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";

function Note(props) {
  const noteId = props.match.params.id;
  const [Data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, [noteId]);

  const getData = async () => {
    const response = await fetch(`http://localhost:5000/data/${noteId}`);
    const datass = await response.json();
    setData(datass);
  };

  const createData = async ()=>{
    await fetch(`http://localhost:5000/data/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...Data, updated: new Date() }),
    })
  }

  const updateData = async () => {
    await fetch(`http://localhost:5000/data/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...Data, updated: new Date() }),
    });
  };

  const deleteData = async () => {
    await fetch(`http://localhost:5000/data/${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    });
    props.history.push("/");
  };



  const submitData = async () => {
    if (noteId !== "new" && !Data.body) {
      deleteData();
    }
    else if (noteId !== "new"){
      updateData();
    } else if ( noteId === "new" && Data !== null){
      createData();
    }
    updateData();
    props.history.push("/");
  };

  //   console.log(noteId);
  //   const currentNote = Data.find((note) => note.id === Number(noteId));
  //   console.log(currentNote.body);
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <Prev onClick={submitData} />
          </Link>
        </h3>
        {noteId !== "new" ? (
          <button onClick={deleteData}>Delete All</button>
        ):(<button onClick={submitData}>Done</button>)}
      </div>

      <textarea
        onChange={(e) => {
          setData({ ...Data, body: e.target.value });
        }}
        value={Data?.body}
      ></textarea>
    </div>
  );
}

export default Note;
