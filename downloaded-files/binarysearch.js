function binarySearch(coll, thing){
    var lo = 0
    var hi = coll.length - 1
    while (lo <= hi){
        var middle = lo + Math.floor((hi-lo)/2)
        if (coll[middle] == thing)
            return middle
        else
            if (thing < coll[middle])
                hi = middle - 1
            else
                lo = middle + 1
    }
}

var animals = ['ant', 'antilope', 'bee', 'bear', 'boar', 'dalmatian', 'elephant', 'frog', 'goose', 'hamster', 'iguana']
binarySearch(animals, 'antilope')
//->> 1
binarySearch(animals, 'dog')
//->> undefined
