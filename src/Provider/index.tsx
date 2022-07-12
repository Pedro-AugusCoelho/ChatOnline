import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ProfileChat } from '../types';


interface ChatOnlineProps {
  children: ReactNode;
}

interface ChatOnlineContextData {
    ProfilechatList:ProfileChat[],
    activeChat:ProfileChat,
    listChat:[],
    handleActiveChat:(data:ProfileChat) => void,
    handleAddMenssage:() => void,
}

const ChatOnlineContext = createContext<ChatOnlineContextData>({} as ChatOnlineContextData);

export function ChatOnlineProvider({ children }: ChatOnlineProps): JSX.Element {
  
    const [ProfilechatList , setProfileChatList] = useState([{
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
    const [listChat , setListChat ] = useState([] as []);
    
    const handleActiveChat = (data:ProfileChat) => {
      setActiveChat(data);
    }

    const handleAddMenssage = () => {
      //setListChat();
    }
 
    return (
    <ChatOnlineContext.Provider 
      value={{ ProfilechatList , activeChat , listChat , handleActiveChat , handleAddMenssage }}>
      {children}
    </ChatOnlineContext.Provider>
  );
}

export function useChatOnline(): ChatOnlineContextData {
  const context = useContext(ChatOnlineContext);
  return context;
}

