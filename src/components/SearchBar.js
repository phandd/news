import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './SearchBar.less'

const Search = ({
  doSearch,
}) => {
  const [search, setSearch] = useState('')

  const handleSearch = keyword => {
    setSearch(keyword)
    doSearch(keyword)
  }

  return (
    <div className="search-bar">
      <div className="form-row">
          <div className={`col-md-4 col-6 search-input ${!search ? 'empty' : ''}`}>
            <input type="text" className="form-control mb-2" id="inlineFormInput" value={search} onChange={e => handleSearch(e.target.value)} placeholder="Filter..." />
          </div>
        </div>
    </div>
  )
}

Search.propTypes = {
  doSearch: PropTypes.func.isRequired,
}

export default Search
