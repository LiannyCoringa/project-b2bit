import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { ProfileType } from '../types';

/* eslint-disable react/jsx-max-depth */
function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileType>();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
    const fetchFunction = async () => {
      const { data } = await axios({
        method: 'get',
        url: 'https://api.homologation.cliqdrive.com.br/auth/profile/',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json;version=v1_web',
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(data);
    };
    fetchFunction();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="card">
          <div className="image-profile">
            <span>Profile picture</span>
            <img
              src={ profile?.avatar.low }
              alt="rosto de um usuário"
            />
          </div>
          <div className="info-profile">
            <p className="parag-title">
              Your
              <span className="bold"> Name</span>
            </p>
            <p className="border-name">{ profile && profile.name }</p>
            <p className="parag-title">
              Your
              <span className="bold"> E-mail</span>
            </p>
            <p className="border-name">{ profile && profile.email }</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
