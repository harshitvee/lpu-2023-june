import { React, useState, useMemo } from "react";
// import CounterApplication from "./CounterApplication";
function PrimeNumber() {
    const [count, setCount] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const primeNumbers = useMemo(() => {
        const result = [];
        for (let number = 2; number < selectedNumber; number++) {
            if (isPrime(number)) {
                result.push(number);
            }
        }
        return result;
    }, [selectedNumber]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Increase Count : {count}
            </button>
            <div>
                <input
                    type="number"
                    name="number"
                    id="number"
                    value={selectedNumber}
                    onChange={(e) => {
                        const num = Math.min(e.target.value, 10000);
                        setSelectedNumber(num);
                    }}
                />
            </div>
            There are {primeNumbers.length} prime numbers
            {primeNumbers.map((num) => (
                <div key={num}>{num}</div>
            ))}
        </div>
    );
}

function isPrime(n) {
    if (n == 2) {
        return true;
    }
    const squareRoot = Math.ceil(Math.sqrt(n));
    for (let counter = 2; counter <= squareRoot; counter++) {
        if (n % counter === 0) {
            return false;
        }
    }
    return true;
}

export default PrimeNumber;
