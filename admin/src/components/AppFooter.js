import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <span className="ms-1">Copyright &copy; 2024 </span>
        <a href="https://helpubuild.co.in/" target="_blank" rel="noopener noreferrer">
        Prop savvy realtors
        </a>
        <span className="ms-1">. All Right Reserved.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          Hover Business Services LLP
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
