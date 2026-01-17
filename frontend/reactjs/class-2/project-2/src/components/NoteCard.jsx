const NoteCard = ({ note, index, deleteNote }) => {
  return (
    <div className="w-44 h-56 bg-[url('./Notes.jpg')] bg-cover bg-center rounded-xl p-3 flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-lg leading-tight">{note.title}</h3>
        <p className="text-xs mt-2 text-zinc-200 line-clamp-5">
          {note.details}
        </p>
      </div>

      <button
        onClick={() => deleteNote(index)}
        className="bg-red-500 py-1 rounded text-xs font-bold active:scale-95"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteCard;