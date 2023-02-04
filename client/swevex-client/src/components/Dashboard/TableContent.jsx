import React from "react";

function TableContent(props) {
  return (
    <div>
      <div className="table-content | grid grid-flow-col  ">
        <div className="name border-b-[1px]  border-black ">{props.name}</div>
        <div className="email border-b-[1px] border-black ">{props.email}</div>
        <div className="phone-no border-b-[1px] border-black ">
          {props.phone}
        </div>
        <div className="subjecb border-b-[1px] border-black ">
          {props.subject}
        </div>
        <div className="message border-b-[1px] border-black ">
          {props.message}
        </div>
        <div className="delete-btn-container border-b-[1px] border-black pr-3 flex justify-end">
          <button
            className="delete-btn border-[1px] border-black px-2"
            type="button"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default TableContent;
