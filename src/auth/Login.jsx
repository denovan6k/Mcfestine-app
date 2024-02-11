import React,{useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import img1 from '../assets/Logo.png'
import img2 from '../assets/Frame 59955.png'
import Buttons from '../../public/components/Buttons'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate= useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
     
      const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/Dashboard")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
      }
    
  return (
    <div className="">
      <div className='grid grid-cols-2'>
        <div className=''>
        <img
                      src={img1} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='w-24 h-6 ml-28 mt-10'
                       />
                       {/* onSubmit='{handleSubmit}' */}
        <form className="bg-white px-28 mt-24" onSubmit={handleSubmit}>
        

      <div className=""> <ul>
        <li>
        <h1 className="text-black text-2xl">Hi there, welcome back😜 </h1>
        </li>
      <li>
        <p className='text-slate-400 my-4'> Please enter your details to login. </p>
      </li>
      </ul> </div>
    <div className="mb-4">
        <label htmlFor="username" className="block text-slate-400 text-sm  mb-2">
          Email Address
        </label>
        <input
          type="text"
          id="firstname"
          name="email"
          placeholder='example@gmail.com'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className={`w-96 px-3 py-2 border-2 text-sm rounded-full`}
        />
        {/* {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname}</span>} */}
      </div>
      <div className="mb-4">
        <label htmlFor="username" className="block text-slate-400 text-sm  mb-2">
          Password
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder='**********'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className={`w-96 px-3 py-2 border-2 text-sm  rounded-full`}
        />
        {/* {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname}</span>} */}
      </div>
      <div>
       <ul className='flex justify-between'>
        <li>
          <input type='checkbox'/>
        </li>
        <li>
          <p className='text-slate-400 text-sm mt-1 mr-32'> Remember me </p>
        </li>
        <li>
          <p className='text-orange-400 text-sm mt-1 mr-20'> Forgot password? </p>
        </li>
       </ul>
       
      </div>
      <div className='mt-12'>
      <Buttons className='text-center w-96 text-white bg-orange-200 rounded-full p-2 mb-8' label='Sign up with google'/>
      <Buttons className='text-center w-96 text-white bg-orange-600 rounded-full p-2 mb-4' label='Sign up'/>
      </div>
      <div className="flex mt-4 mb-20">
          <p className='text-sm text-slate-400'> Don’t have an account?</p> <button className="ml-1 text-yellow-500 underline text-sm " >Signup?</button>
          {/* onClick={handleClick} */}
        </div>
      
      
     
    
      {/* <div className="flex justify-center rounded-lg ">
      <button
        type="submit"
        className="bg-blue-500 mr-4 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
      
      </div> */}
     
    </form>
          </div> 
        <div className='mt-24'>
        <img
                      src={img2} // Replace with the actual path to the profile picture
                      alt='Profile'
                      className='h-5/6 w-5/6'
                       />

        </div>
        </div>
   
  </div>
  )
}

export default Login