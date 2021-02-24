import s from '../Dialogs.module.css'

const Messages = (props) => {
    return (
        <div className={s.messagePerson}>
            {props.message}
        </div>
    );
}



export default Messages;
