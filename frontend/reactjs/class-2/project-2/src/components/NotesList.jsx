import NoteCard from "./NoteCard";

const NotesList = ({ notes, deleteNote }) => {
  return (
    <div className="lg:w-1/2 p-10 border-l border-zinc-700">
      <h1 className="text-4xl font-bold mb-6">Recent Notes</h1>

      <div className="flex flex-wrap gap-5 max-h-[80vh] overflow-auto">
        {notes.map((note, index) => (
          <NoteCard
            key={index}
            note={note}
            index={index}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesList;