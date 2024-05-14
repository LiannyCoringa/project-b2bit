import Header from '../components/Header';

/* eslint-disable react/jsx-max-depth */
function Profile() {
  return (
    <>
      <Header />
      <main>
        <div className="card">
          <div>
            <span>Profile picture</span>
            <img src="" alt="rosto de um usuário" />
          </div>
          <div>
            <p>
              Your
              <span>Name</span>
            </p>
            <p>Nome da pessoa</p>
            <p>
              Your
              <span>E-mail</span>
            </p>
            <p>Email da pessoa</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
