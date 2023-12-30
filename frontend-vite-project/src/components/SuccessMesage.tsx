import React from 'react'

interface SuccessAlertProps{
    SuccessMessage: string;
}

const SuccessMessage: React.FC<SuccessAlertProps>= ({SuccessMessage}) => {
  return (
    <p className='bg-green-500 text-white text-center m-4 rounded-xl  py-2'>Success : {SuccessMessage}</p>
  )
}

export default SuccessMessage