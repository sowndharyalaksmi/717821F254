

 import React, { useState } from 'react';
 
 const PrimeNumbers = () => {
     const [inputNumber, setInputNumber] = useState('');
     const [primeNumbers, setPrimeNumbers] = useState([]);
 
     const handleChange = (e) => {
         setInputNumber(e.target.value);
     };
 
     const calculatePrimes = () => {
         const num = parseInt(inputNumber);
         if (isNaN(num) || num <= 1) {
             alert('Please enter a valid number greater than 1.');
             return;
         }
 
         const calculatePrimes = () => {
            const numbersArray = inputNumbers.split(',').map(num => parseInt(num.trim()));
            const primeNumber = numbersArray.map(num => ({
                number: num,
                isPrime: isPrime(num)
            }));
            setPrimeNumbers(primeResultsArray);
        };
    
        const isPrime = (num) => {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        };
     return (
         <div>
             <h2>Calculate Prime Numbers</h2>
             <input type="text" value={inputNumber} onChange={handleChange} />
             <button onClick={calculatePrimes}>Calculate</button>
             <h3>Prime Numbers:</h3>
             <ul>
                 {primeNumbers.map((num) => (
                     <li key={num}>{num}</li>
                 ))}
             </ul>
         </div>
     );
 };
}
 export default PrimeNumbers;
