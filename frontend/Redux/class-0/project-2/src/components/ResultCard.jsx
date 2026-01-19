import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <div className="w-[18rem] h-80 rounded-2xl overflow-hidden
                    bg-zinc-900/80 backdrop-blur
                    hover:scale-[1.03] hover:shadow-xl
                    hover:shadow-indigo-500/20 transition-all">
      <a href={item.url} target="_blank" className="block h-full">
        {item.type === 'photo' && (
          <img src={item.src} className="h-full w-full object-cover" />
        )}
        {item.type === 'video' && (
          <video src={item.src} autoPlay loop muted className="h-full w-full object-cover" />
        )}
        {item.type === 'gif' && (
          <img src={item.src} className="h-full w-full object-cover" />
        )}
      </a>

      <div className="absolute bottom-0 w-full p-4
                       from-black/80 to-transparent
                      flex justify-between items-center">
        <h2 className="text-lg font-semibold line-clamp-2">{item.title}</h2>
        <button
          onClick={() => {
            dispatch(addCollection(item))
            dispatch(addedToast())
          }}
          className="bg-indigo-600 px-4 py-1 rounded-lg font-medium
                     hover:bg-indigo-500 active:scale-95 transition"
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default ResultCard
