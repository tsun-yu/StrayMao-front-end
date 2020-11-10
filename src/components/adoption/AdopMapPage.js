import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AdopMapCheck from './AdopMapCheck';
import AdopMapMain from './AdopMapMain';
import AdopMapDetail from './AdopMapDetail';
import Try2 from './Try2';
import Try1 from './Try1';
let checkObj = {
  c1: false,
  c2: false,
  c3: false,
  c4: false,
  c5: false,
  c6: false,
};
function AdopMapPage(props) {
  const [kind, setKind] = useState(checkObj);
  const [detail, setDetail] = useState(0);
  const [dis, setDis] = useState();

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-2">
            {/* <Try2 detail={detail} setDetail={setDetail} setKind={setKind} /> */}
            <AdopMapCheck
              kind={kind}
              setKind={setKind}
              detail={detail}
              setDetail={setDetail}
            />
          </div>
          <div className="col-6">
            {/* <Try1 detail={detail} kind={kind} /> */}
            <AdopMapMain detail={detail} kind={kind} setDetail={setDetail} />
          </div>
          <div className="col-4">{/* <AdopMapDetail detail={detail} /> */}</div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopMapPage);
