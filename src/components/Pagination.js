import React from 'react'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {

 const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div className="list-btn">
        <nav>
        <ul>
          {
              pageNumber.map((buttonNumber) => (
                <li key ={ buttonNumber} className="pageItem">
                    <a href="#" className="pageLink" onClick={() => paginate(buttonNumber)}>
                        {buttonNumber}
                    </a>
                </li>
              ))
          }
          </ul>
          </nav>
        </div>
    )
}

export default Pagination
