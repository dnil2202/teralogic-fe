import React,{useState} from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { API_URL } from '../helper';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { loginAction } from '../action/userAction';
import { useDispatch } from 'react-redux';



const FormLoginComponent = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email,setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [visible,setVisible]=useState('password')
    const [message, setMessage]=useState('')

    const showPass = ()=>{
    if(visible=="password"){
        setVisible("text")
    }else if(visible=="text"){
        setVisible("password")
    }
    }

    const onLogin=()=>{
        axios.post(API_URL +'/user/login',{
        email,
        password
        })
        .then((res)=>{
        console.log(res)
        localStorage.setItem('_tera',res.data.token)
        delete res.data.token
        dispatch(loginAction(res.data))
        if(res.data.role === 'user'){
            navigate('/user',{replace:true})
        }else if(res.data.role === 'admin'){
            navigate('/admin',{replace:true})
        }
        }).catch((err)=>{
        console.log(err)
        setMessage(err.response.data.message)
        })
      }

  return (
    <div>
        <div className='px-3 py-5 '>
            <div className='lg:px-10'>
                <div className='font-bold text-2xl font-Public'>Login</div>
                <div className='text-sm font-extralight text-gray-400 font-Public'>Don't have account ?
                    <span className='ml-2 underline text-teal-500 hover:text-teal-600 text-sm font-bold font-Public'>Sign Up</span>
                </div>
                <form>
                    <label className='block mb-3 my-14'>
                        <span className='block text-sm font-medium text-gray-700 font-Public'>
                            Email/Username
                        </span>
                        <input type='email' onChange={(e)=>setEmail(e.target.value)} className='mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1 '/>
                    </label>
                    <label className='block'>
                        <span className='block text-sm font-medium text-gray-700 font-Public'>
                            Password
                        </span>
                        <div className='relative'>
                            <input type={visible} onChange={(e)=>setPassword(e.target.value)} className='mt-1 px-3 py-2  bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1'/>
                            {
                            visible === 'password'
                            ?
                            <BsEye onClick={showPass} size={20} className='absolute top-2 right-3' />
                            :
                            <BsEyeSlash onClick={showPass} size={20} className='absolute top-2 right-3' />
                            }
                        </div>
                    </label>
                </form>
                <div className='grid grid-cols-2 my-7'>
                    <div className='flex justify-start'>
                        <input type={'checkbox'}/>
                        <div className='ml-3 text-sm font-Public'>Remember me</div>
                    </div>
                </div>
                    <div className='h-20'>
                        <p className='text-red-600 text-center leading-7'>{message}</p>
                    </div>
                <button className='text-white rounded-md bg-teal-500 hover:bg-teal-600 w-full py-2 mt-5 font-Public' onClick={onLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default FormLoginComponent