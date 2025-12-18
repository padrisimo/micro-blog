import React, { useState, useEffectEvent, useEffect } from 'react'
import axios from 'axios'

function PostList() {
    const [posts, setPosts] = useState<{ [key: string]: string }>({})

    const fethchPosts = useEffectEvent(async () => {
        const res = await axios.get('http://localhost:4000/posts')
        setPosts(res.data)
    })

    useEffect(() => {
        fethchPosts()
    }, [])

    return (
        <div>PostList</div>
    )
}

export default PostList