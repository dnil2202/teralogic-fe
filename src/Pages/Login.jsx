import React from 'react'
import regisImg from '../asset/mountains-7302806.jpg'
import FormLoginComponent from '../component/FormLoginComponent'

const Login = () => {

    return (
        <div className=''>
            <div className='container mx-auto md:px-32 lg:grid grid-cols-3 pt-5'>
                <img src={regisImg} className='h-full col-span-2 shadow-xl hidden lg:flex'/>
                <div className='bg-white drop-shadow-md'>
                    <FormLoginComponent/>
                </div>
            </div>
        </div>
      )
}

export default Login