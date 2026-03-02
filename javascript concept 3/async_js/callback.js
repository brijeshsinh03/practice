function fetchUserData(userId, callback){
    setTimeout(() => {
        if(userId){
            const user = {
                id: userId,
                name: 'yamla',
                email: 'yamla@example.com'
            };

            callback(null, user);
        } else {
            callback(new Error('invalid user ID'));
        }
    }, 1000);
}


// callback useage
fetchUserData(123, (error, user) => {
    if(error){
        console.log('error fetching user ',error );
    } else {
        console.log('user:',user);
    }
} );
