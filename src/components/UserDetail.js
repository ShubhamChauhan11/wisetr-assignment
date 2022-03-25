import { useSelector} from "react-redux";

import "./userdetail.css"
import { useParams, } from "react-router-dom";
import { Card } from "@material-ui/core";




const UserDetail=()=>{
     
     
      let ide= useParams();
     console.log(ide.id);
     const data= useSelector((state)=>state)
     console.log(data.datareducer.data);
     
     const onedata=data.datareducer.data[ide.id-1];
     console.log(onedata)
     
     
     
   
     
    
     

     return(
          <>
          {onedata?
          <div  className="maincard">
               <Card className="firstcard">
               <h1>{onedata.name}</h1>
               <h2>Address: {onedata.address.street} {onedata.address.city} {onedata.address.zipcode}</h2>
               <h2>Company: {onedata.company.name}</h2>
               <h2>Phone: {onedata.phone}</h2>
               <h2>Username: {onedata.username}</h2>
               <h2>Website: {onedata.website}</h2>
               </Card>
               
               <img src={`https://avatars.dicebear.com/v2/avataaars/${onedata.name}.svg`} alt="profile"/>
               
              


          </div>: ""}
          
          </>
     )
}
export default UserDetail;