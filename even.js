import React, { useState } from 'react';
 
 const evenNumbers = () => {
     const [inputNumber, setInputNumber] = useState('');
     const [evenNumber, setEvenNumbers] = useState([]);
 
     const handleChange = (e) => {
         setInputNumber(e.target.value);
     };
 
     const calculateEven = () => {
        const numbersArray = inputNumbers.split(',').map(num => parseInt(num.trim()));
        const evenNumber= numbersArray.map(num => ({
            number: num,
            isEven: isEven(num)
        }));
        setEvenNumbers(evenResultsArray);
    };

    const isEven = (num) => {
        
        for (let i = 0; i <= num; i++) {
            if (num % 2 === 0) return true;
        }
        return false;
    };
 
     return (
         <div>
             <h2>Calculate Even Numbers</h2>
             <input type="text" value={inputNumber} onChange={handleChange} />
             <button onClick={calculateEven}>Calculate</button>
             <h3>Even Numbers:</h3>
             <ul>
                 {evenNumber.map((num) => (
                     <li key={num}>{num}</li>
                 ))}
             </ul>
         </div>
     );
 };
 
 export default evenNumbers;
