
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

const begin = performance.now();
countPrimeNumbers();
let finish = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${finish - begin} milliseconds.`);
