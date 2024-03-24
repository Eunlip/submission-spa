import { addNote } from "../utils/local-data"
import { useNavigate } from "react-router-dom"
import NoteInput from "../components/NoteInput";

export default function AddPage() {
  const navigate = useNavigate();

  const onAddNoteHandler = (note) => {
    addNote(note);
    navigate('/notes');
  }

  return (
    <div className="h-screen pt-5">
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  )
}
