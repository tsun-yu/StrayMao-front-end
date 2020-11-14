// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { getDetailAsync } from "../../actions/store/index";
// import { withRouter, useHistory } from "react-router-dom";
// function StoreBigBtn(props) {
//   return (
//     <>
//       <article id="bigBtn" className="d-flex">
//         <a href="#"
//           onClick={() => {
//             props.petDetailId(props.info.petId);
//             props.history.push("/adoptiondetail");
//           }}>
//           <button
//             className="storeP1Btn"
//             id="newsBigBtn"
//             type="button"
//             value="News"
//           >
//             News
//           </button>
//         </a>
//         <button
//           className="storeP1Btn"
//           id="catBigBtn"
//           type="button"
//           value="Cats"
//         >
//           Cat
//         </button>
//         <button
//           className="storeP1Btn"
//           id="dogBigBtn"
//           type="button"
//           value="Dogs"
//         >
//           Dog
//         </button>
//       </article>
//     </>
//   );
// }

// const mapStateToProps = (store) => {
//   return {
//     detailId: store.adoptReducer.petDetailId,
//   };
// };
// const mapDispatchToProps = null;

// export default withRouter(
//   connect(mapStateToProps, {
//     petDetailId,
//   })(StoreBigBtn)
// );
