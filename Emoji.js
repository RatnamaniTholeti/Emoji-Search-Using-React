import React, { useState } from 'react'
import './Emoji.css'
const emojiData =
[ {
    id:1,
    symbol:'😂',
    name:'laugh'
  },
  {
    id:2,
    symbol:'🤗',
    name:'hug'
  },
  {
    id:3,
    symbol:'😘',
    name:'kiss'
  },
  {
    id:4,
    symbol:'😴',
    name:'sleep'
  },
  {
    id:5,
    symbol:'😭',
    name:'cry'
  },
  {
    id:6,
    symbol:'😡',
    name:'angry'
  },
  {
    id:7,
    symbol:'😎',
    name:'cool'
  },
  {
    id:8,
    symbol:'😃',
    name:'smile'
  },
  {
    id:9,
    symbol:'🤫',
    name:'silent'
  },
  {
    id:10,
    symbol:'😱',
    name:'shock'
  },
  {
    id:11,
    symbol:'💛',
    name:'yellowheart'
  },
  {
    id:12,
    symbol:'🧡',
    name:'orangehert'
  },
  {
    id:13,
    symbol:'💚',
    name:'greenheart'
  },
  {
    id:14,
    symbol:'💜',
    name:'violetheart'
  },
  {
    id:15,
    symbol:'🖤',
    name:'blackheart'
  }
]
function Emoji() {
    const [searchemoji,setSearchemoji] = useState("");
    const handlechange=(e)=>
    {
        setSearchemoji(e.target.value);

    }
    const showemoji = emojiData.filter((emoji) =>
    {
    const emojiname = emoji.name.toLowerCase();
    return emojiname.includes(searchemoji.toLowerCase());
    })
  return (
    <div className='main'>
      <br></br>
       <h1>React Emoji App😀 </h1>
       <input type='text' onChange={handlechange} value={searchemoji} placeholder='Search for the emoji'></input>
    <div className='result'>
        {
            
           showemoji.map((emoji)=><span>{emoji.symbol}</span>)
        }</div>
    </div>
  )
}

export default Emoji