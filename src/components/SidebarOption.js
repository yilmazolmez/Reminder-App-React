import React from "react";
import "./SidebarOption.css";
import db from "../firebase";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const history = useHistory();
  const selectCategory = () => {
    if (id) {
      history.push(`/reminderCategory/${id}`);
    } else {
      history.push(`../${title}`);
    }
  };
  const addCategory = async () => {
    // const categoryName = prompt("Please enter the category name");
    const categoryName = await swal("Please enter the category name:", {
      content: "input",
    });
    if (categoryName) {
      db.collection("remindersCategory").add({
        category: categoryName,
      });
      swal("Eklendi", "Hatırlatma Kategorisi Eklendi", "success");
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addCategory : selectCategory}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span>
          {title}
          <span className="sidebarOption__channelDelete"></span>
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
