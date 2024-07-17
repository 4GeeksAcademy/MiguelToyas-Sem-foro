import React from 'react'

function Luz(props) {
  return (
    <div className={'luzColorDesactivado container-fluid' + props.bg}>
        <button type='button' className='w-100 h-100 btn btn-d'></button>
    </div>
  )
}

export default Luz