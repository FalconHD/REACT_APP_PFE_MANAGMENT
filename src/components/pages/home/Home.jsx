import Chart from "../../dashdirecteur/chart/Chart";
import FeaturedInfo from "../../dashdirecteur/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../../dummyData";
import WidgetSm from "../../dashdirecteur/widgetSm/WidgetSm";
import WidgetLg from "../../dashdirecteur/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Groupes Activites"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
