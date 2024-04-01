import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../fairbase/fairbase.confige";
import { useState } from "react";

const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const [showPassword, setshowPassword] =useState(false);

const handleRegister = e =>{
  e.preventDefault(); 
const email = e.target.email.value;
const password = e.target.password.value;
const accept = e.target.terms.checked;
console.log(email, password, accept);

if(password.length <6){
  setRegisterError('password should be 6 caracter');
  return;
}

else if(!/[A-Z]/.test(password)){
  setRegisterError('Password 6 carectars');
  return;
}
else if(!accept){
  setRegisterError('Please Accept Terms and Condition');
  return;
}

// Reacet error
setRegisterError('');
//Create User
createUserWithEmailAndPassword(auth, email, password)
.then(result =>{
 console.log(result.user);
})
.catch(error =>{
console.log(error);
setRegisterError(error.massage);
}) 
}

 return (
 <div className="">
<div className="mx-auto md:w-1/2">
<h2 className="text-3xl mb-8">Please Register</h2>
  <form onSubmit={handleRegister}>

  <div className="relative">
  <input className="mb-4 w-3/4 py-2 px-4" type="email" name="email"  placeholder="Email Address" id="" required /> 
   <br />
   <input 
   className="mb-4 w-3/4 py-2 px-4"
    type={showPassword ? "text": "password"}
     name="password"
     placeholder="Password"
      id="" required/> 
   <span className="absolute -ml-11" onClick={()=>{
    setshowPassword(!showPassword)
   }}>
    Show
   </span>
  </div>
   <br />
   <input type="checkbox" name="terms" id="terms" />
   <label className="ml-2" htmlFor="terms">Accept our Terms and condition</label>
   <br />
   <input className="mb-4 w-3/4 btn btn-secondary" type="submit" value="Register" />               
  </form> 
  {
    registerError && <p className="text-red-900">{registerError}</p>
  }
 </div>                                                         
 </div>
 );
};

export default Register;