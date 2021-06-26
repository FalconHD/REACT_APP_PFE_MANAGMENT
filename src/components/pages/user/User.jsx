import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle"> Modifier l'utilisateur</h1>
        <Link to="/dashdirecteur/newUser">
          <button className="userAddButton">Créer</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://image.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Abdessamad aalouwan </span>
              <span className="userShowUserTitle">Mi Etudiant </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Détails du compte
</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcons" />
              <span className="userShowInfoTitle">AbdessamdPas</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcons" />
              <span className="userShowInfoTitle">31.10.1999</span>
            </div>
            <span className="userShowTitle">Détails du contact</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcons" />
              <span className="userShowInfoTitle">+212636183856</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcons" />
              <span className="userShowInfoTitle">Abdessamad.aalouwan@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcons" />
              <span className="userShowInfoTitle">boukidarn | Morroco</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Éditer</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="AbdessamadPas"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Nom d'utilisateur
</label>
                <input
                  type="text"
                  placeholder="Abdessamad AAlouwan"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>E-mail</label>
                <input
                  type="text"
                  placeholder="Abdessamad.Aalouwan@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Téléphoner</label>
                <input
                  type="text"
                  placeholder="+212 636 183 856"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Adresse</label>
                <input
                  type="text"
                  placeholder="Boukidarn | Morocco"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://image.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg"
                  alt=""
                
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Mettre à jour</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
