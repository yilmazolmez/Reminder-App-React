// Icons
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import HomeIcon from "@material-ui/icons/Home";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
// Icons
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { useStateValue } from "../StateProvider";
import db from "../firebase";

function Sidebar() {
  const [remindersCategory, setRemindersCategory] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("remindersCategory").onSnapshot((snapshot) =>
      setRemindersCategory(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          category: doc.data().category,
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Reminder App</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>

      <SidebarOption Icon={HomeIcon} title={"Home"} />
      <SidebarOption Icon={AccountBoxIcon} title={"Profile"} />

      <SidebarOption Icon={ExpandLessIcon} title={"Show less"} />
      <hr />
      {/* <SidebarOption Icon={ExpandMoreIcon} title={"Channels"} />
      <hr /> */}
      <SidebarOption Icon={AddIcon} addChannelOption title={"Add Category"} />
      {remindersCategory.map((category) => (
        <SidebarOption
          title={category.category}
          id={category.id}
          key={category.id}
        />
      ))}
      {/* <SidebarOption title="deneme" />
      <SidebarOption title="deneme" />
      <SidebarOption title="deneme" />
      <SidebarOption title="deneme" />
      <SidebarOption title="deneme" /> */}
    </div>
  );
}

export default Sidebar;
