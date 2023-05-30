type cardType = {
    image: string,
    id: number,
    date: number,
    favourite: number
}

interface cardState {
    cards: cardType
}

type Action = {type: "POPULAR" || "fAVOURITE", payload?: string}

export const cardReducer = (state: cardState, action: Action) => {
    switch(action.type){
        case "POPULAR":{
            
        }
    }
}