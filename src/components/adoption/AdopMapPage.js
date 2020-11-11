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
  const [info, setInfo] = useState({});
  const [info2, setInfo2] = useState({});

  const [dis, setDis] = useState();

  const loadDB = async () => {
    const url = 'http://localhost:3001/straymao/adoption/get_map';

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    });
    try {
      const response = await fetch(request);
      const data1 = await response.json();
      await setInfo(data1);
      // await console.log('::::', data1.data);
      // data會是一個物件值
      // console.log(data.data);
    } catch (error) {
      //setError(error)
    }
  };

  useEffect(() => {
    loadDB();
  }, []);
  useEffect(() => {
    console.log(':!!!', info.data);
  }, [info]);

  return (
    <>
      <div className="container">
        <div className="row mb-3 pt-1">
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
            <AdopMapMain
              detail={detail}
              kind={kind}
              setDetail={setDetail}
              data={info.data}
              setInfo2={setInfo2}
            />
          </div>
          <div className="col-4 mt-4">
            <AdopMapDetail detail={detail} info={info2} />
          </div>
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
