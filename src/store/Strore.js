import { createStore } from "redux";
import rootreducer from "../reducers/datareducers/rootreducer";
const store= createStore(rootreducer,{});
export default store;