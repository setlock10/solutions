function reverse(str) {
    
    return str.split('').reduce((x, y)=>y + x,'');
}


module.exports = reverse;
