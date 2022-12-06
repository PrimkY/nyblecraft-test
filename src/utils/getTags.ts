export const getTags = (str: string) => {
    const tag = str.match(/\w+/g);
    return tag;
};
