
import { useSelector } from "react-redux";


function Message() {
    const messages = useSelector((state)=> state.toastMsg)

    return (<>
      <div
        className='toast-container position-fixed'
        style={{ top: '50px', right: '15px' }}
      >
        {
            messages?.map((msg)=>{
            return (<React.Fragment key={msg.id}>
              <div
                className='toast show'
                role='alert'
                aria-live='assertive'
                aria-atomic='true'
                data-delay='3000'
              >
                <div className={`toast-header text-white bg-${msg.type}`}>
                  <strong className='me-auto'>{msg.title}</strong>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='toast'
                    aria-label='Close'
                  />
                </div>
                <div className='toast-body'>{msg.txt}</div>
              </div>
            </React.Fragment>)
          })
        }
    


      </div>
      </>);
  }
  
  export default Message;


