import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const Pagination = () => {

  const {page,handlerPageChange,totalPages} = useContext(AppContext);
  return (
    <div>
    <div>
      { page > 1 &&
       (
        <button onClick={() => handlerPageChange(page-1)}>
        Previous
      </button>
       )
      }
      { page < totalPages &&
        (
          <button onClick={() => handlerPageChange(page+1)}>
          Next
        </button>
        )
      }

      <p>
        Page {page} of {totalPages}
      </p>
    </div>
    </div>
  )
}

export default Pagination
