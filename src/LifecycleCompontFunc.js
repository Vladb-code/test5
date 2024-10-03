import React, {useState, useEffect} from 'react';

const LifecycleComponentFunc = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
   
    useEffect(() => {fetchData()},[])

    const fetchData = async () => {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        const result = await response.json();
        setData(result.drinks);
      };

    useEffect(()=> console.log('Компонент был обновлен функцией!' + count), [count]);

    
    useEffect(()=> {
        console.log('Компонент');
        return () => console.log('удаление');
    },[])

      return (
            <div>
                <ul>
                {data.map((el) => (
    
                    <li key={el.name}>
                        {el.strDrink}
                    </li>
                  ))}
               </ul>
               <p>Счетчик: {count}</p>
               <button onClick={() => setCount((count) => count + 1)}>+++</button>
               </div>
                
        )
}

    
       
export default LifecycleComponentFunc;