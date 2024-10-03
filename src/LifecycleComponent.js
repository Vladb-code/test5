import React from 'react';

class LifecycleComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [],
            loading: false,
            error: null,
            count: 0,
            time: 0
        };
        this.increment = this.increment.bind(this)
     }
    
     increment() {
        this.setState({ count: this.state.count + 1})
     }
     componentTimer() {
     this.timerID = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1
      }))
    }, 1000);
  };

     componentDidMount () {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then(res => res.json())
      .then(
        (result) => {
        this.setState({
            loading: true,
            data: result.drinks
         });
       },
        (error) => {
            this.setState({
                loading: true,
                error
            });
        }
    );
  
   }

   shouldComponentUpdate (nextProps, nextState) {
    return nextState.count  % 2 === 0
   }

   componentDidUpdate (prevProps, prevState) {
    console.log('Компонент был обновлен!' + this.state.count)
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
    console.log('Компонент удален из DOM');
  }


  render () {
    const { data, loading, error } = this.state

    if (loading) {
        return (
        <div>
            <ul>
            {data.map((el) => (

                <li key={el.name}>
                    {el.strDrink}
                </li>
              ))}
           </ul>
           <div>
             <p>Количество: {this.state.count}</p>
             <button onClick={this.increment}>+++</button>
           </div>
           <div>
        <p>Время: {this.state.time} секунд</p>
      </div>
        </div>
            
        )
    }

    if (error) {
      return <div>Ошибка: {error.message}</div>
    } 
    
  }
}

  export default LifecycleComponent;