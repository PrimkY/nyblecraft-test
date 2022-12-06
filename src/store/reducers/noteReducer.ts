import {ActionTypes} from "../../consts/const";
import {NoteAction, NoteItem, NoteState} from "../types/note";

const initialState: NoteState = {
    notes: [],
}

const findNoteById = (arr: NoteItem[], item: NoteItem): number => {
    return arr.findIndex(index => index.id === item.id)
}

export const noteReducer = (
    state= initialState,
    action: NoteAction
    ) :NoteState => {
        switch (action.type) {
            case ActionTypes.CREATE_NOTE:
                return {
                    ...state,
                    notes: [...state.notes, action.payload]
                };
            case ActionTypes.EDIT_NOTE:
                const noteId = findNoteById(state.notes, action.payload)
                return {
                    ...state,
                    notes: [...state.notes.slice(0, noteId), action.payload, ...state.notes.slice(noteId + 1)],
                };
            case ActionTypes.DELETE_NOTE:
                return {
                    ...state,
                    notes: state.notes.filter((item) => item.id !== action.payload)
                }
            default:
                return state
        }
}
