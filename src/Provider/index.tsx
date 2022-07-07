import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { types } from 'sass';


interface ChatOnlineProps {
  children: ReactNode;
}

interface ChatOnlineContextData {
    chatList:ProfileChat[],
    activeChat:ProfileChat,
    handleActiveChat:(data:ProfileChat) => void;
}

type ProfileChat = {
  chatId:string,
  title:string,
  avatar:string,
}

const ChatOnlineContext = createContext<ChatOnlineContextData>({} as ChatOnlineContextData);

export function ChatOnlineProvider({ children }: ChatOnlineProps): JSX.Element {
  
    const [chatList , setChatList] = useState([{
      chatId:'1',
      title:'Joao A.',
      avatar:'https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-criador-de-avatar-masculino.jpg'
      },
      
      {
      chatId:'2',
      title:'Pedro A.',
      avatar:'https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-criador-de-avatar-masculino.jpg'
      },
      
      {
      chatId:'3',
      title:'Ana A.',
      avatar:'https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-criador-de-avatar-masculino.jpg'
      }]);
    const [activeChat , setActiveChat] = useState({} as ProfileChat);
    
    const handleActiveChat = (data:ProfileChat) => {
      setActiveChat(data);
    }
 
    return (
    <ChatOnlineContext.Provider 
      value={{ chatList , activeChat , handleActiveChat }}>
      {children}
    </ChatOnlineContext.Provider>
  );
}

export function useChatOnline(): ChatOnlineContextData {
  const context = useContext(ChatOnlineContext);
  return context;
}

