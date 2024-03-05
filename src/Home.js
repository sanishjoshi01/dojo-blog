import BlogList from "./BlogList";
import { useState, useEffect } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsLoading(false);
                });
        }, 3000)
    }, [])

    return (
        <div className="home">
            {isLoading && <p>Loading...</p>}
            {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
        </div>
    );
}

export default Home;