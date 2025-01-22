import { lawFirms } from "../../mockData";

const initialState = lawFirms;

export const firmReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_LAWYERS":
            return action.payload;
        default:
            return state;
    }
};