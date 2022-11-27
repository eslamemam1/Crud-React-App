import React from 'react'
import { Link } from 'react-router-dom'

function SidePr() {
  return (
      <div className=" text-xl font-bold bg-slate-200 h-full flex justify-center">
          <ul>
              <li>
                  <Link to='/AllProdects'>AllProdects</Link>
              </li>
              <li>
                  <Link to='/AllCatigory'>AllCatigores</Link>
              </li>
          </ul>
      </div>
  )
}

export default SidePr