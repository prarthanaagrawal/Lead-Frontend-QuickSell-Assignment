import PropTypes from 'prop-types'
import './Dashboard.css'

const Main = ({children}) => {
  return (
    <div className="dashboard-wrapper">
      {children}
    </div>
  )
}
Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main

