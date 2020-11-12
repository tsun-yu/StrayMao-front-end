/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import {
  petDisLikeAsync,
  petLikeAsync,
  petInitLikeAsync,
  petDetailId,
} from '../../actions/adoption/index';
function AdoptListCard(props) {
  const [likeIcon, setLikeIcon] = useState(<></>);
  const [likeBtn, setBtn] = useState(<></>);

  useEffect(() => {
    setLikeIcon(
      props.info.heart ? (
        <svg className="icon-003-heart">
          <path d="M23.13,9.68l-.68-5.56a.93.93,0,0,0-.35-.61L17.77.19a.89.89,0,0,0-1-.06L11.57,3.28,6.38.13a.91.91,0,0,0-1,.06L1,3.51a.93.93,0,0,0-.35.61L0,9.68a.91.91,0,0,0,.31.8l10.67,9a.91.91,0,0,0,1.16,0l10.66-9A.94.94,0,0,0,23.13,9.68Z"></path>
        </svg>
      ) : (
        <svg className="icon-002-heart">
          <path d="M23.13,9.68l-.68-5.56a.93.93,0,0,0-.35-.61L17.77.19a.89.89,0,0,0-1-.06L11.57,3.28,6.38.13a.91.91,0,0,0-1,.06L1,3.51a.93.93,0,0,0-.35.61L0,9.68a.91.91,0,0,0,.31.8l10.67,9a.91.91,0,0,0,1.16,0l10.66-9A.94.94,0,0,0,23.13,9.68ZM11.57,17.57,1.86,9.41l.57-4.69L6,2,11.1,5.11a.93.93,0,0,0,.94,0L17.16,2,20.7,4.72l.57,4.69Z"></path>
        </svg>
      )
    );
  }, []);

  return (
    <>
      <div className=" adoptListCard mx-3">
        <div className="icon d-flex">
          <a
            href="##"
            className="buttonRight col"
            onClick={() => {
              if (props.info.heart) {
                props.petDisLikeAsync(props.info.petId);
                props.info.heart = false;
                setLikeIcon(
                  <svg className="icon-002-heart">
                    <path d="M23.13,9.68l-.68-5.56a.93.93,0,0,0-.35-.61L17.77.19a.89.89,0,0,0-1-.06L11.57,3.28,6.38.13a.91.91,0,0,0-1,.06L1,3.51a.93.93,0,0,0-.35.61L0,9.68a.91.91,0,0,0,.31.8l10.67,9a.91.91,0,0,0,1.16,0l10.66-9A.94.94,0,0,0,23.13,9.68ZM11.57,17.57,1.86,9.41l.57-4.69L6,2,11.1,5.11a.93.93,0,0,0,.94,0L17.16,2,20.7,4.72l.57,4.69Z"></path>
                  </svg>
                );
                console.log('dislike!!!');

                // document
                //   .querySelector('.animateHeart>svg')
                //   .classList.remove('gogo');
              } else {
                props.petLikeAsync(props.info.petId);
                props.info.heart = true;
                setLikeIcon(
                  <svg className="icon-003-heart">
                    <path d="M23.13,9.68l-.68-5.56a.93.93,0,0,0-.35-.61L17.77.19a.89.89,0,0,0-1-.06L11.57,3.28,6.38.13a.91.91,0,0,0-1,.06L1,3.51a.93.93,0,0,0-.35.61L0,9.68a.91.91,0,0,0,.31.8l10.67,9a.91.91,0,0,0,1.16,0l10.66-9A.94.94,0,0,0,23.13,9.68Z"></path>
                  </svg>
                );
                console.log('like!!!');
                document
                  .querySelector('.animateHeart>svg')
                  .classList.add('gogo');
                setTimeout(() => {
                  document
                    .querySelector('.animateHeart>svg')
                    .classList.remove('gogo');
                }, 1000);
              }
            }}
          >
            {likeIcon}
          </a>
        </div>

        <div className="img adoptListCardImg">
          <img
            src={
              props.info.pic === null
                ? '/image/adoption/main-01.jpg'
                : props.info.pic
            }
            alt="鮮肉煲罐頭"
          />
        </div>

        <div className="d-flex flex-column adopListInfo px-3 py-1">
          <p className="paragraph1">
            <span className="paragraph1">{props.info.name}</span>
            <span className="caption ml-2"> {props.info.birth}</span>
          </p>
          <div className="d-flex justify-content-between">
            <span className="caption">{[...props.info.tag].join(',')} </span>

            <a
              className="paragraph2 adopListReadMore"
              onClick={() => {
                props.petDetailId(props.info.petId);
                props.history.push('/adoptiondetail');
              }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return {
    like: store.adoptReducer.petHeart,
    detailId: store.adoptReducer.petDetailId,
  };
};
const mapDispatchToProps = null;

export default withRouter(
  connect(mapStateToProps, {
    petDisLikeAsync,
    petLikeAsync,
    petInitLikeAsync,
    petDetailId,
  })(AdoptListCard)
);
