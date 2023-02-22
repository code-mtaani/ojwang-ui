import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://ojwang.co.ke" rel="noopener noreferrer">
          Ojwang
        </a>
        <span className="ms-1">&copy; 2023</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://github.com/code-mtaani" target="_blank" rel="noopener noreferrer">
          Code-Mtaani
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
