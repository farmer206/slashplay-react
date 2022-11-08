import React from 'react';
import SimpleHeader from '../components/SimpleHeader';
import  "./../scss/style.scss";


const Profile = () => {
    // const {signout} = useAuth();
    // const navigate = useNavigate();

    return (
        <>
        <SimpleHeader />
        <main className="page">
            <h2 class="header-block__title">Мой профиль</h2>
        </main>
        </>
    );
};

export default Profile;