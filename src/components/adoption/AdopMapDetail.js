import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
function AdopMapDetail(props) {
  const [title, setTitle] = useState('');
  // useEffect(() => {
  //   console.log(':', props.info);
  //   if (props.info.text !== '') {
  //     setTitle(props.info.text);
  //   }
  // }, [props.info]);
  return (
    <>
      <div className="adopMapDetail ">
        <h5>{props.info.pinName}</h5>
        {/* <div className="adopMapDetailTitle d-flex justify-content-center">
        </div> */}

        <div className="adopMapDetailPic d-flex justify-content-center">
          <img src={props.info.pic} alt={props.info.pinName} />
        </div>
        <div className="adopMapDetailInfo  d-flex flex-column ">
          <div className="adopMapDetailAddr ">{props.info.address}</div>
          <div className="adopMapDetailTime ">{props.info.businessHours}</div>
          <div className="adopMapDetailPhone ">{props.info.phone}</div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopMapDetail);
