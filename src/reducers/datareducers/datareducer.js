import { actiontypes } from "../../actions/actiontypes";

const initialState={
      data: []
 }
 export const datareducer=(state= initialState, {type, payload})=>{
      switch(type){
           case actiontypes.ADD_DATA:
                return {...state, data: payload};
           default:
                return state;     
      }
 }
 const initialstate= false;
    
     
 export const editreducer= (state= initialstate, {type, payload})=>{
      switch(type){
           case actiontypes.EDIT_DATA:
                return !state;
            default: 
                return state;    
      }
 }
 const index=-1;
 export const editindex=(state=index,{ type, payload})=>{
      switch(type){
           case actiontypes.EDIT_INDEX:
                return payload;
           default:
                return state;     
      }
 }
 const likes=0;
 export const editlikes= (state= likes,{type,payload})=>{
      switch(type){
           case actiontypes.LIKED:
                return state+1;
           default:
                return state;     
      }
 }