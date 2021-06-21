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
        <h1 className="userTitle">Edit User</h1>
        <Link to="/dashdirecteur/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Abdessamad aalouwan </span>
              <span className="userShowUserTitle">Mi Etudiant </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcons" />
              <span className="userShowInfoTitle">AbdessamdPas</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcons" />
              <span className="userShowInfoTitle">31.10.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
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
          <span className="userUpdateTitle">Edit</span>
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
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Abdessamad AAlouwan"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Abdessamad.Aalouwan@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+212 636 183 856"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
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
                  src="https://scontent.frba3-2.fna.fbcdn.net/v/t1.6435-9/45407887_2237402243195804_2494665821838639104_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeE0RQWDvbubVyHtIwdC5Ai8CfyQTgvCmiAJ_JBOC8KaIKjcSHopNWzJve2ABhYqKru30lLkriECPq05ni1Fbxt1&_nc_ohc=Awufj_SDX5QAX8Wpypt&_nc_ht=scontent.frba3-2.fna&oh=ea5a0f659a9474eb6dda2d5cc86b985e&oe=60C917D3"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
