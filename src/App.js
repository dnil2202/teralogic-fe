import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import HomeUser from './Pages/HomeUser'
import DashboardAdmin from './Pages/DashboardAdmin'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loginAction, logoutAction } from './action/userAction';
import { API_URL } from './helper';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()

  const keepLogin = () => {
    let teralog = localStorage.getItem('_tera')
    console.log(teralog)
    if (teralog) {
      axios.get(API_URL + '/user/keep', {
        headers: {
          'Authorization': `Bearer ${teralog}`
        }
      }).then((res) => {
        if (res.data.id) {
          localStorage.setItem('_tera', res.data.token)
          localStorage.setItem('_rtera', res.data.refresh)
          dispatch(loginAction(res.data))
        }
      })
        .catch((err) => {
          if(err.response.data.message==='Authenticate error'){
            axios.get(API_URL + '/user/refresh', {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('_rtera')}`
              }
            }).then((res) => {
              if (res.data.id) {
                localStorage.setItem('_tera', res.data.token)
                localStorage.setItem('_rtera', res.data.refresh)
                dispatch(loginAction(res.data))
              }
            })
          }else{
            console.log(err)
          }
        })
    }else{
      console.log('token mati')
    }
  }

  useEffect(()=>{
    keepLogin()
  },[])

  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/user' element={<HomeUser/>} />
      <Route path='/admin' element={<DashboardAdmin/>} />
    </Routes>
  );
}

export default App;
