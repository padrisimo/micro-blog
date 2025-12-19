import { useState, useEffectEvent, useEffect } from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate.tsx'
import CommentList from './CommentList.tsx'

function PostList() {
    const [posts, setPosts] = useState<{ [key: string]: { id: string; title: string } }>({})

    const fethchPosts = useEffectEvent(async () => {
        const res = await axios.get('http://localhost:4000/posts')
        setPosts(res.data)
    })

    useEffect(() => {
        fethchPosts()
    }, [])

    const renderedPosts = Object.values(posts).map((post) => {
        return (
            <div key={post.id} className="card" style={{ width: '30%', marginBottom: '20px' }}>
                <div className="card-body">
                    <h3 className='card-title'>{post.title}</h3>
                    <CommentList postId={post.id} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        )
    })

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>
    )
}

export default PostList