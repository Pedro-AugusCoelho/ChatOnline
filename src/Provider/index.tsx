import { createContext, FormEvent, ReactNode, useContext, useEffect, useState } from 'react';
import { Menssage, User } from '../types';
import Api from '../Services/ApiFirebase';

interface ChatOnlineProps {
  children: ReactNode;
}

interface ChatOnlineContextData {
    allUsersApp:User[],
    user:User,
    friend:User[],
    isActiveFriend:User,
    
    listMenssage:Menssage[],
    isShowAddFriend:boolean,
    handleIsActiveFriend:(data:User) => void,
    handleAddMenssage:() => void,
    handleIsShowAddFriend:() => void,
    handleGoogleSignIn:() => void,
    handleGoogleSignInEmail:(e:FormEvent<HTMLElement>) => void;
    handleAddFriend:(data:User) => void;
}

const ChatOnlineContext = createContext<ChatOnlineContextData>({} as ChatOnlineContextData);

export function ChatOnlineProvider({ children }: ChatOnlineProps): JSX.Element {
  
    //Usuários
    const [ allUsersApp , setAllUsersApp ] = useState([] as User[]);
    const [ friend , setFriend ] = useState({} as User[]);
    const [ user , setUser ] = useState({} as User);
    
    //Amigo em que se está conversando
    const [ isActiveFriend , setIsActiveFriend ] = useState({} as User);

    //Lista de menssagens referentes ao "isActiveFriend"
    const [ listMenssage , setListMenssage ] = useState([] as Menssage[])
    
    //Modal para Adicionar novo usuário a sua lista de amigos
    const [ isShowAddFriend , setIsShowAddFriend ] = useState(false);
    

    const handleGoogleSignIn = async () => {
      try{
        let res = await Api.GooglePopup();
        if(res){
          await Api.addUser(res);
          setUser(res);
        }
      }catch(err){
        console.log(err);
      }
    } 

    const handleAddFriend = async (data:User) => {
      Api.addFriend(data);
    } 

    const handleGoogleSignInEmail = async (e:FormEvent<HTMLElement>) => {
      e.preventDefault();
    }
    
    const handleIsActiveFriend = (data:User) => {
      setIsActiveFriend(data);
    }

    const handleAddMenssage = () => {
      //setListMenssage();
    }

    const handleIsShowAddFriend = () => {
      setIsShowAddFriend(!isShowAddFriend);
    }

    useEffect(() => {
      const handleGetProfiles = async () => {
        let ResUser = await Api.getContactList(user.id);
          if(ResUser){
            setAllUsersApp(ResUser);
          }
        }
      handleGetProfiles();
    },[user , handleAddFriend]);

    useEffect(() => {
      const handleGetFriends = async() => {
        let Resfriends = await Api.getFriendList();
        if(Resfriends){
          setFriend(Resfriends);
        }
      }
      handleGetFriends();
    },[handleAddFriend]);
 
    return (
    <ChatOnlineContext.Provider 
      value={{
        allUsersApp, user, friend, isActiveFriend, isShowAddFriend, listMenssage,
        handleGoogleSignIn, handleIsActiveFriend, handleAddMenssage, handleIsShowAddFriend, handleGoogleSignInEmail,
        handleAddFriend
      }}
      >
      {children}
    </ChatOnlineContext.Provider>
  );
}

export function useChatOnline(): ChatOnlineContextData {
  const context = useContext(ChatOnlineContext);
  return context;
}

