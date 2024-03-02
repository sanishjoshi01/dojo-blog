const Home = () => {
    const handleClick = (e) => {
        console.log('Clicked');
    }

    const handleClickAgain = (name, e) => {
        console.log('hi', name, e.target);
    }
    return (
        <div className="home">
            <h1>Home Page</h1>
            <button onClick={handleClick}>Click</button>
            <button onClick={(e) => {
                handleClickAgain('san', e)
            }}>Click Again</button>
        </div>
    );
}

export default Home;