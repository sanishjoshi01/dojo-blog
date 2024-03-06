import BlogList from "./BlogList";
import { useState, useEffect } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    setIsLoading(false);
                });
        }, 1000)
    }, [])

    return (
        <div className="home">
            {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
            {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
        </div>
    );
}

export default Home;