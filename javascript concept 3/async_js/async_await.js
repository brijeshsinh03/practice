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
async function asyncTask (){
    try{
        const result1 = await fetchUserDataPromise(1);
        console.log(result1)

        const result2 = await fetchUserDataPromise(2);
        console.log(result2)

        const result3 = await fetchUserDataPromise(3);
        console.log(result3)
    } catch{
        console.log(error);
    }
}

asyncTask();