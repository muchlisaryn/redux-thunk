import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Swal from "sweetalert2"
import Loading from "./asset/Loading"


const postUrl = "https://jsonplaceholder.typicode.com/posts"

const initialState = {
    entities: [],

}

export const fetchPost = createAsyncThunk('post/fetchPost', async() => {
    const response = await axios.get(postUrl)
    return response.data
})

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.entities.push(...action.payload)
        })
        builder.addCase(fetchPost.pending, () => {
            <Loading/>
        })
        builder.addCase(fetchPost.rejected, () => {
            Swal.fire({
                title: 'KESALAHAN ADA DI SISI USER!!!',
                text: 'error',
                imageUrl: "https://suliada.files.wordpress.com/2020/08/logo-pdi-vector-logo-pdi-png-logo-pdi-cdr-logo-pdi-corel-logo-pdi-ai-logo-pdi-pdf.png?w=627",
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: 'Custom image',
              })
        })
    }
})

export default postSlice.reducer