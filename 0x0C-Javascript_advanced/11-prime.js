const countPrimeNumbers = () => {
    let primes = 0;
    let isprime = true;
    for (let counter = 2; counter <= 100; counter++) {
        isprime = true;
        let limit = Math.round(Math.sqrt(counter));
        for (let mod = 2; mod <= limit; mod++) {
            if (counter % mod == 0) {
                isprime = false;
                break;
            }
        }
        if (isprime) {
            primes++;
        }
    }
    return primes;
}

const operation = () => {
    for (let number = 0; number < 100; number++) {
        countPrimeNumbers();
    }
}

const begin = performance.now();
setTimeout(operation(), 0);
let finish = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${finish - begin} milliseconds.`);
