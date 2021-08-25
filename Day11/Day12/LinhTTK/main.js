//Check lodash
//fill
function fill(){
    var arr = [1, 2, 3];
    console.log(arr.fill('a'));
}
fill();

//findIndex()
var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];
function findIndex(){
    const isUser = (o) => o == 'barney';
    console.log(users.findIndex(isUser));
}
findIndex();

//findLastIndex của lodash khác với lastIndexOf
// findLastIndex không có trong JS thường
function findLast(){
    const isUser = (o) => o == 'barney';
    console.log(users.lastIndexOf(isUser));
}
findLast();
//frist ->head không có trong JS thường
//flatten không có trong JS thường
//flattenDeep không có trong JS thường
//flattenDepth không có trong JS thường
//fromPairs không có trong JS thường

//indexOf
function indexOf(){
    var arr = [ 1, 2, 1, 2];
    console.log(arr.indexOf(2));
}
indexOf();