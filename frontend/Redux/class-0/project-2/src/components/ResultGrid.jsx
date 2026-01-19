import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGIF } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import ResultCard from './ResultCard'

const ResultGrid = () => {
  const dispatch = useDispatch()
  const { query, activeTab, results, loading, error } = useSelector(
    (state) => state.search
  )

  useEffect(() => {
    if (!query) return

    const getData = async () => {
      try {
        dispatch(setLoading())
        let data = []

        if (activeTab === 'photos') {
          const response = await fetchPhotos(query)
          data = response.results.map(item => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description || 'Photo',
            src: item.urls.regular,
            url: item.links.html
          }))
        }

        if (activeTab === 'videos') {
          const response = await fetchVideos(query)
          data = response.videos.map(item => ({
            id: item.id,
            type: 'video',
            title: item.user.name || 'Video',
            src:
              item.video_files.find(v => v.quality === 'sd')?.link
              || item.video_files[0]?.link,
            url: item.url
          }))
        }

        if (activeTab === 'gif') {
          const response = await fetchGIF(query)
          data = response.results.map(item => ({
            id: item.id,
            type: 'gif',
            title: item.title || 'GIF',
            src: item.media_formats.gif.url,
            url: item.url
          }))
        }

        dispatch(setResults(data))
      } catch (err) {
        console.error(err)
        dispatch(setError(err.message))
      }
    }

    getData()
  }, [query, activeTab, dispatch])

  if (loading) return <h1 className="text-center py-10">Loading...</h1>
  if (error) return <h1 className="text-center text-red-500">{error}</h1>

  return (
    <div className="flex flex-wrap gap-8 px-10 justify-center">
      {results.map(item => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ResultGrid
