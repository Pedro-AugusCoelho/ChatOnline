import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Menssage, ProfileChat, User } from '../types';


interface ChatOnlineProps {
  children: ReactNode;
}

interface ChatOnlineContextData {
    ProfilechatList:ProfileChat[],
    activeChat:ProfileChat,
    listChat:Menssage[],
    user:User,
    showNewChat:boolean,
    handleActiveChat:(data:ProfileChat) => void,
    handleAddMenssage:() => void,
    handleShowNewChat:() => void,
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
    const [listChat , setListChat ] = useState([] as Menssage[]);
    const [user , setUser] = useState({} as User);
    const [showNewChat , setShowNewChat] = useState(false);
    
    const handleActiveChat = (data:ProfileChat) => {
      setActiveChat(data);
    }

    const handleAddMenssage = () => {
      //setListChat();
    }

    const handleShowNewChat = () => {
      setShowNewChat(!showNewChat);
    }
 
    return (
    <ChatOnlineContext.Provider 
      value={{ ProfilechatList , activeChat , listChat , user , showNewChat , handleActiveChat , handleAddMenssage , handleShowNewChat}}>
      {children}
    </ChatOnlineContext.Provider>
  );
}

export function useChatOnline(): ChatOnlineContextData {
  const context = useContext(ChatOnlineContext);
  return context;
}

