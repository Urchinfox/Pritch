import PropTypes from 'prop-types';

export default function DeleteModal({ close, txt, handleDelete, id }) {
  return (
    <div
      className='modal fade'
      tabIndex='-1'
      id="deleteModal"
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header bg-danger'>
            <h1 className='modal-title text-white fs-5' id='exampleModalLabel'>
              Delete Confirmation
            </h1>
            <button
              type='button'
              className='btn-close'
              onClick={close}
            />
          </div>
          <div className='modal-body'>Are you sure to delete {txt}</div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' onClick={close}>
              Cancel
            </button>
            <button type='button' className='btn btn-danger' onClick={() => handleDelete(id)}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


DeleteModal.propTypes = {
  close: PropTypes.func,
  txt: PropTypes.string,
  handleDelete: PropTypes.func,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
};