import React from 'react'
import spinner from './spinner.gif';

const Spinner = () => {
    return (
      <div className="text-center my-3">
        <img src={spinner} alt="Spinner for next page" />
      </div>
    )
}

export default Spinner
