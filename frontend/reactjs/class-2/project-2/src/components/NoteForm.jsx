import { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !details) return;

    addNote({ title, details });
    setTitle("");
    setDetails("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="lg:w-1/2 p-10 flex flex-col gap-4"
    >
      <h1 className="text-4xl font-bold">Add Notes</h1>

      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-4 py-2 rounded bg-zinc-800 border border-zinc-700 outline-none"
      />

      <textarea
        placeholder="Write details..."
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        className="px-4 py-2 h-32 rounded bg-zinc-800 border border-zinc-700 outline-none"
      />

      <button className="bg-white text-black py-2 rounded font-semibold active:scale-95">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;