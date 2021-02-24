import s from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogsName = (props) => {
    const path = `/Dialogs/${props.id}`
    return (
        <NavLink to={path} className={`${s.dialogPerson} ${s.dialogPersonActive}`}>
            {props.name}
        </NavLink>
    );
}



export default DialogsName;
