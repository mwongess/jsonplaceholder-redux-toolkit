import { useDispatch } from "react-redux"
import { createPost } from "../features/posts/postSlice"

const CreatePost = () => {
  const dispatch = useDispatch()
  const createPostHandler = (e) => {
    e.preventDefault(createPost())

  }
  return (
    <div>
      <form className="" action="">
        <div className="flex flex-col gap-2  rounded mb-4">
          <input type="text" placeholder="Title" className="text-lg font-bold"/>
          <textarea name="" id="" rows={1} placeholder="Body"></textarea>
        </div>
        <button>Post</button>
      </form>
    </div>
  )
}

export default CreatePost