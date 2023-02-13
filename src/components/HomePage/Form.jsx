import React from "react";
import axios from "axios";
import { data } from "autoprefixer";

export default function Form() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  //   const data = await axios.post("http://localhost:5000/api/v1/login", {email,password}).then(alert('Submitted')).catch(error => {console.log('error')})
  //   console.log(data)
  // };

  const handleEmail = (e) =>{
    e.preventDefault()
    setEmail(e.target.value)
  }
  const handlePass = (e) =>{
    e.preventDefault()
    setPassword(e.target.value)
  }

  const handleLogin = async(e) => {


    e.preventDefault();
    JSON.stringify(email)
    JSON.stringify(password)
    console.log(email, password);
    try {
      // const {data} = await axios.post("http://localhost:5000/api/v1/login", {email,password})
      const data = await axios.post("http://localhost:5000/api/v1/login", {email,password}).then(console.log({email,password})).catch(error => {console.log('error')})
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="form bg-[#1F3368] h-[400px]  rounded-2xl ml-20  mr-24 pl-4 opacity-[0.85] text-lg font-normal">
      <center>
        <h3 className="text-white m-0 pt-4 pb-[10px] pr-5 text-[2rem] mt-6 ">
          Student Login
        </h3>
      </center>
      <form
        className="ml-[0.3rem] flex flex-col text-orange-500">
        Email
        <input
          className="form__input w-[380px] h-[50px] rounded-xl mb-2 bg-white focus:outline-none text-xl text-black pl-1"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleEmail}
        />
        Password
        <input
          className="form__input w-[380px] h-[50px] rounded-xl mb-2 bg-white focus:outline-none text-xl  text-black pl-1"
          type="password"
          required
          name="password"
          value={password}
          onChange={handlePass}
        />
        <div className="form__newdata flex justify-between mr-4 w-[380px] text-lg">
          <p>
            <a
              className="no-underline text-orange text-lg hover:text-white"
              href="#"
            >
              Forgot password?{" "}
            </a>
          </p>

          <p>
            <a
              className="no-underline text-orange text-lg hover:text-white"
              href="/students/register"
            >
              Not registered?{" "}
            </a>
          </p>
        </div>
        <div className="error-section">
          {}
        </div>
        <button
          className="form__input submitbtn w-[380px] h-[50px] rounded-xl mb-2 focus:outline-none m-0 p-0 bg-orange-500 text-white text-2xl border-none mt-3 hover:text-orange hover:bg-white hover:text-black"
          type="submit" onClick={(e) => handleLogin(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
