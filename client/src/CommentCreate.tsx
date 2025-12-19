import axios from 'axios'
import React, { useState } from 'react'

const CommentCreate = ({ postId }: { postId: string }) => {
    const [content, setContent] = useState('')

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content,
        })

        setContent('')
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Comment</label>
                    <input
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        type="text"
                        className="form-control" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CommentCreate