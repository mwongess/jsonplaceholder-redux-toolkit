import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        createPost: (state, action) => {
            const post = {
                title: action.payload.title,
                body: action.payload.body,
                userId: 1
            }
            state.posts.push(todo)
        },
        deletePost: (state, action) => {

        },

        updatePost: (state, action) => {

        }
    }
})

export const { createPost, deleteTodo } = postSlice.actions
export default postSlice.reducer