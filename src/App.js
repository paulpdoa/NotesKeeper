import {useState} from 'react'
import AddNote from './components/AddNote';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

function App() {
  const [showAdd,setShowAdd] = useState(false);
  const [notes,setNotes] = useState([
    {
      id:1,
      title:"React JS",
      content:"React.js is a framework of JavaScript"
    },
    {
      id:2,
      title:"Laravel",
      content:"Laravel is a framework of PHP"
    },
    {
      id:3,
      title:"MySQL",
      content:"MySQL is a database"
    }
  ]);
  // add note
  const addNote = (note) => {
    // create an id for specific note
    const id = Math.floor(Math.random() * 10000) + 1;
    // copy the value of note coming from the AddNote that is being exported
    const newNote = { id,...note };
// copy the content of notes then add newNote variable.
    setNotes([...notes,newNote])
  }
  // delete a note
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className="container">
      <Navbar showForm={() => setShowAdd(!showAdd)} changeBtn={showAdd} />
      {showAdd && <AddNote onAdd={addNote} />}
      {notes.length > 0 ? <Notes notes={notes} onDelete={handleDelete} />  : <h1 style={{ textAlign:"center",
      width:"100%",marginTop:"19%" }}>Nothing to show</h1>}
      <Footer style={{ position:"absolute",bottom:"0" }} />
    </div>
  );
}

export default App;
