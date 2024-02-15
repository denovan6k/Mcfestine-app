import React,{useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import img1 from '../assets/Logo.png'
import img2 from '../assets/Frame 59955.png'
import Buttons from '../../public/components/Buttons'
import { auth } from '../firebase'
import {  useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
      const [email,setEmail] = useState('')
      const [password,setPassword] = useState('')
      const [retypepassword,setRetypePassword] = useState('')
      const [errors, setErrors] = useState({});
      const [submitted, setSubmitted] = useState(false);
      //  const [agree, setAgree] = useState(false);

   const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate email
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    }
    
 
    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!password || !passwordRegex.test(password) ) {
      newErrors.password = 'Password must be at least 8 characters, including one uppercase letter, one lowercase letter, and one digit';
      
      isValid = false;
    }
      //Validate retype password
    if (retypepassword !== password){
      newErrors.retypepassword='Password does not match'
      isValid = false;
    }
  
  
    setErrors(newErrors);
    return isValid;
  };

  // const checkboxHandler = () => {
  //   // if agree === true, it will be set to false
  //   // if agree === false, it will be set to true
  //   setAgree(!agree);
  //   // Don't miss the exclamation mark
  // }


     
    const handleSignup = async (e) => {
        e.preventDefault()
        if (validateForm()) {
          // If form is not valid or terms are not agreed, don't proceed
          await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              navigate("/Login")
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
          });
        }
    

    else {
      setSubmitted(false);
    }

  
     

 


 
   
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
        <form className="bg-white px-28 mt-24" onSubmit={handleSignup}>
        

      <div className=""> <ul>
        <li>
        <h1 className="text-black text-2xl">Welcome to McFestines!👌 </h1>
        </li>
      <li>
        <p className='text-[#666666] my-4'> Create your account, let’s get you started! </p>
      </li>
      </ul> </div>
    <div className="mb-4">
        <label htmlFor="email" className="block text-[#666666] text-sm  mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='example@gmail.com'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className={`w-96 px-3 py-2 border-2 text-sm rounded-full`}
        />
            <br />
        {errors.email ? <span className="text-red-500  text-sm">{errors.email}</span> : null}
        {/* {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname}</span>} */}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-[#666666] text-sm  mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='**********'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className={`w-96 px-3 py-2 border-2 text-sm rounded-full`}
        />
            <br />
         {errors.password && <span className="text-red-500  text-sm">{errors.password}</span>}
        {/* {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname}</span>} */}
      </div>
      <div className="mb-4">
        <label htmlFor="retypepassword" className="block text-[#666666] text-sm  mb-2">
          Re-type Password
        </label>
        <input
          type="password"
          id="retypepassword"
          name="retypepassword"
          placeholder='**********'
          value={retypepassword}
          onChange={(e)=>setRetypePassword(e.target.value)}
          className={`w-96 px-3 py-2 border-2 text-sm  rounded-full`}
        />
            <br />
         {errors.retypepassword && <span className="text-red-500 mt-4 text-sm">{errors.retypepassword}</span>}
        {/* {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname}</span>} */}
      </div>
      <div>
       {/* <ul className='flex space-x-2'>
        <li>
          <input type='checkbox' id="agree" className='border-[#A1A1AA] rounded-xl'/>
        </li>
        <li>
          <p className='text-[#A1A1AA] text-sm mt-1'> I have read and agree with the <span className='text-[#CF9832]'> privacy policy</span> and </p>
        </li>
       </ul> */}
       {/* <p className='ml-6 text-slate-400 text-sm'>terms and conditions</p> */}
      </div>
      <div className='mt-12'>
      <Buttons className='flex items-center space-x-2 pl-24 w-96 text-[#666666] bg-[#F5EAD6] rounded-full p-2 mb-8' label='Sign up with google'
      icon='flat-color-icons:google'/>
    <Buttons
      className={`text-center w-96 text-white bg-[#CF9832] rounded-full p-2 mb-4`}
      label="Sign up"

    />
      </div>
      <div className="flex mt-4 mb-20">
          <p className='text-sm text-[#64748B]'>Already have an account</p> <button className="ml-1 text-[#CF9832] underline text-sm " >Signup?</button>
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

export default Signup
