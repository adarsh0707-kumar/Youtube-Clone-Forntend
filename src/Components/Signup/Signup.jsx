import '../Signup/Signup.css'
import logoImg from '../../assets/ytLogo.png'
import { useState } from 'react'
import axios from 'axios';

const Signup = () => {
  const [channelName, setChannelName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('');
  const [logo, setLogo] = useState(null);
  const [imageUrl, setImageUrl] = useState('')

  const fileHandler = (e) => {
    console.log(e.target.files[0]);
    setLogo(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('channelName', channelName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phone);
    formData.append('logo', logo);

    axios.post('https://youtube-clone-database.onrender.com/user/signup', formData)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err);
      });
  }

  return (
    <div
      className="Signup__wrapper">
      <div
        className="Signup__wrapper__form">
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



        <form
          className="Signup__wrapper__form__contant"
          onSubmit={submitHandler}>

          <input
            required
            onChange={(e) => {
              setChannelName(e.target.value)
            }}
            type='text'
            placeholder='Channel Name' />

          <input
            required
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type='email'
            placeholder='Email' />

          <input
            required
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type='password'
            placeholder='Password' />

          <input
            required
            onChange={(e) => {
              setPhone(e.target.value)
            }}
            type='phone'
            placeholder='Phone' />

          <input
            required
            onChange={
              fileHandler
            }
            type='file' />

          <img
            className="Signup__wrapper__form__contant__img"
            alt='logo-Image'
            src={imageUrl} />

          <div>
            <button
              className="Signup__wrapper__form__contant__btn"
              type='submit'>
              Submit
            </button>

          </div>


        </form>


      </div>

    </div>
  )
}

export default Signup;
