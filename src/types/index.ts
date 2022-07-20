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
    avatar:string | null;
    name: string | null;
}