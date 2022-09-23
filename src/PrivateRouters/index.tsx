import {Outlet,Navigate} from 'react-router-dom'


const useAuth=()=>{
  console.log('asjdjhuj')
  const user=localStorage.getItem('acadeUser')
  console.log(user)
  if(user){
    return true
  }else{
    return false
  }
}
export const PrivateRoutes = () => {

// eslint-disable-next-line react-hooks/rules-of-hooks
const auth=useAuth()
  return (
    auth?<Outlet/>:<Navigate to={'/login'}/>
  )
}

export const PublicRoutes=()=>{
  const auth=useAuth()
  return auth?<Navigate to={'/'}/>:<Outlet/>
}
// export default index