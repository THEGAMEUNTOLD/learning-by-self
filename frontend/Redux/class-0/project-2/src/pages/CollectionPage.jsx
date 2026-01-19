import { useDispatch, useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {
  const collection = useSelector(s => s.collection.items)
  const dispatch = useDispatch()

  return (
    <div className="px-10 py-10">
      {collection.length ? (
        <>
          <div className="flex justify-between mb-8">
            <h2 className="text-3xl font-bold">Your Collection</h2>
            <button
              onClick={() => dispatch(clearCollection())}
              className="bg-red-600 px-6 py-2 rounded-lg font-semibold
                         hover:bg-red-500 active:scale-95 transition"
            >
              Clear All
            </button>
          </div>

          <div className="flex flex-wrap gap-8">
            {collection.map(item => (
              <CollectionCard key={item.id} item={item} />
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-5xl text-zinc-700">Collection is Empty</p>
      )}
    </div>
  )
}

export default CollectionPage
