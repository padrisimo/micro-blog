interface Comment {
    id: string
    content: string
}

const CommentList = ({ comments }: { comments: Comment[] }) => {

    return (
        <ul>
            {comments.map(comment => (
                <li key={comment.id}>{comment.content}</li>
            ))}
        </ul>
    )
}

export default CommentList