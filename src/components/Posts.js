import React from 'react'

const Posts = ({ posts, loading }) => {
    console.log("posts", posts);

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="user-list">
            {
                posts.map((post) => (
                    <div className="user-card">
                       <img src={post.avatar}/>
                       <div>Name: {post.first_name} {post.last_name}</div>
                        <div>Email: {post.email}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Posts
