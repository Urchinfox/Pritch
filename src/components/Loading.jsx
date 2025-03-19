import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import PropTypes from 'prop-types';


function Loading({ isLoading }) {
  return (<>
    {isLoading && (
      <div style={{
        textAlign: "center",
        marginTop: "0",
        backgroundColor: 'rgba(0,0,0,.5)',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(3px)',

      }}>
        <div style={{ marginTop: "20px" }}>
          <ClimbingBoxLoader color='#36d7b7' size={15} />
        </div>
      </div>
    )}

  </>);
}

export default Loading;

Loading.propTypes = {
  isLoading: PropTypes.bool
};
