import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Nouvel utilisateur</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nom d'utilisateur</label>
          <input type="text" placeholder="AbdessamadPas" />
        </div>
        <div className="newUserItem">
          <label>Nom et prénom</label>
          <input type="text" placeholder="abdou aloin" />
        </div>
        <div className="newUserItem">
          <label>E-mail</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Mot de passe</label>
          <input type="password" placeholder="Mot de passe" />
        </div>
        <div className="newUserItem">
          <label>Téléphoner</label>
          <input type="text" placeholder="+212 623 456 781" />
        </div>
        <div className="newUserItem">
          <label>Adresse</label>
          <input type="text" placeholder="boukidarn | MAR" />
        </div>
        <div className="newUserItem">
          <label>Genre</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Homme</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">femme</label>
           
          </div>
        </div>
        <div className="newUserItem">
          <label>actif</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Oui</option>
            <option value="no">Non</option>
          </select>
        </div>
        <button className="newUserButton">Creer</button>
      </form>
    </div>
  );
}
