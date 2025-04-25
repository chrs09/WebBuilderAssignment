import React from 'react'

const SearchListings = () => {
    const sortByOptions = [
        'Newest',
        'Oldest',
        'Least expensive to most',
        'Most expensive to least',
        'Bedrooms (Low to High)',
        'Bedroms (High to Low)',
        'Bathrooms (Low to High)',
        'Bathrooms (High to Low)'

    ];
    const Bedrooms = [
        'Any Number',
        'Studio',
        '1+',
        '2+',
        '3+',
        '4+',
        '5+',
        '6+'

    ];

    const Baths = [
        'Any Number',
        '1+',
        '2+',
        '3+',
        '4+',
        '5+',
        '6+'
    ]
  return (
    <div>
      <div className="search-listings">
        <div className="overlay">
            <h2 className="title">Search Listings</h2>
            <form className="form">
            <div className="form-row">
                <div className="form-group">
                <label>Location</label>
                <select><option>Any</option></select>
                </div>
                <div className="form-group">
                <label>Type</label>
                <select><option>Any</option></select>
                </div>
                <div className="form-group">
                <label>Sort By</label>
                <select>
                    <option></option>
                    {sortByOptions.map((option, index) => (
                        <option key={index}>{option}</option>
                    ))}
                </select>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                <label>Bedrooms</label>
                <select>
                    {Bedrooms.map((option,index) => (
                        <option key={index}>{option}</option>
                    ))}
                </select>
                </div>
                <div className="form-group">
                <label>Baths</label>
                <select>
                    {Baths.map((option,index) => (
                        <option key={index}>{option}</option>
                    ))}
                </select>
                </div>
                <div className="form-group">
                <label>Min Price</label>
                <input className='inp-txt' type="text" />
                </div>
                <div className="form-group">
                <label>Max Price</label>
                <input className='inp-txt' type="text" />
                </div>
            </div>

            <div className="button-wrapper">
                <button type="submit">Search Now</button>
            </div>
            </form>
        </div>
     </div>
    </div>
  )
}

export default SearchListings
