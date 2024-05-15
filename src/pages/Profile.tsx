import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
      const response = await fetch('https://api.homologation.cliqdrive.com.br/auth/profile/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json;version=v1_web',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
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
              src="https://cognuro-app-assets.s3.amazonaws.com/media/images/IMG_4452_low_5Vh2hYj.jpg"
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
