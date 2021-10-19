import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const GET_TITLE = (good) => {
  let title = good.body.split("\n")[0];
  if(title.length > 60){
    return title.splice(0,60) + "...";
  }
  return title;
}


const GET_DATA = (data) => {
  let vaqt = new Date(data).toLocaleTimeString();
  let sana = new Date(data).toLocaleDateString();
  return `${sana} ${vaqt}`
}


const GET_CONTENT = (good) => {
  let title = GET_TITLE(good)
  let content = good.body.replaceAll("\n","  ")
  content = content.replaceAll(title, "");

  if(content.length > 60){
    return content.slice(0,60) + "...";
  } else {
    return content;
  }
}

function ListItem(props) {
  const { id, updated} = props.good;



  return (
    <Link to={`/note/${id}`}>
      <div className="notes-list-item">
        <h1>{GET_TITLE(props.good)} </h1>
        <p>{GET_CONTENT(props.good)}</p>
        <p>{GET_DATA(updated)}</p>
      </div>
    </Link>
  );
}

export default ListItem;
