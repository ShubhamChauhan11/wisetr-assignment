import { actiontypes } from "./actiontypes"
export const addData=(data)=>{
     return{
          type: actiontypes.ADD_DATA,
          payload: data

     }
}
export const editData=(data)=>{
     return{
          type: actiontypes.EDIT_DATA,
          payload: data

     }
}
export const editindex= (data)=>{
     return{
          type: actiontypes.EDIT_INDEX,
          payload: data
     }
}

export const like=(data)=>{
     return{
          type: actiontypes.LIKED,
          payload: data
     }
}