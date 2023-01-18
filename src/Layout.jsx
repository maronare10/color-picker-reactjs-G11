import { Link } from "react-router-dom"

const Layout = (props) => {
  return (
    <>

      <header>
        <Link to='/'>ColorPicker</Link> | <Link to='/login'>Login</Link> | <Link to='/profile'>Profile</Link>
      </header>
      <main>
        {props.children}
      </main>
      
    </>
  )
}

export default Layout