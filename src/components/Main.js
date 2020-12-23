import React from "react";
import "./Main.css";
function Main() {
  return (
    <div className="main">
      <h1>Main Page</h1>
      <ul className="main__container">
        <li>Sol taraftaki "Add Category" ile kategori oluşturabilirsiniz.</li>
        <li>
          Oluşturulan kategorilerin içine girip kendi hatırlatmalarınızı
          ekleyebilirsiniz.
        </li>
        <li>Eklediğiniz hatırlatmaları istediğiniz zaman silebilirsiniz.</li>
        <li>
          Eklemiş olduğunuz hatırlatmaları gerçekleştirdikten sonra "CHECK"
          butonuna basarak yapıldı diye işaretleyebilirsiniz.
        </li>
      </ul>
    </div>
  );
}

export default Main;
