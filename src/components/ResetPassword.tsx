import React from 'react'
import { userEndPoint } from '../Apis'


const resetPassword = `${userEndPoint}/resetPassword`
const ResetPassword = () => {
   
    
    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
            <form className='border flex flex-col text-indigo-400 p-6'  action={resetPassword} method='POST'>
                    Enter your username:
                    <input type="text" className='p-2 border rounded-md' placeholder="Username" name="username" />
                    Enter new password
                    <input type="password" placeholder="password" name="password" className='p-2 border rounded-md tex-indigo-400 my-4' />
                    <input type="text" className='p-2 border rounded-md tex-indigo-400 my-4' name="token" placeholder="Enter the token"/>
                    <button type='submit' className="w-max p-2 mt-4 mx-2 border-blue bg-indigo-400 hover:bg-indigo-500 hover:text-white text-black">Change Password</button>
                
            </form>
        </div>
    )
}

export default ResetPassword