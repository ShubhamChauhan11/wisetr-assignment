import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';

import { editData,addData} from "../actions";
import { letterSpacing } from '@mui/system';
export default function FormDialog() {
  const[name, setName]=React.useState();
  const[email, setEmail]= React.useState();
  const[address, setAddress]= React.useState();
  const data= useSelector((state)=>state);
  const dispatch= useDispatch();
  
  console.log(data.editreducer);
  console.log(data.editindex);

 
  
  
  let open= data.editreducer;
  
  
  function handleClose(){
  
     if(open===true){
       dispatch(editData(false));
     }
  }
  function makechanges(){
    
     for(let i=0; i<data.datareducer.data.length; i++){
       if(data.datareducer.data[i].id===data.editindex){
        let onedata= data.datareducer.data[i];
        if(onedata){
          onedata.name= name;
          onedata.email= email;
          onedata.address= address;
         }
        data.datareducer.data[i]= onedata;
        dispatch(addData(data.datareducer.data));
          
       }

     }
      
    
    handleClose();

  }
  
  
  return (
    <div>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit userdetails here
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="text"
            fullWidth
            variant="standard"
            value= {name}
            onChange={(e)=>{
              setName(e.target.value);
            }}
          />
           <TextField
            autoFocus
            margin="dense"
            id="emai"
            label="email"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }}
          />
           <TextField
            autoFocus
            margin="dense"
            id="address"
            label="address"
            type="address"
            fullWidth
            variant="standard"
            value={address}
            onChange={(e)=>{
              setAddress(e.target.value);
            }}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={makechanges}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
