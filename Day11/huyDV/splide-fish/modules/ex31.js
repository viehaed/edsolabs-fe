import data  from "../data.json" assert {type:"json"};
// bài 31
const getListName = () => {
    return data.data.map(item => item.name.split(" ").pop());
}

export default getListName;