import {useState} from 'react'

const AddNote = ({onAdd}) => {

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    const submitBtn = (e) => {
        e.preventDefault();

        onAdd({title,content});

        setTitle('');
        setContent('');
    }

    return (
        <form onSubmit={submitBtn} className="add-note">
            <div className="add-form">
            <h1>Add Note</h1>
                <div className="form-input">
                    <label htmlFor="title">Title</label><br/>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} name="title" placeholder="Add title" required/>
                </div>
                <div className="form-input">
                    <label htmlFor="content">Content</label><br/>
                    <textarea name="content" onChange={(e) => setContent(e.target.value)} value={content} placeholder="Add content" cols="30" rows="10" required></textarea>
                </div>
                <div className="saveBtn" style={{ display:"flex",justifyContent:"center" }}>
                    <button>Save Note</button>
                </div>
            </div>  
        </form>
    )
}

export default AddNote
