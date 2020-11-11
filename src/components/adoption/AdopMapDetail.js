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
      {props.info.pinName == null ? (
        ''
      ) : (
        <div className="adopMapDetail  align-items-center d-flex flex-column py-3 ">
          <div className="adopMapDetailTitle d-flex justify-content-center my-2">
            {props.info.pinName == null ? 't4est' : props.info.pinName}
            {/* {props.info.pinName} */}
          </div>

          <div className="adopMapDetailPic d-flex justify-content-center my-2">
            <img src={props.info.pic} alt={props.info.pinName} />
          </div>
          <div className="adopMapDetailInfo  d-flex flex-column ">
            <div className="adopMapDetailAddr d-flex flex-row no-gutters  my-2">
              <div className=" align-items-center justify-content-center d-flex col-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                >
                  <path
                    id="Path_1700"
                    data-name="Path 1700"
                    d="M24.715,11.809,13.192.286a.977.977,0,0,0-1.381,0L.287,11.809A.977.977,0,0,0,.593,13.4L3.45,14.622l.459,9.449A.976.976,0,0,0,4.884,25H20.118a.977.977,0,0,0,.975-.929l.459-9.449L24.409,13.4A.977.977,0,0,0,24.715,11.809ZM14.576,23.047h-4.15V17.383h4.15Zm5.646-9.98a.976.976,0,0,0-.591.85l-.443,9.129H16.529V16.406a.977.977,0,0,0-.977-.977h-6.1a.977.977,0,0,0-.977.977v6.641H5.814l-.443-9.129a.976.976,0,0,0-.591-.85l-2.092-.9L12.5,2.357l9.813,9.813Z"
                    transform="translate(-0.001 0)"
                    fill="#cb997e"
                  />
                </svg>
              </div>
              <div className=" col-9 align-items-center  d-flex ">
                {props.info.address}
              </div>
            </div>
            <div className="adopMapDetailTime  d-flex flex-row no-gutters  my-2">
              <div className=" align-items-center justify-content-center d-flex col-3">
                <svg
                  id="_167-wall-clock"
                  data-name="167-wall-clock"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.167"
                  height="25.167"
                  viewBox="0 0 25.167 25.167"
                >
                  <g id="Group_1046" data-name="Group 1046">
                    <g id="Group_1045" data-name="Group 1045">
                      <path
                        id="Path_1701"
                        data-name="Path 1701"
                        d="M21.481,3.686a12.584,12.584,0,0,0-17.8,17.8,12.588,12.588,0,0,0,15.409,1.872.983.983,0,1,0-1.019-1.682,10.712,10.712,0,1,1,3.325-3.2.983.983,0,0,0,1.635,1.093A12.553,12.553,0,0,0,21.481,3.686Z"
                        fill="#cb997e"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_1048"
                    data-name="Group 1048"
                    transform="translate(7.708 3.736)"
                  >
                    <g id="Group_1047" data-name="Group 1047">
                      <path
                        id="Path_1702"
                        data-name="Path 1702"
                        d="M161.68,76a.983.983,0,0,0-.983.983v7.457l-3.6,3.6a.983.983,0,1,0,1.39,1.39l3.893-3.893a.983.983,0,0,0,.288-.7V76.983A.983.983,0,0,0,161.68,76Z"
                        transform="translate(-156.804 -76)"
                        fill="#cb997e"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className=" col-6  align-items-center  d-flex">
                {props.info.businessHours}
              </div>
            </div>
            <div className="adopMapDetailPhone  d-flex flex-row no-gutters  my-2">
              <div className=" align-items-center justify-content-center d-flex col-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                >
                  <g
                    id="_136-phone-call"
                    data-name="136-phone-call"
                    transform="translate(0 -0.002)"
                  >
                    <g
                      id="Group_1049"
                      data-name="Group 1049"
                      transform="translate(0 0.002)"
                    >
                      <path
                        id="Path_1703"
                        data-name="Path 1703"
                        d="M25,20.146A3.7,3.7,0,0,0,23.864,17.6a9.083,9.083,0,0,0-3.6-2.389,4.025,4.025,0,0,0-4.133,1.173l-.006.006-1.32,1.31a19.786,19.786,0,0,1-4.163-3.22l-.129-.128A19.788,19.788,0,0,1,7.3,10.193l1.311-1.32.006-.006A4.025,4.025,0,0,0,9.786,4.734,9.083,9.083,0,0,0,7.4,1.138,3.716,3.716,0,0,0,2.24.952L2.212.977l-.038.036A7.924,7.924,0,0,0,0,6.817C.02,10.832,2.227,15.423,5.9,19.1a23.8,23.8,0,0,0,2.341,2.039.977.977,0,0,0,1.188-1.55,21.867,21.867,0,0,1-2.149-1.87c-3.32-3.32-5.313-7.4-5.33-10.91a6.033,6.033,0,0,1,1.584-4.4l.007-.007a1.757,1.757,0,0,1,2.447.088C8.519,5.116,8.336,6.354,7.219,7.5L5.409,9.323a.977.977,0,0,0-.2,1.085,19.733,19.733,0,0,0,3.927,5.329l.129.128a19.73,19.73,0,0,0,5.328,3.926.976.976,0,0,0,1.085-.2l1.824-1.81c1.146-1.117,2.384-1.3,5.005,1.228a1.757,1.757,0,0,1,.088,2.447l-.007.008a6.015,6.015,0,0,1-4.351,1.584h-.045a12.663,12.663,0,0,1-4.819-1.141A.977.977,0,0,0,12.6,23.7,14.407,14.407,0,0,0,18.184,25h.055a7.906,7.906,0,0,0,5.749-2.173l.036-.038.025-.028A3.7,3.7,0,0,0,25,20.146Z"
                        transform="translate(0 -0.002)"
                        fill="#cb997e"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className=" col-9  align-items-center d-flex ">
                {props.info.phone}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopMapDetail);
