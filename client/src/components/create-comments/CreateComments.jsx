import commentServoce from "../../services/commentServoce";

export default function CreateComments({ email, gameId }) {

    const commentAction = async (formData) => {
        const comment = formData.get('comment');

        await commentServoce.create(email, gameId, comment);
        
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