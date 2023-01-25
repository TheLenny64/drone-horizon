import styles from './ActionButton.module.css'
import { FaArrowRight } from 'react-icons/fa'

export default function ActionButton({ children, style, type, loading, onClick }) {
    // action, dark, outlinedAction, outlinedDark
    const options = ['action', 'dark', 'outlinedAction', 'outlinedDark'];
    const _style = options.includes(style) ? style : 'action';
    var _class;
    if (_style === "action") _class = styles.btnAction;
    if (_style === "dark") _class = styles.btnDark;
    if (_style === "outlinedAction") _class = styles.btnOutlinedAction;
    if (_style === "outlinedDark") _class = styles.btnOutlinedDark;

    return (
        <button type={type} className={_class} onClick={() => onClick?.()}>{children} <FaArrowRight /> </button>
    )
}