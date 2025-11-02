import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Search = ({search,setSearch}) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md p-2 m-4 bg-gray-200">
      <div><FontAwesomeIcon icon={faSearch} className="mr-2" />
      <input
        type="text"
        placeholder="Search contact"
        
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='outline-none'
      />
    </div>
  </div>
)

}

export default Search