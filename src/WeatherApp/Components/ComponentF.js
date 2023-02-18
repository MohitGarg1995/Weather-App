import React from 'react'
import { UserConsumer } from './UserContext'

function ComponentF() {
  return (
    <div>
      ComponentF is here
      <UserConsumer>
        {  uName => <div>hello{uName}</div>}
      </UserConsumer>
    </div>
  )
}

export default ComponentF
