import React, { useState } from 'react';
import { useNoteAction } from './hooks/useAction';
import { NoteItem } from './store/types/note';
import { useAppSelector } from "./hooks/redux";
import Note from './components/Note/Note';
import TextField from './components/TextField/TextField';
import { Button } from './components/Button/Button';
import TagList from './components/TagList/TagList';
import { getNoteDate } from './utils/getNoteDate';
import { getTags } from './utils/getTags';
import {getStringWithoutTags} from "./utils/getStringWithoutTags";

const App = () => {
    const { createNote } = useNoteAction();
    const [ note, setNote] = useState<NoteItem>({
        date: "",
        id: "",
        tags: [],
        title: "",
    });
    const { notes } = useAppSelector((state) => state.notes);
    // const [filteredNotes, setFilteredNotes] = useState(notes)


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote({ ...note, title: e.target.value, tags: getTags(e.target.value)! });
    };



    const onAddNote = () => {
        createNote({ ...note, title: getStringWithoutTags(note.title), date: getNoteDate(), id: Date.now().toString() });
    };

    return (
        <div className="App">

            <TextField onChange={onChangeHandler} value={note.title} placeholder={"input some text for your notes"}/>
            <Button onClick={onAddNote}>Add Note</Button>
            <ul className={"MainList"}>
                {notes.map((note) => (
                    <li key={note.id} className={"MainItem"}>
                        <Note note={note} />
                    </li>
                ))}
            </ul>
            <TagList />
        </div>
    );
};

export default App;
