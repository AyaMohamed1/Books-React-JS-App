import React from "react";
function AddButton(props) {
  let btnClass = "btn btn-success rounded-circle " + props.moreStyle;
  return (
    <div className={props.fixed}>
      <div
        className={btnClass}
        onClick={() => {
          props.openSearch();
        }}
      >
        <i className={props.iconClass}></i>
      </div>
    </div>
  );
}
export default AddButton;
