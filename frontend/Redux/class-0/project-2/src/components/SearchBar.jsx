import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex gap-4 px-10 py-12  from-zinc-900 to-zinc-950"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        placeholder="Search photos, videos, gifs..."
        className="flex-1 px-6 py-4 rounded-xl bg-zinc-800 text-xl text-white
                   placeholder-zinc-400 outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        className="px-8 py-4 text-xl rounded-xl bg-indigo-600 hover:bg-indigo-500
                   active:scale-95 transition font-semibold"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
