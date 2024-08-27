import Navbar from '@/components/Navbar';
import React from 'react';

// async function getServerSideProps(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await res.json()
//   return data;
// }

const Posts = async () => {

    // const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    //         const data = await res.json()
    //         setPosts(data)
    //         console.log(posts)
    //     }

    //     fetchData()
    // }, [])

    // // This is a server component, so you can directly fetch data here
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    
    // const posts = await getServerSideProps();
    return (
        <>
            {/* <Navbar /> */}
            <h1>This is the Posts Page</h1>
            {posts?.map(post => {
                return <li key={post.id}>{post.title}</li>
            })}
        </>
    );
}

export default Posts;

