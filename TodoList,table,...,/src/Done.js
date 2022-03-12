import React, {memo} from 'react'

function Done({done,list}) {
    let compare = (done / list)*100
  return (
    <div>
        {parseFloat(compare).toFixed(2)}%
    </div>
  )
}
export default memo(Done)
