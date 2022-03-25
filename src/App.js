import { BrowserRouter,Routes, Route } from "react-router-dom"
import Users from "./components/Users"

import UserDetail from "./components/UserDetail"

const App=()=>{

  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Users/>}/>
      <Route path={`users/:id`} element={<UserDetail/>}/>
    </Routes>
    </BrowserRouter>
    
    </>

  )
}
export default App;