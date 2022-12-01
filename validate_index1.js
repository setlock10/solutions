// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    
    if(node.left<node.data){
        max = node.data;
        validate(node.left, min, max);
    }else if (node.left===null){
        return;
    }else{
        return false;
    }
    if(node.right>node.data){
        min = node.data;
        validate(node.right, min, max);
    }else if (node.right===null){
        return;
    }else{
        return false;
    }

    return true;


}

module.exports = validate;
