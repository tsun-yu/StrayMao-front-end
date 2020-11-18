import React, { useState, useEffect } from 'react'
import "../../styles/cart/orderlist.scss";

function PetArea1_card(props) {
  let info = props.info;

return(
<>
  <div className="col petCard">
      <img className="petImg" src={"." + info.pic} alt="pet image" />
      <div className="petDetail">
      <a className="aStyle" href={"/petPage/" + info.petId }>詳細資訊</a>
      </div>
  </div>
</>
)}

export default PetArea1_card