

function fetchUserDataPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
         if(userId){
            const user = {
                id: userId,
                name: 'yamla',
                email: 'yamla@example.com'
            };

            resolve(user);
        } else {
            reject(new Error('invalid user ID'));
        }
    }, 1000);
    })
}

// useage
fetchUserDataPromise(123)
.then((result) => {
    console.log('result:',result);
}).catch((err) => {
    console.log('catch error',err);
});

// promise.all()
 
Promise.all([
    fetchUserDataPromise(1),
    fetchUserDataPromise(2),
    fetchUserDataPromise(3)
])
.then( (results) => {
    console.log("results:", results);
})
.catch((error) => {
    console.log('eroro:',error)
})