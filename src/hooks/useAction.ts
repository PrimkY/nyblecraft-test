import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as NoteActionCreators from "../store/action/noteAction";

export const useNoteAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(NoteActionCreators, dispatch);
};
