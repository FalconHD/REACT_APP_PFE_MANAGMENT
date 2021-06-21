import InfoGroup from "./infoGroup"
import MainArea from "./mainArea"

import { useLocation } from "react-router";

const Connection = (props) => {
    const location = useLocation()
    const {group} = location.state 
    console.log(group);
    return (  
        <div className="containerr">
        
        <InfoGroup group={group}/>

        <MainArea group={group}/>


        </div>


    );
}
 
export default Connection;

