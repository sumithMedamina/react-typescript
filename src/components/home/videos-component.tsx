import { useEffect, useState } from "react";
import { VideosContract } from "../../contracts/videos-contract";
import { useDispatch} from "react-redux";
import axios from "axios";
import { saveToView } from "../../slicers/likes-slicer";
import store from "../../store/store";




export function VideosComponent(){

    const dispatch = useDispatch();
    const library = store.getState().store.library;

    const handleSaveClick = (video:VideosContract)=>{
            dispatch(saveToView(video.url));
    }


    const[videos, setVideos] = useState<VideosContract[]>([]);

    useEffect(() =>{
        axios({
            method:'get',
            url:"http://127.0.0.1:5050/videos"
        }).then(response =>{
            setVideos(response.data);
        })
    })

    return(
        <div className="container-fluid">
                <h2>Videos-Component</h2>
                <button className="btn btn-success mt-3 mb-3">View library</button>
                <h4>Recently added videos</h4>
                <div className="d-flex">
                    {
                        library.map(url =>
                               <div className="me-4" key={url}>
                                 <iframe src={url} title={url} width="100" height="100"></iframe>
                               </div>
                        )
                    }
                </div>
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Video</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        videos.map(item =>
                            <tr key={item.id}>
                            <td>{item.title}</td>
                            <td><iframe src={item.url} title={item.url} width="300" height="300"></iframe>
                            <div>
                            <button className="btn btn-primary bi bi-hand-thumbs-up"></button>
                            <button onClick={() => handleSaveClick(item)} className="bi bi-save btn btn-danger mx-1"> view later</button>
                            </div>
                            </td>
                            </tr>
                        )
                      }
                    </tbody>
                </table>
            </div>
        </div>
    )
}