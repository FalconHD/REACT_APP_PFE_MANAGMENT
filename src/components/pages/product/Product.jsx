import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../dashdirecteur/chart/Chart"
import {productData} from "../../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle"> Le Projet</h1>
        <Link to={"/dashdirecteur/newproject"}>
          <button className="productAddButton">Créer</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="activites" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://bubbleplan.net/blog/wp-content/uploads/2018/03/OLAZ6A0.jpg" alt="" className="productInfoImg" />
                  <span className="productName">App Gestion Des Projets</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Nomber de groupe:</span>
                      <span className="productInfoValue">3</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Filier:</span>
                      <span className="productInfoValue">MI</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Nom du projet</label>
                  <input type="text" placeholder="  " />
                  <label>Filier</label>
                  <select name="inStock" id="idStock"> 
                       <option value="no">MI</option>
                      <option value="yes">EEA</option>
                
                      <option value="no">STT</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://bubbleplan.net/blog/wp-content/uploads/2018/03/OLAZ6A0.jpg" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Mettre à jour</button>
              </div>
          </form>
      </div>
    </div>
  );
}
