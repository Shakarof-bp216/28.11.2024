import PropTypes from 'prop-types';
import React from 'react'

function Mybutton({btn}) {
  return (
    <div><button>{btn}</button></div>
  )
}
Mybutton.propTypes = {
    btn: PropTypes.string
  };
export default Mybutton