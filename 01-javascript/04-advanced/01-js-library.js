var _ = {
    map: function(array, callback) {
        for (let i = 0; i < array.length; i++) {
            array[i] = callback(array[i])
        }
        return array;
    },
    reduce: function(array, callback, memo) {
        let foo = 0;
        if (!memo){
            memo = array[0];
            foo = 1;
        } 
        for (let i = foo; i<array.length; i++){
            memo = callback(array[i], memo);
        }
        return memo;
    },
    find: function(array, callback) { 
        for ( let i = 0; i <array.length; i++){
            if(callback(array[i])){
                return array[i];
            }
        }    
    },
    filter: function(array, callback) { 
        let filter_list = [];
        for (let i = 0; i<array.length; i++){
            if(callback(array[i])){
                filter_list.push(array[i]);
            }
        }
        return filter_list;
    },
    reject: function(array, callback) { 
        let reject_list = [];
        for (let i = 0; i<array.length; i++){
            if(!callback(array[i])){
                reject_list.push(array[i]);
            }
        }
        return reject_list;
    }
  }

var array = [1, 2, 3, 4, 5];
console.log(_.map(array, function callback(num) { return num * 2; }));
console.log(_.reduce(array, function callback(num, memo) { return num + memo; }));
console.log(_.find(array, function callback(num) { return num % 2 == 1; }));
console.log(_.filter(array, function(num) { return num < 4; }));
console.log(_.reject(array, function(num) { return num > 4; }));