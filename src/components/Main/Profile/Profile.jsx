import MainImg from './MainImg/MainImg'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <MainImg />
            <div>
                <img src="https://codeguide.academy/img/bane.svg"></img>
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;
