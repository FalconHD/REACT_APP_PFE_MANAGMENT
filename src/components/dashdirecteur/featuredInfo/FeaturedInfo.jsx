import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem1">
        <span className="featuredTitle">Tous Les Projets</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">13 </span>
         
        </div>
        <span className="featuredSub">Cette Annee</span>
      </div>
      <div className="featuredItem2">
        <span className="featuredTitle">Nomber Des Etudiants</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">84</span>
         
        </div>
        <span className="featuredSub">Cette Annee</span>
      </div>
      <div className="featuredItem3">
        <span className="featuredTitle">Nomber des encadrants</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">14</span>
        
        </div>
        <span className="featuredSub">Cette Anne</span>
      </div>
    </div>
  );
}
