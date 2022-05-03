

const assessDirections =  (array=>
{
    
    if (array.length === 10)
    {
        const dirObj = {}
        array.map((dir)=>
            {
                if (dirObj.hasOwnProperty(dir))
                {
                    dirObj[dir] += 1;
                }
                else{
                    dirObj[dir] = 1
                }
            })
        if (dirObj.w === dirObj.e && dirObj.s === dirObj.n)
        {
            return true;
        }
        else{
            return false;
        }
    }
    else
    {
        return false;
    }
   
})


console.log(assessDirections(['n','n','s','s','n','s','n','s','n','s']))
console.log(assessDirections(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(assessDirections(['w']))
console.log(assessDirections(['n','n','n','s','n','s','n','s','n','s']))



const externalId = (initialId)=>
{
    brokenDownId = initialId.toString().split('')

    newId = brokenDownId.map(num=>
    {
        return Number(num) * Number(num)
    })
    return Number(newId.join(''))
}

console.log(externalId(752))
console.log(externalId(15))
console.log(externalId(9118))


const messageForLikes = (array)=>
{
    if(array.length === 1)
    {
        return`${array[0]} likes this`;
    }
    else if(array.length === 2)
    {
        return `${array[0]} and ${array[1]} likes this`;
    }
    else if(array.length === 3)
    {
        return `${array[0]}, ${array[1]} and ${array[2]} likes this`;
    }
    else if (array.length > 3)
    {
        const numberOflikesBeyond2 = array.length - 2;

        return `${array[0]}, ${array[1]} and ${numberOflikesBeyond2} others likes this`;
    }
    else{
        return 'no one likes this';
    }
}

console.log(messageForLikes(["John", 'Alicia', 'Mark', 'Alex']));
console.log(messageForLikes(["John", 'Alicia', 'Mark']));
console.log(messageForLikes(["John", 'Alicia']));
console.log(messageForLikes(["John"]));
console.log(messageForLikes([]));