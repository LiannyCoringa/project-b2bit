import Header from '../components/Header';

/* eslint-disable react/jsx-max-depth */
function Profile() {
  return (
    <>
      <Header />
      <main>
        <div className="card">
          <div className="image-profile">
            <span>Profile picture</span>
            <img src="" alt="rosto de um usuário" />
          </div>
          <div className="info-profile">
            <p>
              Your
              <span className="bold"> Name</span>
            </p>
            <p>Nome da pessoa</p>
            <p>
              Your
              <span className="bold"> E-mail</span>
            </p>
            <p>Email da pessoa</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
