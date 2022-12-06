import { NoteItem } from "../store/types/note";

export const getNotesCollection = (notes: NoteItem[]) => {
    const tags = notes.map((item) => item.tags);
    const tagsList = tags.flat();
    const uniqueTags = tagsList.reduce((q: any, i: any): string[] => {
        return q.includes(i) ? q : [...q, i];
    }, []);
    return uniqueTags;
};
