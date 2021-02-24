import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <div className={s.writePost}>
                <div>
                    My Posts
            </div>
                <textarea className={s.writeText}>

                </textarea>
                <button className={s.addPostBtn}>
                    Add Post!
                </button>
            </div>
            <Post like='like' likeCounter = '1' />
        </div>
    );
}

export default MyPosts;
