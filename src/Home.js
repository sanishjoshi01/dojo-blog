import { useState } from "react";

const Home = () => {

    let [name, setName] = useState('mario');
    let [age, setAge] = useState(25);

    const handleClick = (e) => {
        setName('luigi');
        setAge(30);
    }
    return (
        <div className="home">
            <h1>Home Page</h1>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default Home;