import * as React from 'react'
import Message from './Channel/Message';


const Loading: React.FC<React.PropsWithChildren<{ message: string}>> 
  = ({ message = 'Loading...', children }) => (
  <h1>
    {message}...
    {children}
  </h1>
)
export default Loading
