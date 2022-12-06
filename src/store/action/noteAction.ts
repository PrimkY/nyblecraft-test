import { ActionTypes } from "../../consts/const";
import { NoteAction, NoteItem} from "../types/note";

export const createNote = (note: NoteItem): NoteAction => {
    return {
        type: ActionTypes.CREATE_NOTE,
        payload: note,
    }
}
export const editNote = (note: NoteItem): NoteAction => {
    return {
        type: ActionTypes.EDIT_NOTE,
        payload: note,
    }
}
export const deleteNote = (noteId: string): NoteAction => {
    return {
        type: ActionTypes.DELETE_NOTE,
        payload: noteId,
    }
}
