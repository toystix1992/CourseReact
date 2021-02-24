import s from './Dialogs.module.css'
import DialogsName from './DialogsName/DialogsName'
import Messages from './Messages/Messages'


const Dialogs = (props) => {
    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <DialogsName name='Anton' id='1'/>
                <DialogsName name='Ivan' id='2' />
                <DialogsName name='Egor' id='3' />
                <DialogsName name='Tania' id='4' />
            </div>
            <div className={s.messages}>
                <Messages message='Hi how are you?' />
                <Messages message="Hi I'm Ok" />
                <Messages message="Learn React" />
                <Messages message="Its so greap" />
            </div>
        </div>
    );
}

export default Dialogs;
