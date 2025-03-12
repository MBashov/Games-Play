export default function CreateComments({ email }) {

    const commentAction = (formData) => {
        const comment = formData.get('comment');

        console.log(email);
        console.log(comment);
        
    }

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form action={commentAction} className="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    );
}