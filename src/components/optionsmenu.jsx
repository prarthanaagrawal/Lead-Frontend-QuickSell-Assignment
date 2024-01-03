import { useState } from 'react'
import { useDisplay } from '../context/Display'
import { useDisplayUpdate } from '../context/Display'
import './optionmenu.css'

const OptionsMenu = () => {
    const {groupingType, orderingType} = useDisplay()
    const [groupingTypeOption, setGroupingTypeOption] = useState(groupingType);
    const [orderingTypeOption, setOrderingTypeOption] = useState(orderingType);
    const toggleDisplay = useDisplayUpdate()

    const handleGroupingChange = (event) => {
        setGroupingTypeOption(event.target.value);
        toggleDisplay(event.target.value, orderingType)
    };
    
    const handleOrderingChange = (event) => {
        setOrderingTypeOption(event.target.value);
        toggleDisplay(groupingType, event.target.value)
    };

  return (
    <div className="options-menu">
        <div className="menu-option">
            <label className="dropdown-label">Grouping</label>
            <select value={groupingTypeOption} onChange={handleGroupingChange}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
            </select>
        </div>
        <div className="menu-option">
            <label className="dropdown-label">Ordering</label>
            <select value={orderingTypeOption} onChange={handleOrderingChange}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
            </select>
        </div>
    </div>
  )
}

export default OptionsMenu