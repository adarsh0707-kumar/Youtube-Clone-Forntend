
import '../Login/Login.css';  // importing css file

import logoImg from '../../assets/ytLogo.png'; // importing image

// importing librearies
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// main function 
const Login = () => {

  // making state for reciving data from frontend


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  // navifate state 
  // const navigate = useNavigate();

  // submiting the data in database
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    

    axios.post('https://youtube-clone-database.onrender.com/user/login', {
      email: email,
      password: password
    })
      .then(res => {
        setLoading(false);
        // navigate('/login')
        console.log(res);
        
      })
      .catch(err => {
        setLoading(false);
        console.error(err);
      });
  }

  return (
    // main page
    <div
      className="Login__wrapper">

      {/* form container */}
      <div
        className="Login__wrapper__form">

        {/* logo and heading  */}
        <div
          className='Login__wrapper__form__logo'>

          <img
            className='Login__wrapper__form__logo__img'
            src={logoImg} alt='logo'
          />

          <h2
            className='Login__wrapper__form__logo__heading'>
            Youtube Clone
          </h2>

        </div>


        {/* form for reciving data from user  */}
        <form
          className="Login__wrapper__form__contant"
          onSubmit={submitHandler}>


          <input
            required
            // reciving the email
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type='email'
            placeholder='Email' />

          <input
            required
            // reciving the password
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type='password'
            placeholder='Password' />

          <button
            className="Login__wrapper__form__contant__btn"
            type='submit'>
            {/* loader that show the time delay in saving the data in database  */}
            {isLoading && < i
              className="fa-solid fa-circle-notch fa-spin" />}
            Submit
          </button>



        </form>


      </div>

    </div>
  )
}


export default Login;