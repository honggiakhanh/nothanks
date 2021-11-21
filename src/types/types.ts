export interface PlayerI {
    id: number,
    name: string,
    deck: number[],
    token: number
}

export interface CurrentCardI {
    cards: number[],
    value: number,
    token: number,
    turn: number
}

