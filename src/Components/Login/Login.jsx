
import '../Login/Login.css';  // importing css file

import logoImg from '../../assets/ytLogo.png'; // importing image

// importing librearies
import { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

// main function 
const Login = () => {

  // making state for reciving data from frontend


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  // navifate state 
  const navigate = useNavigate();

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
        navigate('/dashboard')
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data._id);
        localStorage.setItem('channelName', res.data.channelName);

        toast(`Welcome, ${localStorage.getItem('channelName')}!`);

      })
      .catch(err => {
        setLoading(false);
        console.error(err);
        toast.error(err.response.data.error);
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


          <p style={{ textAlign: 'center', marginBottom: '1rem' }}>Do not have an account? <Link to="/signup">Signup</Link></p>

        </form>


      </div>

    </div>
  )
}


export default Login;