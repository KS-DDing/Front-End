import react, {useState} from 'react';

export const reverseMapping = (array) => {

    const reversed = array.map(array=> array).reverse();

    return reversed;
}

export const likeMapping = (array) => {
    
    const liked = array;
    return liked;
}