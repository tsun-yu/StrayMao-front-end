import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
function AdopMapMain(props) {
  const loc = [
    { lat: 25.0310587, lng: 121.5418099 },
    { lat: 25.0322281, lng: 121.5443055 },
    { lat: 25.0330608, lng: 121.5444456 },
    { lat: 25.0313673, lng: 121.5431735 },
    { lat: 25.0325726, lng: 121.5443708 },
    { lat: 25.0339863, lng: 121.5449136 },
    { lat: 25.0354532, lng: 121.5423548 },
    { lat: 25.0333166, lng: 121.5416068 },
    { lat: 25.0319877, lng: 121.5431337 },
    { lat: 25.0354933, lng: 121.5428093 },
    { lat: 25.0321826, lng: 121.5426762 },
    { lat: 25.0352142, lng: 121.5438932 },
    { lat: 25.0330174, lng: 121.5447513 },
    { lat: 25.0352376, lng: 121.5441703 },
    { lat: 25.0314055, lng: 121.5435934 },
    { lat: 25.0338333, lng: 121.5421478 },
    { lat: 25.0311155, lng: 121.5432046 },
    { lat: 25.0327197, lng: 121.5443097 },
    { lat: 25.0322202, lng: 121.5434526 },
    { lat: 25.0317976, lng: 121.5428122 },
    { lat: 25.0332052, lng: 121.5433087 },
    { lat: 25.0310754, lng: 121.5438383 },
    { lat: 25.0348191, lng: 121.5438565 },
    { lat: 25.0343452, lng: 121.5431849 },
    { lat: 25.0313231, lng: 121.5436868 },
    { lat: 25.0307483, lng: 121.5443463 },
    { lat: 25.0330423, lng: 121.5419333 },
    { lat: 25.0322311, lng: 121.5420778 },
    { lat: 25.0339026, lng: 121.5448686 },
    { lat: 25.0318453, lng: 121.5439641 },
    { lat: 25.0308781, lng: 121.5423544 },
    { lat: 25.0347382, lng: 121.5436661 },
    { lat: 25.0308527, lng: 121.5436821 },
    { lat: 25.0345374, lng: 121.5441987 },
    { lat: 25.0343679, lng: 121.5434219 },
    { lat: 25.0340357, lng: 121.5426819 },
    { lat: 25.0348961, lng: 121.5444995 },
    { lat: 25.0329112, lng: 121.5423911 },
    { lat: 25.0350101, lng: 121.5418875 },
    { lat: 25.0326276, lng: 121.5428593 },
    { lat: 25.0326035, lng: 121.5446026 },
    { lat: 25.0346583, lng: 121.5418331 },
  ];
  let center = {
    lat: 25.0338947,
    lng: 121.5433796,
  };
  let zoom = 18;
  const AnyReactComponent = ({ icon }) => (
    <i className="fas fa-map-marker-alt fa-3x " onClick={() => {}}></i>
  );
  const AnyReactComponent1 = ({ icon }) => (
    <i
      className="fas fa-map-marker-alt fa-3x adopMapPin1"
      onClick={() => {}}
    ></i>
  );
  const AnyReactComponent2 = ({ icon }) => (
    <i
      className="fas fa-map-marker-alt fa-3x adopMapPin2"
      onClick={() => {}}
    ></i>
  );
  const AnyReactComponent3 = ({ icon }) => (
    <i
      className="fas fa-map-marker-alt fa-3x adopMapPin3"
      onClick={() => {}}
    ></i>
  );
  const AnyReactComponent4 = ({ icon }) => (
    <i
      className="fas fa-map-marker-alt fa-3x adopMapPin4"
      onClick={() => {}}
    ></i>
  );
  const AnyReactComponent5 = ({ icon }) => (
    <i
      className="fas fa-map-marker-alt fa-3x adopMapPin5"
      onClick={() => {}}
    ></i>
  );

  const content1 = [];
  const content2 = [];
  const content3 = [];
  const content4 = [];
  const content5 = [];
  for (let i = 0; i < 4; i++) {
    content1.push(
      <AnyReactComponent1
        lat={loc[i].lat}
        lng={loc[i].lng}
        text=""
        icon="/public/image/097-pin.png"
      />
    );
  }

  for (let i = 5; i < 9; i++) {
    content2.push(
      <AnyReactComponent2
        lat={loc[i].lat}
        lng={loc[i].lng}
        text=""
        icon="/public/image/097-pin.png"
      />
    );
  }

  for (let i = 10; i < 14; i++) {
    content3.push(
      <AnyReactComponent3
        lat={loc[i].lat}
        lng={loc[i].lng}
        text=""
        icon="/public/image/097-pin.png"
      />
    );
  }

  for (let i = 15; i < 19; i++) {
    content4.push(
      <AnyReactComponent4
        lat={loc[i].lat}
        lng={loc[i].lng}
        text=""
        icon="/public/image/097-pin.png"
      />
    );
  }

  for (let i = 20; i < 24; i++) {
    content5.push(
      <AnyReactComponent5
        lat={loc[i].lat}
        lng={loc[i].lng}
        text=""
        icon="/public/image/097-pin.png"
      />
    );
  }

  const c2Dis = props.kind.c2 ? content1 : <></>;
  const c3Dis = props.kind.c3 ? content2 : <></>;
  const c4Dis = props.kind.c4 ? content3 : <></>;
  const c5Dis = props.kind.c5 ? content4 : <></>;
  const c6Dis = props.kind.c6 ? content5 : <></>;

  return (
    <>
      <>
        {/* <h3>{props.detail}</h3>
        <h3>{JSON.stringify(props.kind)}</h3> */}
      </>
      <div className="adopMapMain">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCWnOR-EIX_CwsvHENq3idr__GJgZD1rbI' }}
          // bootstrapURLKeys={{ key: "AIzaSyC_Za7RqKvUuEg2Nln0EcpUVN3k2fZtDuE" }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={center.lat}
            lng={center.lng}
            text=""
            icon="/public/image/097-pin.png"
          />
          {c2Dis}
          {c3Dis}
          {c4Dis}
          {c5Dis}
          {c6Dis}
        </GoogleMapReact>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {};
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, {})(AdopMapMain);
