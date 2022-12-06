import { ActionTypes } from "../../consts/const";

export interface NoteItem {
    id: string;
    title: string;
    date: string;
    tags: string[];
}

export interface NoteState {
    notes: NoteItem[];
}

interface CreateNoteAction {
    type: ActionTypes.CREATE_NOTE;
    payload: NoteItem;
}
interface EditNoteAction {
    type: ActionTypes.EDIT_NOTE;
    payload: NoteItem;
}
interface DeleteNoteAction {
    type: ActionTypes.DELETE_NOTE;
    payload: string;
}

export type NoteAction = CreateNoteAction | EditNoteAction | DeleteNoteAction;
