import React, {useState} from 'react'

function LikeButton() {
    const [like, setLike] = useState(0);
    const [switcher, setSwitcher] = useState(true);
    return (
        <div>
            <button onClick={()=>setLike(like=>like + 1)}>
                like: {like}
            </button>
            <button onClick={()=>{setSwitcher(!switcher)}}>
                {switcher.toString()}
            </button>
        </div>
    );
} 

export default LikeButton