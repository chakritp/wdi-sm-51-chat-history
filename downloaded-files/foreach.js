        function forEach(arr, fn){
            for(var i=0; i<arr.length; i++){
                fn(arr[i])
            }
        }

        forEach([2,3,4], (n)=> console.log('the double of ' + n + 'is ' + 2*n))
