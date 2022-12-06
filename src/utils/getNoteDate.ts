export const getNoteDate = () : string => {
    const date = new Date();
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
}
