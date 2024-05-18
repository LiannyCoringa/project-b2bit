import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import image from '../images/B2BitLogo.png';

function Login() {
  const [valuesInput, setValuesInput] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const fetchFunction = async () => {
    const { data } = await axios({
      method: 'post',
      url: 'https://api.homologation.cliqdrive.com.br/auth/login/',
      data: {
        email: valuesInput.email,
        password: valuesInput.password,
      },
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json;version=v1_web',
      },
    });
    return data;
  };

  const validate = () => {
    if (valuesInput.email === '') {
      setErrors({ ...errors, email: 'Required email' });
      setDisabled(true);
    } else if (valuesInput.password === '') {
      setErrors({ ...errors, email: '' });
      setErrors({ ...errors, password: 'Required password' });
      setDisabled(true);
    } else {
      setErrors({ email: '', password: '' });
      setDisabled(false);
    }
    return errors;
  };

  useEffect(() => {
    validate();
  }, [valuesInput]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValuesInput({ ...valuesInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valuesInput.email)) {
      try {
        const data = await fetchFunction();
        localStorage.setItem('token', data.tokens.access);
        navigate('/profile');
      } catch (error) {
        setErrors({ ...errors, password: 'Invalid Email or Password' });
        setTimeout(() => {
          setErrors({ ...errors, password: '' });
        }, 5000);
      }
    } else {
      setErrors({ ...errors, email: 'Invalid Email' });
    }
  };

  return (
    <div className="login-container">
      <img src={ image } alt="logo b2bit" data-testid="logo" />
      <form onSubmit={ (e) => handleSubmit(e) }>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          onChange={ handleChange }
          value={ valuesInput.email }
          id="email"
          placeholder="@gmail.com"
        />
        <span className="error">{errors.email}</span>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={ handleChange }
          value={ valuesInput.password }
          id="password"
          placeholder="***************"
        />
        <span
          className="error"
        >
          {errors.password}
        </span>
        <button type="submit" disabled={ disabled }>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
