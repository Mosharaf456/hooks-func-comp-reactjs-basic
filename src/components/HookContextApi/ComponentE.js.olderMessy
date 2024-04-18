import React from 'react'
/*
Context provides a way to pass data through the component tree without having to pass props down manually at every level.
*/
import { UserContext, ChannelContext } from '../../App'
// useContext hook is used to consume the context value in a better way.

function ComponentE() {
  return (
    <>
      <UserContext.Consumer>
        {
          user => {
            return (
              <ChannelContext.Consumer>
                {
                  channel => {
                    return <div>User context value {user}, channel context value {channel}</div>
                  }
                }
              </ChannelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    </>
  )
}

export default ComponentE