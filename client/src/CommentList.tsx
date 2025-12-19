import { useState, useEffect, useEffectEvent } from 'react'
import axios from 'axios'

interface Comment {
    id: string
    content: string
}

const CommentList = ({ postId }: { postId: string }) => {
    const [comments, setComments] = useState<Comment[]>([])

    const fetchComments = useEffectEvent(async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
        setComments(res.data)
    })

    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <ul>
            {comments.map(comment => (
                <li key={comment.id}>{comment.content}</li>
            ))}
        </ul>
    )
}

export default CommentList