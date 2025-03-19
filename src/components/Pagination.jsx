import PropTypes from 'prop-types';

export default function Pagination({ pagination, getProduct, getOrder, type }) {
  return (
    <nav >
      <ul className='pagination justify-content-center'>
        <li className='page-item'>
          <a className={`page-link ${!pagination?.has_pre ? 'disabled' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              type === 'orderPage' ? getOrder(pagination.current_page - 1) : getProduct(pagination.current_page - 1)
            }}
            href='/' aria-label='Previous'>
            <span aria-hidden='true'>&laquo;</span>
          </a>
        </li>
        {[...new Array(pagination?.total_pages)].map((_, i) => (
          <li className='page-item' key={`${i}_page`}>
            <a className={`page-link ${i + 1 === pagination?.current_page && 'active'}`} href='/'
              onClick={(e) => {
                e.preventDefault()
                type === 'orderPage' ? getOrder(i + 1) : getProduct(i + 1)
              }
              }
            >
              {i + 1}
            </a>
          </li>
        ))}
        <li className='page-item'>
          <a className={`page-link ${!pagination?.has_next ? 'disabled' : ''}`}
            href='/' aria-label='Next'
            onClick={(e) => {
              e.preventDefault();
              type === 'orderPage' ? getOrder(pagination?.current_page + 1) : getProduct(pagination?.current_page + 1)

            }}

          >
            <span aria-hidden='true'>&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}


Pagination.propTypes = {
  pagination: PropTypes.shape({
    has_pre: PropTypes.bool,
    current_page: PropTypes.number,
    total_pages: PropTypes.number,
    has_next: PropTypes.bool,
  }),
  getProduct: PropTypes.func,
  getOrder: PropTypes.func,
  type: PropTypes.string,
};