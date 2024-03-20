import React, { useState } from 'react';
 
 const fiboNumbers = () => {
     const [inputNumber, setInputNumber] = useState('');
     const [fibNumber, setfiboNumbers] = useState([]);
 
     const handleChange = (e) => {
         setInputNumber(e.target.value);
     };
 
     const calculateEven = () => {
        const numbersArray = inputNumbers.split(',').map(num => parseInt(num.trim()));
        const fiboNumber = numbersArray.map(num => ({
            number: num,
            isfibo: isfibo(num)
        }));
        const isfibo =()=> { for (let i = 0; i <= num; i++) {
          var n1=0,n2=1,n3,i,count=10;  
            n3=n1+n2;    
         return n3===num? true:false; 
            n1=n2;    
            n2=n3;
        }
    }
        setfiboNumbers(fiboNumber);
    };

  
 
     return (
         <div>
             <h2>Calculate Fibo Numbers</h2>
             <input type="text" value={inputNumber} onChange={handleChange} />
             <button onClick={calculateFibo}>Calculate</button>
             <h3>Fibo Numbers:</h3>
             <ul>
                 {fiboNumber.map((num) => (
                     <li key={num}>{num}</li>
                 ))}
             </ul>
         </div>
     );
 };
 
 export default fiboNumbers;
