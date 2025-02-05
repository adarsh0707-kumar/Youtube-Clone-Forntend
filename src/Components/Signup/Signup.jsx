import '../Signup/Signup.css';  // importing css file

import logoImg from '../../assets/ytLogo.png'; // importing image

// importing librearies
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

// main function 
const Signup = () => {

  // making state for reciving data from frontend

  const [channelName, setChannelName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('');
  const [logo, setLogo] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setLoading] = useState(false);
  // navifate state 
  const navigate = useNavigate();

  // raciving the file from frontend
  const fileHandler = (e) => {
    console.log(e.target.files[0]);
    setLogo(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  }
  // submiting the data in database
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('channelName', channelName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phone);
    formData.append('logo', logo);

    axios.post('https://youtube-clone-database.onrender.com/user/signup', formData)
      .then(res => {
        setLoading(false);
        navigate('/login');
        console.log(res);
        toast(res.data.msg);
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
      className="Signup__wrapper">

      {/* form container */}
      <div
        className="Signup__wrapper__form">

        {/* logo and heading  */}
        <div
          className='Signup__wrapper__form__logo'>

          <img
            className='Signup__wrapper__form__logo__img'
            src={logoImg} alt='logo'
          />

          <h2
            className='Signup__wrapper__form__logo__heading'>
            Youtube Clone
          </h2>

        </div>


        {/* form for reciving data from user  */}
        <form
          className="Signup__wrapper__form__contant"
          onSubmit={submitHandler}>

          <input
            required
            // reciving the channel name
            onChange={(e) => {
              setChannelName(e.target.value)
            }}
            type='text'
            placeholder='Channel Name' />

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

          <input
            required
            // reciving the phone number
            onChange={(e) => {
              setPhone(e.target.value)
            }}
            type='phone'
            placeholder='Phone' />

          <input
            required
            // reciving the logo file ex. image and etc.
            onChange={
              fileHandler
            }
            type='file' />

          {/* showing selected logo img  */}
          {imageUrl && <img
            className="Signup__wrapper__form__contant__img"
            alt='logo-Image'
            src={imageUrl} />
          }

          <button
            className="Signup__wrapper__form__contant__btn"
            type='submit'>
            {/* loader that show the time delay in saving the data in database  */}
            {isLoading && < i
              className="fa-solid fa-circle-notch fa-spin" />}
            Submit
          </button>


          <p style={{ textAlign: 'center', marginBottom: '1rem' }}>Already have an account? <Link to="/login">Login</Link></p>
        </form>



      </div>

    </div>
  )
}

export default Signup;
