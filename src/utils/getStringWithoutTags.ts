export const getStringWithoutTags = (str: string) => {
    const uniqStr: any = [];
    str.split(' ').forEach((el) => {
        if(el[0] !== '#') {
            uniqStr.push(el)
        }
    })
        return uniqStr.join(' ');
};
