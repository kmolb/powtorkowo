//promis

const prom = () => {
    return new Promise((resolve, reject) => {
        resolve(true);
        setTimeout(() => {
            resolve(true);
           // console.log('from set timeout');
        }, 4000);
    })
}

prom()
    .then((resp) => {
     console.log(resp);
     throw Error;
})
    .catch((err) => {
     console.log(err)
    });