function palindrome(str) {
    
    return str.split('').every((e,i)=>{return e===str[str.length-i-1]});


}

module.exports = palindrome;
