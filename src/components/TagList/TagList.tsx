import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import {Button} from "../Button/Button";
import {getNotesCollection} from "../../utils/getTagsCollection";

interface TagListProps {}

const TagList = ({}:TagListProps) => {
    const {notes} = useAppSelector((state)=>state.notes)
    const tagList = getNotesCollection(notes)


    return (
        <div className={"TagBlock"}>
            <p>Available tags:</p>
            <ul className={"TagList"}>
                {tagList.map((item) => (
                    <li key={item}>
                        <Button>{item}</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TagList;
