import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = { name: 'sandesh', age: 23 };

  const link = "http://www.google.com";

  return (
    <div className="App">
      <h1>{title}</h1>
      <p>Liked {likes} times</p>
      <p>{person.age}</p>

      <a href={link}>Go Google</a>
    </div>
  );
}

export default App;
