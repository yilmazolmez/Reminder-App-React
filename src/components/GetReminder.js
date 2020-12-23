import React from "react";
import "./GetReminder.css";
import db from "../firebase";
import swal from "sweetalert";
function GetReminder({ date, description, completed, id, reminderCategoryId }) {
  const deleteReminder = () => {
    db.collection("remindersCategory")
      .doc(reminderCategoryId)
      .collection("reminders")
      .doc(id)
      .delete();
    swal("Silindi", "Hatırlatma Başarıyla Silindi", "success");
  };
  const checkReminder = () => {
    db.collection("remindersCategory")
      .doc(reminderCategoryId)
      .collection("reminders")
      .doc(id)
      .update({
        completed: !completed,
      });
    if (!completed) {
      swal("Tebrikler", "Hatırlatmanı Başarıyla Gerçekleştirdiniz", "success");
    } else {
      swal("Başarılı", "İşlem Geri Alındı", "success");
    }
  };

  return (
    <div className="getReminder">
      <div className={`getReminder__info ${completed ? "completed" : ""}`}>
        <span>{description}</span>
        <h4>{date}</h4>
        {/* <h4>{new Date(date?.toDate()).toUTCString()}</h4> */}
      </div>
      <div className="getReminder__button">
        <button className="complete" onClick={checkReminder}>
          Check
        </button>
        <button className="delete" onClick={deleteReminder}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default GetReminder;
