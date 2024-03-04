import React from 'react'
import "./featured.scss"
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
export default function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option >Genre</option>
                    <option value="action">Action</option>
                    <option value="action">Action</option>
                    <option value="action">Action</option>
                    <option value="action">Action</option>
                    <option value="action">Action</option>
                    <option value="action">Action</option>
                </select>
            </div>
        )}
        <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <div className="info">
            <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />
            <span className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem ducimus fuga consectetur repellat maiores obcaecati libero dolorum fugiat ad doloribus minima harum nemo, ratione, facilis beatae et debitis accusantium ullam.</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
