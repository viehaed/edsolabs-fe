
function search(key, source){
    return source.filter(item => {
        return item.name.trim().toUpperCase().includes(key.trim().toUpperCase());
    });
};

export default search;

