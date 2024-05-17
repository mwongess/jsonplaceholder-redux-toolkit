import { useSelector } from "react-redux"
import Post from "./Post"

const PostList = () => {
    const posts = useSelector((state) => state.posts)
    return (
        <div className="flex flex-col gap-2">
            <Post />
            <Post />
        </div>
    )
}

export default PostList