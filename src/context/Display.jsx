import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types'

const DisplayButton = React.createContext()
const DisplayUpdateButton = React.createContext()
export const useDisplay = () => {
    return useContext(DisplayButton)
}
export const useDisplayUpdate = () => {
    return useContext(DisplayUpdateButton)
}


export const DisplayProvider = ({children}) => {
  const[groupingType, setGroupingType] = useState('status')
  const[orderingType, setOrderingType] = useState('priority')

  const toggleDisplay = (grouping, ordering) => {
    if (grouping !== null) setGroupingType(grouping)
    if (ordering !== null) setOrderingType(ordering)
} 
  
return (

    <DisplayButton.Provider value= {{groupingType,orderingType}}>
    <DisplayUpdateButton.Provider value = {toggleDisplay}>
        {children}
    </DisplayUpdateButton.Provider>

    </DisplayButton.Provider>
)
}

DisplayProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

