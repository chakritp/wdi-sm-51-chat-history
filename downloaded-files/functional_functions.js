
        function forEach(coll, fn){
            for(var i=0; i<coll.length; i++){
                fn(coll[i])
            }
        }

        forEach([2,3,4], (n)=> console.log('the double of ' + n + 'is ' + 2*n))
        forEach("charles is cool", (ch)=> console.log(ch.toUpperCase()))
    
        map([2,3,4], n => 2* n ) //->> [4, 6, 8]
        filter([2,3,4], n => n%2 == 0 ) //->> [2, 4]
        reduce([2,3,4], (a, b) => a + b ) //->> 9
