import InfoGroup from "../encadrantDash/infoGroup"
import { useLocation } from "react-router";
import MainStudent from "./mainStudent";
const ConnectionStudent = (props) => {

    return (
        <div className="containerr">
            <InfoGroup />
            <MainStudent />
        </div>
    );
}
export default ConnectionStudent;