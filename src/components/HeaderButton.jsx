import { useEffect, useRef, useState } from 'react'
import { BiSlider as SortIcon } from "react-icons/bi";
import { MdKeyboardArrowDown as DownIcon } from "react-icons/md";
import OptionsMenu from './optionsmenu'
import './HeaderButton.css'

const HeaderButton = () => {

    const [optionsMenuVisible, setOptionsMenuVisible] = useState(false);
    const buttonRef = useRef();

    const toggleMenu = (event) => {
        const tagName = event.target.tagName.toLowerCase();
        if(tagName != "select") {
            setOptionsMenuVisible(!optionsMenuVisible)
        }
    }

    const handleOutsideClick = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setOptionsMenuVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);


  return (
    <button className="display-button" onClick={toggleMenu} ref={buttonRef}>
        <div className="display-button-wrapper">
            <SortIcon />
            <strong>Display</strong>
            <DownIcon />
        </div>
        { optionsMenuVisible && <OptionsMenu/> }
    </button>
  )
}

export default HeaderButton