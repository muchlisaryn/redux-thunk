import { useDispatch, useSelector } from "react-redux"
import { fetchPost } from "../postSlice"

const PostList = () => {
    const allpost = useSelector((state) => state.post.entities)
    const dispatch = useDispatch()

    const doFetchPost = () => {
        dispatch(fetchPost())
    }

    console.log(allpost)

    return (
        <div className="container">
            <div className="mt-5">
                <div className="fs-1">GET POST</div>
                <button className="btn btn-danger mt-4" onClick={doFetchPost}>CLICK ME</button>
                    <div className="mt-5">
                        {allpost?.map((e) => 
                            <div>
                                <div className="d-flex">
                                <div>{e.id}</div>
                                <div className="ms-3">{e.title}</div>
                                </div>
                            </div>
                        )}
                    </div>
            </div>
        </div>
    )
}

export default PostList