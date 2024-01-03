import PropTypes from 'prop-types'
import Card from './Card'
import './Column.css'

const Column = ({sortedTickets, columnIndex}) => {

  if(!sortedTickets[columnIndex]) return <></>

  return (
    <>
      {sortedTickets[columnIndex] && sortedTickets[columnIndex].map((ticket) => (
        <div key={ticket.id} className="grid-cell">
          <Card 
            ticketId={ticket.id}
            ticketTitle={ticket.title}
            available={ticket.available}
            userName={ticket.user}
            priority={ticket.priority}
            status={ticket.status}
            tags={ticket.tags}
          />
        </div>
      ))}
    </>
  )
}

Column.propTypes = {
    sortedTickets: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                tags: PropTypes.arrayOf(PropTypes.string).isRequired,
                status: PropTypes.string.isRequired,
                priority: PropTypes.number.isRequired,
                available: PropTypes.bool.isRequired,
                user: PropTypes.string.isRequired
            })
        )
    ).isRequired,
    columnIndex: PropTypes.number.isRequired
}
  
export default Column