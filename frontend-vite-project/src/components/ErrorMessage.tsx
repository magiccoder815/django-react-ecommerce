import React from 'react'

interface ErrorAlertProps{
    errorMessage: string;
}

const ErrorMessage: React.FC<ErrorAlertProps>= ({errorMessage}) => {
  return (
    <p className='bg-red-500 text-white text-center m-4 rounded-xl  py-2'>Error : {errorMessage}</p>
  )
}

export default ErrorMessage