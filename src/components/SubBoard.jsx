import { useState, useEffect } from 'react'
import { useDisplay } from '../context/Display'
import ColumnHeading from './ColumnHeading'
import Column from './Column'
import { getTickets } from '../utils/TicketApi'
import { getSortedTickets } from '../utils/TicketSorter'
import { getColumnData } from '../utils/ColumnHelper'
import './SubBoard.css'

const SubBoard = () => {
  const {groupingType, orderingType} = useDisplay()
  const [ticketsData, setTicketsData] = useState([])

  useEffect(() => {}, [groupingType, orderingType]) 

  if(ticketsData.length == 0) {
    getTickets().then(data => {(data)?setTicketsData(data):null})
                   .catch(error => {console.error('Error in handleData:', error)})
  }

  const sortedTickets = getSortedTickets(ticketsData, groupingType, orderingType) 
  const columnData = getColumnData(sortedTickets, groupingType)

  return (
    <>
      {columnData.map((column, columnIndex) => (
        <div key={columnIndex} className="grid-column">
          {<ColumnHeading heading={column.heading} length={sortedTickets[columnIndex]?sortedTickets[columnIndex].length:0}/>}
          {<Column sortedTickets={sortedTickets} columnIndex={columnIndex}/>}
        </div>
      ))}
    </>
  );
}

export default SubBoard