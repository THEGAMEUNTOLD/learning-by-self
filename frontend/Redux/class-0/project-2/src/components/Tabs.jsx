import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
  const tabs = ['photos', 'videos', 'gif']
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.search.activeTab)

  return (
    <div className="flex gap-4 px-10 pb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => dispatch(setActiveTabs(tab))}
          className={`px-6 py-2 rounded-full uppercase font-semibold transition
            ${activeTab === tab
              ? 'bg-indigo-600 text-white'
              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default Tabs
