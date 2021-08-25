import { useEffect, useState } from "react";

const Async = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchDummyPosts = async () => {
            let response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            let data = await response.json();
            setPosts(data);
        };
        fetchDummyPosts();
    }, []);

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Async;
