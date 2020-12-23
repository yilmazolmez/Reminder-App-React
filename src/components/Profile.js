import React from "react";
import "./Profile.css";
import { useStateValue } from "../StateProvider";
function Profile() {
  const [{ user }] = useStateValue();
  console.log(user);
  return (
    <div className="profile">
      <div className="profile__header">
        <h1>Profile</h1>
      </div>
      <div className="profile__info">
        <img src={user.photoURL} alt={user.displayName} />
        <h3>{user.displayName}</h3>
        <h5>{user.email}</h5>
      </div>
    </div>
  );
}

export default Profile;
