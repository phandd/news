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
    <div className="form-inline mt-2">
      <input type="text" className="form-control mb-2" id="inlineFormInput" value={search} onChange={e => handleSearch(e.target.value)} placeholder="Filter..." />
    </div>
  )
}

Search.propTypes = {
  doSearch: PropTypes.func.isRequired,
}

export default Search
