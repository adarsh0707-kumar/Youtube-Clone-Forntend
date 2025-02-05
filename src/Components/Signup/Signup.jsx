import '../Signup/Signup.css'
import logo from '../../assets/ytLogo.png'
import { useState } from 'react'
import { useActionData } from 'react-router-dom';

const Signup = () => {
  const [channelName, setChannelName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useActionData('')
  const [phone, setPhone] = useState('');
  const [logo, setLogo] = useState(null);
  const [imageUrl, setImageUrl] = useState('')

  const fileHandler = (e) => {
    console.log(e.target.files[0]);
    setLogo(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
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
            src={logo} alt='logo'
          />
          
          <h2
            className='Signup__wrapper__form__logo__heading'>
            Youtube Clone
          </h2>

        </div>

        <div
          className="Signup__wrapper__form__contant">

          <input
            onChange={(e) => {
            setChannelName(e.target.value)
            }}    
            type='text'
            placeholder='Channel Name' />
          
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}  
            type='email'
            placeholder='Email' />
          
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}  
            type='password'
            placeholder='Password' />

          <input
            onChange={(e) => {
              setPhone(e.target.value)
            }}  
            type='phone'
            placeholder='Phone' />

          <input
            onChange={
              fileHandler()
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
          

        </div>

      </div>

    </div>
  )
}

export default Signup;