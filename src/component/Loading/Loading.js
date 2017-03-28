import React from 'react'
import './Loading.less'

const Loading = (props) =>{
    return (
        <div className="loading">
            <img src={require("../../../asset/image/loading.gif")}/>
        </div>
    )
}
export default Loading