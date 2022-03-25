import { combineReducers } from "redux";
import { datareducer, editindex, editlikes, idreducer } from "./datareducer";
import { editreducer } from "./datareducer";

export const rootreducer= combineReducers({
     datareducer: datareducer,
     editreducer: editreducer,
     editindex: editindex,
     editlikes: editlikes
});
export default rootreducer;