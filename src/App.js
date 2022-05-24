import './App.css';
import { useState, useEffect } from 'react';

//localstorage get fuction `important`
const localData = () => {
  let data = localStorage.getItem('peoples');

  if (data) {
    return JSON.parse(localStorage.getItem('peoples'));
  }
  else {
    return [];
  }
}

function App() {
  const [todo, setTodo] = useState('');
  const [people, setPeople] = useState(localData());

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime().toString();
    const person = { todo, id};
    if(todo){
      setPeople((people) => {
        return [...people, person]
      });
    }
    setTodo('');
  }

  useEffect(() => {
    localStorage.setItem('peoples', JSON.stringify(people))
  }, [people]);

  const removeItem = (id) => {
      setPeople((people) => {
        return people.filter((person) => person.id !== id);
      })
  }

  return (
    <div className="App">
      <h1>My Todo✍️</h1>
      <div className="widget_panel">
      {people.map((props) => {
        return(
        <div className="widget" key={props.id}>
            <p className="todo">{props.todo}</p>
            <button className='close_btn' onClick={() => removeItem(props.id)}>🤜</button>
        </div>
        )
      })}
      </div>


      <form>
        <input type="text"
               value={todo}
               onChange={(e) => setTodo(e.target.value)}
               autoFocus
               name='todo'
               placeholder='Todo here!'
               />
        <button className='btn' onClick={handleSubmit}>👍</button>
      </form>

    </div>
  );
}

export default App;