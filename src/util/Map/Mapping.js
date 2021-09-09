import react from 'react';

export const reverseMapping = (array) => {

    const reversed = array.map(array=> array).reverse();

    return reversed;
}