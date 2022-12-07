import React, { useState } from "react";
import { NoteItem } from "../../store/types/note";
import { Button } from "../index";
import {useNoteAction} from "../../hooks/useAction";
import TextField from "../TextField/TextField";
import { getNoteDate } from "../../utils/getNoteDate";
import { getTags } from "../../utils/getTags";
import {getStringWithoutTags} from "../../utils/getStringWithoutTags";

interface NoteProps {
    note: NoteItem
}

const Note = ({ note }: NoteProps) => {
    const { editNote, deleteNote } = useNoteAction();
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(note.title);

    return (
        <div>
            <h3>{note.title}</h3>
            {edit && (
                <TextField
                    value={title}
                    placeholder={"Rewrite title"}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setTitle(e.target.value)
                    }
                />
            )}
            <div>
                <p>{note.date}</p>
                <div>
                    {!edit && <Button onClick={() => setEdit(true)}>Edit</Button>}
                    {edit && (
                        <Button
                            onClick={() => {
                                editNote({
                                    ...note,
                                    title: getStringWithoutTags(title),
                                    date: getNoteDate(),
                                    tags: getTags(title)!,
                                });
                                setEdit(false);
                            }}
                        >
                            Save
                        </Button>
                    )}
                    <Button onClick={() => deleteNote(note.id)}>Delete</Button>
                </div>
            </div>
            <div className={"NoteTagsBlock"}>
                <div>Current node tags:</div>
                <ul className={"NoteTags"}>
                    {note.tags.map((item) => (
                        <li key={item}>
                            <div>{item}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Note;
