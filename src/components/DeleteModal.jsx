export default function DeleteModal({close,txt,handleDelete,id}){
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
                  刪除確認 
                </h1>
                <button
                  type='button'
                  className='btn-close'
                  onClick={close}
                />
              </div>
              <div className='modal-body'>確定要刪除{txt}</div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' onClick={close}>
                  取消
                </button>
                <button type='button' className='btn btn-danger' onClick={()=>handleDelete(id)}>
                  確認刪除
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}