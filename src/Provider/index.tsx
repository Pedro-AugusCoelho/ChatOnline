import { createContext, ReactNode, useContext, useEffect, useState } from 'react';


interface ChatOnlineProps {
  children: ReactNode;
}

interface ChatOnlineContextData {
    chatList:[{},{},{},{},{},{},{},{},{},{},{},{},{}];
}

const ChatOnlineContext = createContext<ChatOnlineContextData>({} as ChatOnlineContextData);

export function ChatOnlineProvider({ children }: ChatOnlineProps): JSX.Element {
  
    const [chatList , setChatList] = useState<[{},{},{},{},{},{},{},{},{},{},{},{},{}]>([{},{},{},{},{},{},{},{},{},{},{},{},{}]);

  return (
    <ChatOnlineContext.Provider 
      value={{ chatList }}>
      {children}
    </ChatOnlineContext.Provider>
  );
}

export function useChatOnline(): ChatOnlineContextData {
  const context = useContext(ChatOnlineContext);
  return context;
}

