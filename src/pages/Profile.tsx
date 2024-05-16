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
              src={ profile?.avatar ? profile.avatar.image_low_url : 'https://cognuro-app-assets.s3.amazonaws.com/media/images/IMG_4452_low_5Vh2hYj.jpg' }
              alt="rosto de um usuário"
            />
          </div>
          <div className="info-profile">
            <p>
              Your
              <span className="bold"> Name</span>
            </p>
            <button className="border-name">{ profile && profile.name }</button>
            <p>
              Your
              <span className="bold"> E-mail</span>
            </p>
            <button className="border-name">{ profile && profile.email }</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
