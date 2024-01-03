import PropTypes from 'prop-types'
import { useState, useEffect, useRef } from 'react'
import { getPriorityIcon, getStatusIcon, getUserIcon } from '../utils/Icon'
import { BsCircleFill as TagIcon } from "react-icons/bs";
import { useDisplay } from '../context/Display'
import './Card.css'

const Card = ({ticketId, ticketTitle, available, userName, priority, status, tags}) => {

  const titleRef = useRef();
  const { groupingType } = useDisplay()
  let display = {
    user: 'block',
    priority: 'flex',
    status: 'block'
  }
  display[groupingType] = 'none'

  const [bottomMargin, setBottomMargin] = useState('15px')
  const [topMargin, setTopMargin] = useState('5px')
  useEffect(() => {
    if (titleRef.current) {
        const containerHeight = titleRef.current.offsetHeight
        if(containerHeight && containerHeight<30) {
            setTopMargin('16px')
            setBottomMargin('25px')
        }
    }
  }, [bottomMargin])

  const userStatusIconColor = available?'green':'grey'
  const userIcon = getUserIcon(userName)
  const priorityIcon = getPriorityIcon(priority)
  const statusIcon = getStatusIcon(status)

  return (
    <div className="card-wrapper">
        <div className="card-upper-wrapper">
            <div className="ticket-details">
                <span className="ticket-id">{ticketId}</span>
                <div className="user-container" style={{display: display['user']}}>
                    {userIcon}
                    <div className="user-status-circle" style={{backgroundColor: userStatusIconColor}}></div>
                </div>
            </div>
            <div className="ticket-title-span" style={{marginTop: topMargin, marginBottom: bottomMargin}}>
                <span className="status-icon" style={{display: display['status']}}>{statusIcon}</span>
                <h2 className="ticket-title" id={ticketId} ref={titleRef}>{ticketTitle}</h2>
            </div>
        </div>
        <div className="card-lower-wrapper">
            <div className="priority-icon-wrapper" style={{display: display['priority']}}>{priorityIcon}</div>
            <div className="tag-wrapper">
                <TagIcon size={13} color={'#a3a3a3'}/>
                {tags.map((tag, index) => (<div key={index} className="tag-name">{tag}</div>))}
            </div>
        </div>
    </div>
  )
}

Card.propTypes = {
    ticketId: PropTypes.string.isRequired,
    ticketTitle: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
  
export default Card