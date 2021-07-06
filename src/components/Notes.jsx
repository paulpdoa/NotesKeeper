import React from 'react'
import {FaTimes} from 'react-icons/fa';

function Notes({notes,onDelete}) {
    return (
        <div className="notes">
            {notes.map((note) => (
                <div className="note-card" key={note.id}>
                    <h3 style={{ display:"flex", justifyContent:"space-between"}}>{note.title} 
                    <FaTimes onClick={() => onDelete(note.id)} style={{ color:"red",cursor:"pointer" }}/></h3>
                    <p>{note.content}</p>
                </div>
            ))}
        </div>
        
    )
}

export default Notes
