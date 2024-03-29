import Image from 'next/image'
import { CurrentUser } from './components/screens/(chats)/CurrentUser'
import { Chat } from './components/screens/(chats)/Chat'
import { ChatList } from './components/screens/(chats)/ChatList'

export default function ChatsPage() {
  return (
    <div className='grid h-full' style={{
      gridTemplateColumns: ".7fr 3fr"
    }}>
      <div className='border-r border-border'>
        <CurrentUser />
        <ChatList />
      </div>
      <div>
        <Chat />
      </div>
    </div>
  )
}
