import {Outlet,Navigate} from 'react-router-dom'

const index = () => {

const auth=true
  return (
    auth?<Outlet/>:<Navigate to={'/login'}/>
  )
}

export default index