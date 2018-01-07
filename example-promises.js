function addPromis(a, b) {
    return new Promise(function(resolve, reject) {
        if(typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('error message');
        }
    });
}



addPromis(5, 't').then(function(sum) {
        console.log('yes ', sum);
    }, function(err) {
        console.log(err);
    }
);
