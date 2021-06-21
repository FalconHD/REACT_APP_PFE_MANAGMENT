import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Project</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="flex">
        <div className="addProductItem">
          <label>Name of Project</label>
          <input type="text" placeholder="Nom" />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">OUI</option>
            <option value="no">NON</option>
            

          </select>
        </div>
        <div className="addProductItem">
          <label>Filier</label>
          <select name="active" id="active">
            <option value="yes">MI</option>
            <option value="no">EEA</option>
            <option value="no">STT</option>

          </select>
        </div></div>
        <div className="create">
        <button className="addProductButton">Create</button></div>
      </form>
    </div>
  );
}
