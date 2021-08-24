function search(key){
    return listStudent.filter(item => {
        return item.name.trim().toUpperCase().includes(key.trim().toUpperCase());
    });
};

export default search;