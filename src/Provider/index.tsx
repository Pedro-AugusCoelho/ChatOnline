import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Menssage, User } from '../types';
import Api from '../Services/ApiFirebase';

interface ChatOnlineProps {
  children: ReactNode;
}

interface ChatOnlineContextData {
    ProfilechatList:User[],
    activeChat:User,
    listChat:Menssage[],
    user:User,
    showNewChat:boolean,
    handleActiveChat:(data:User) => void,
    handleAddMenssage:() => void,
    handleShowNewChat:() => void,
    handleGoogleLogin:() => void,
}

const ChatOnlineContext = createContext<ChatOnlineContextData>({} as ChatOnlineContextData);

export function ChatOnlineProvider({ children }: ChatOnlineProps): JSX.Element {
  
    const [ProfilechatList , setProfileChatList] = useState([] as User[]);
    const [activeChat , setActiveChat] = useState({} as User);
    const [listChat , setListChat ] = useState([] as Menssage[]);
    const [user , setUser] = useState({} as User);
    const [showNewChat , setShowNewChat] = useState(false);
    
    //Parei Aqui
    useEffect(() => {
      const handleGetProfiles = async () => {
        let result = await Api.getContactList(user.id);
        if(result){
          setProfileChatList(result);
        }
      }
      handleGetProfiles();
    },[user]);
    
    console.log(ProfilechatList);
    
    const handleActiveChat = (data:User) => {
      setActiveChat(data);
    }

    const handleAddMenssage = () => {
      //setListChat();
    }

    const handleShowNewChat = () => {
      setShowNewChat(!showNewChat);
    }

    const handleGoogleLogin = async () => {
        let result = await Api.GooglePopup();
        if(result){
          const NewUser = {
            id:result.user.uid,
            name:result.user.displayName,
            avatar:result.user.photoURL,
          }
          await Api.addUser(NewUser);
          setUser(NewUser);
        }else{
            alert('erro');
        }
    } 
 
    return (
    <ChatOnlineContext.Provider 
      value={{ ProfilechatList , activeChat , listChat , user , showNewChat , handleActiveChat , handleAddMenssage , handleShowNewChat, handleGoogleLogin}}>
      {children}
    </ChatOnlineContext.Provider>
  );
}

export function useChatOnline(): ChatOnlineContextData {
  const context = useContext(ChatOnlineContext);
  return context;
}

