import { getStatusIcon, getPriorityIcon, getUserIcon } from '../utils/Icon'
import { useDisplay } from '../context/Display'
import { getAvailability, getPriorityName } from '../utils/TicketApi'
import { BsThreeDots as Options } from 'react-icons/bs'
import { BiPlus as Add } from "react-icons/bi"
import PropTypes from 'prop-types'
import './ColumnHeading.css'

const Heading = ({heading, length}) => {

  const {groupingType} = useDisplay()

  let icon
  if(groupingType == "priority") {
    icon = getPriorityIcon(Number(heading))
    heading = getPriorityName(Number(heading))
  } else if(groupingType === "status") {
    icon = getStatusIcon(heading)
  } else if(groupingType === "user") {
    const userStatusIconColor = getAvailability(heading)?'green':'grey';
    icon = getUserIcon(heading)
    icon = <div className="user-container">{icon}<div className="user-status-circle" style={{backgroundColor: userStatusIconColor}}></div></div>
  }

  return (
    <h2 className="grid-column-heading">
      <div className="heading-wrapper">
        <div className="grouping-name">
          <span className="heading-icon">{icon}</span>
          <span className="heading-name">{heading}</span>
          <span className="column-size">{length}</span>
        </div>
        <div className="options-and-details">
          <Add className="clickable" size={22}/>
          <Options className="clickable" size={22}/>
        </div>
      </div>
    </h2>
  )
}

Heading.propTypes = {
  heading: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  length: PropTypes.number.isRequired
}

export default Heading