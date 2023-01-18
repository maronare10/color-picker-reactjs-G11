import { BrowserRouter, Route, Routes } from "react-router-dom"
import {ColorPicker} from "./pages/ColorPicker"
import Layout from "./Layout"
import Login from "./pages/Login"
import Profile from "./pages/Profile"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<ColorPicker />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Layout>
      </BrowserRouter>




    </>
  )
}

export default App