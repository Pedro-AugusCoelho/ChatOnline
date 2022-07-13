export type ProfileChat = {
    chatId:string,
    title:string,
    avatar:string,
}

export type EmojiType = {
    emoji:string,
}

export type Menssage = {
    author:string,
    type:'menssage' | 'photo',
    body:string,
} 

export type User = {
    id: string;
    avatar:string;
    name:string;
}