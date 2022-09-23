import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './Components/Dashbaord'
import {PrivateRoutes,PublicRoutes} from './PrivateRouters'
import Login from './Components/Login'
import RouteWithDB from './Components/RouteWithDB'
import Notfound from './Components/404Page/page'
import Registration from './Components/Registraion/registration'
import Academic from './Components/Academic'
import Group from './Components/Group'
import ComingSoon from './Components/CommingSoon'
const ls=require('local-storage')
ls.on("acadeUser",(value:any,old:any)=>{
  console.log(value,old)
})

const App = () => {
 
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/' element={<RouteWithDB Component={Dashboard}/>}/>
          <Route path='/academic' element={<RouteWithDB Component={Academic}/>}/>
          <Route path='/group' element={<RouteWithDB Component={Group}/>}/>
          <Route path='/chellanges' element={<ComingSoon/>}/>
          <Route path='/create' element={<ComingSoon/>}/>
          <Route path='/events' element={<ComingSoon/>}/>
          <Route path='/activities' element={<ComingSoon/>}/>
          <Route path='/favorite' element={<ComingSoon/>}/>
          <Route path='/notification' element={<ComingSoon/>}/>
          <Route path='/messages' element={<ComingSoon/>}/>
          <Route path="/saved" element={<ComingSoon/>}/>
          <Route path='/account' element={<ComingSoon/>}/>
        </Route>
        <Route element={<PublicRoutes/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path="*" element={<Notfound/>}/>
        </Route>
        
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App