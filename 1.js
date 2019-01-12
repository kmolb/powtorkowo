//promis

const prom = () => {
    return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(1);
        }, 1000);
    })
}

const prom2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    })
}
prom()
    .then((resp) => {
     console.log(resp);
     throw Error;

    })
    .then((resp) => {
        console.log(resp);
    })
    .catch((err) => {
     console.log('error', err)
    });