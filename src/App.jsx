import './App.css'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

function App() {

  return (
    <div className='flex gap-6 p-8 px-[15%]'>
      <div className='shadow w-1/4 rounded-lg'></div>
      <div className='flex flex-col gap-2 w-1/2 rounded-lg '>
        <CreatePost/>
        <hr />
        <PostList />
      </div>
      <div className='shadow w-1/4 rounded-lg'></div>
    </div>
  )
}

export default App
