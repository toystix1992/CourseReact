import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.itemImg}>
                <img src='https://elitexpert.media/wp-content/uploads/2020/09/ArticleImage_126012.jpg'></img>
            </div>
            <div className={s.itemText}>
                fja njwefnj jwefnonfi wofn woefn!!!f kmewfk
            </div>
            <div className={s.like}>
                <div className={s.LikeCounter}>
                    {props.like}:{props.likeCounter}
                </div>
            </div>
        </div>
    );
}

export default Post;
