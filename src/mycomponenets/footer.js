import React from 'react'

export default function footer() {
    let footerstyle={
        position:"relative",
        top:"100vh",
        width:"100%"
    }

  return (
    <footer className='bg-dark text-light' style = {footerstyle}>
        <p className='text-center py-3' >
        Copyright &copy; todoslist.com
        </p>
      
    </footer>
  )
}
