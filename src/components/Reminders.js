// Icons
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import IconButton from "@material-ui/core/IconButton";
// Icons
import React, { useEffect, useState } from "react";
import "./Reminders.css";
import { useParams } from "react-router-dom";
import db from "../firebase";
import GetReminder from "./GetReminder";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
function Reminders() {
  const history = useHistory();
  const { reminderCategoryId } = useParams();
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (reminderCategoryId) {
      db.collection("remindersCategory")
        .doc(reminderCategoryId)
        .onSnapshot((snapshot) => setCategoryDetails(snapshot.data()));
    }

    db.collection("remindersCategory")
      .doc(reminderCategoryId)
      .collection("reminders")
      .orderBy("completed", "asc")
      .onSnapshot((snapshot) => {
        setReminders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            reminders: doc.data(),
          }))
        );
      });
  }, [reminderCategoryId]);

  const addReminder = (e) => {
    e.preventDefault();

    if (reminderCategoryId) {
      db.collection("remindersCategory")
        .doc(reminderCategoryId)
        .collection("reminders")
        .add({
          completed: false,
          date: date,
          description: description,
        });
      swal("Başarılı", "Hatırlatma Başarıyla Eklendi", "success");
      setDescription("");
      setDate("");
    }
  };

  const deleteCategory = () => {
    db.collection("remindersCategory").doc(reminderCategoryId).delete();
    swal("Başarılı", "Category Silindi", "success");
    history.push("/");
  };
  // const goster = () => {
  //   db.collection("remindersCategory")
  //     .where("category", "==", "Doğum Günü")
  //     .onSnapshot((querySnapshot) => {
  //       // querySnapshot.docs[0].ref.delete();
  //       querySnapshot.docs.map((doc) => console.log(doc.id));
  //     });
  // };
  return (
    <div className="reminders">
      <div className="reminders__header">
        <div className="reminders__headerLeft">
          <h4 className="reminders__categoryName">
            <strong># {categoryDetails.category}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="reminders__headerRight">
          <p>
            <InfoOutlinedIcon />
            Details
            <IconButton onClick={deleteCategory}>
              <DeleteSweepIcon fontSize="small" />
            </IconButton>
          </p>
          {/* <IconButton onClick={goster}>
            goster <DeleteSweepIcon fontSize="small" />
          </IconButton> */}
        </div>
      </div>

      <div className="reminders__container">
        <div className="reminders__containerLeft">
          <h1>Add Reminder</h1>
          <form onSubmit={addReminder}>
            <label htmlFor="date">Date</label>
            <input
              required
              type="text"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <input
              required
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">ADD</button>
          </form>
        </div>
        <div className="reminders__containerRight">
          <h1>Reminders</h1>
          {reminders.map(({ id, reminders }) => (
            <GetReminder
              date={reminders.date}
              description={reminders.description}
              completed={reminders.completed}
              id={id}
              key={id}
              reminderCategoryId={reminderCategoryId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reminders;
