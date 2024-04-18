import React, {useContext} from 'react'
import { UserContext, ChannelContext } from '../../App'

/*
Context provides a way to pass data through the component tree without having to pass props down manually at every level.
*/

function ComponentE() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <>
      <div>Component E</div>
      <div>User context value {user} -  channel context value {channel}</div>
    </>
  )
}

export default ComponentE