// deze file handmatig toegevoegd om de interface voor de tasks te maken.

export interface Task {
    id?: number;
    // met een vraagteken erachter is optional zodat je geen errors krijgt
    text: string;
    day: string;
    reminder: boolean;
}