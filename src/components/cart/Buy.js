import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import "../../styles/cart/buy.scss";
import BuyCardC from "./BuyCardC"
import BuyCardM from "./BuyCardM"
import { bindActionCreators } from "redux";
import { getBuy, getBuyAsync, changeBuyAsync, updateOrderAsync } 
from "../../actions/cart/index";
function Buy(props) {
    const [memberName, setMemberName] = useState(props.info[0].memberName)
    const [mobile, setMobile] = useState(props.info[0].mobile)
    const [address, setAddress] = useState(props.info[0].address)
    
    // const [total, setTotal] = useState(0);
    const [dataLoading, setDataLoading] = useState(true);
    const [display, setDisplay] = useState(<></>);
    const content = [];
    let totalCards = props.info;

    // const totalChange = ()=>{
    //     total=total+(props.info.price*props.info.quantity);
    //     setTotal(total)
    //     props.changeBuyAsync(storeInfo)
    //   }

    const memberNameChange = (event)=>{
        setMemberName(event.target.value);
      }
      const mobileChange = (event)=>{
        setMobile(event.target.value);
      }
      const addressChange = (event)=>{
        setAddress(event.target.value);
      }

      const btnBuyClick = ()=>{
        props.updateOrderAsync(props.info)
      }
    
    useEffect(() => {
        props.getBuyAsync()
        
        // console.log("info2: ",props.info[0].name)
    }, []);
    useEffect(() => {
        setMemberName(props.info[0].memberName)
        setMobile(props.info[0].mobile)
        setAddress(props.info[0].address)
        totalCards = props.info;
        // console.log("totalcards:",totalCards)
        if (totalCards.length > 0) {
          // let tt = JSON.parse(totalCards[0]);
          // console.log("totalCards: ", totalCards[0]);
        }
        for (
                let i = 0;
                i < totalCards.length;
                i++
            ) {
                if (totalCards.length > 0) {
                    // console.log(":",totalCards[i]);
                    content.push(<BuyCardC info={totalCards[i]} key={i} index={i} />);
                }
            }
            setDisplay(content)


setTimeout(() => setDataLoading(false), 1000);
        // console.log("content:",content)
    },[props.info])
    const loading = <div></div>;

  // 以資料載入的指示狀態來切換要出現的畫面
//   return dataLoading ? loading : display;
  return (
    <>
    <div className="buyC_body_An">
        <div className="container buyC_box_An">
            <div className="buyC_boxBottom_An">
                {/* <BuyCardC /> */}
                {display}
            </div>
            <div className="buyC_boxDown_An d-flex justify-content-between">
                <div className="buyC_boxDownLeft_An">
                    <span className="buyC_countPrice_An">小計：2790 元 + 運費：40元</span>
                </div>
                <div className="buyC_boxDownRight_An">
                    {/* <span className="buyC_totalPrice_An"  onChange={()=>totalChange()}>總計：{total} 元</span> */}
                    <span className="buyC_totalPrice_An">總計：20000 元</span>
                </div>
            </div>
            <div className="buyC_boxConsignee_An">
                <div>
                    <span>收件人姓名</span>
                    <input className="buyC_input-green_An" type="text" placeholder="123" value={memberName} onChange={(event)=>memberNameChange(event)}/>
                    {/* <input className="buyC_input-green_An" type="text" placeholder="123" value={props.info[0].memberName}/> */}
                </div>
                <div>
                    <span>連絡電話</span>
                    <input className="buyC_input-green_An" type="text" placeholder="123" value={mobile} onChange={(event)=>mobileChange(event)}/>
                </div>
            </div>
            <div className="buyC_boxAddress_An">
                <div>
                    <span>取貨方式</span>
                    <div className="d-flex mx-0 my-0">
                        <div className="buyC_opt_An ml-0 mt-3 mb-0">
                            <input className="buyC_magic-radio_An" type="radio" name="radio1" id="r1" value="option1"/>
                            <label className="mb-0 pl-4" for="r1">郵寄</label>
                        </div>
                        <div className="buyC_opt_An mt-3 mb-0">
                            <input className="buyC_magic-radio_An" type="radio" name="radio1" id="r2" value="option2"/>
                            <label className="mb-0 pl-4" for="r2">宅急便</label>
                        </div>
                        <div className="buyC_opt_An mt-3 mb-0">
                            <input className="buyC_magic-radio_An" type="radio" name="radio1" id="r3" value="option3"/>
                            <label className="mb-0 pl-4" for="r3">便利商店取貨</label>
                        </div>
                    </div>
                </div>
                <div>
                    <span>地址</span>
                    <input className="buyC_input-green_An" type="text" placeholder="123" value={address} onChange={(event)=>addressChange(event)}/>
                </div>
            </div>
            <div className="buyC_boxAddress_An">
                <div>
                    <span>付款方式</span>
                    <div className="d-flex mx-0 my-0">
                        <div className="buyC_opt_An ml-0 mt-3 mb-0">
                            <input className="buyC_magic-radio_An" type="radio" name="radio2" id="r4" value="option4"/>
                            <label className="mb-0 pl-4" for="r4">信用卡</label>
                        </div>
                        <div className="buyC_opt_An mt-3 mb-0">
                            <input className="buyC_magic-radio_An" type="radio" name="radio2" id="r5" value="option5"/>
                            <label className="mb-0 pl-4" for="r5">ATM</label>
                        </div>
                        <div className="buyC_opt_An mt-3 mb-0">
                            <input className="buyC_magic-radio_An" type="radio" name="radio2" id="r6" value="option6"/>
                            <label className="mb-0 pl-4" for="r6">貨到付款</label>
                        </div>
                    </div>
                </div>
            </div>
    
            <button className="buyC_btn-green_An" type="button" value="123" onClick={() => btnBuyClick()}>購買</button>
        </div>
    </div>
    
    <div className="buyM_body_An">
        <div className="buyM_box_An">
            <div className="buyM_boxBottom_An">
                <BuyCardM />
            </div>
            <div className="buyM_boxDown_An d-flex flex-column">
                <span className="buyM_countPrice_An">小計：2790 元 + 運費：40元</span>
                <span className="buyM_totalPrice_An">總計：2790 元</span>
            </div>
            <div className="buyM_boxConsignee_An">
                <div>
                    <span c>收件人姓名</span>
                    <input className="buyM_input-green_An" type="text" placeholder="123"/>
                </div>
                <div>
                    <span>連絡電話</span>
                    <input className="buyM_input-green_An" type="text" placeholder="123"/>
                </div>
            </div>
            <div className="buyM_boxAddress_An">
                <div>
                    <span>取貨方式</span>
                    <div className="d-flex mx-0 my-0">
                        <div className="buyM_opt_An mx-0 mt-3 mb-0">
                            <input className="buyM_magic-radio_An" type="radio" name="radio1" id="r1" value="option1"/>
                            <label className="mb-0 pl-4" for="r1">郵寄</label>
                        </div>
                        <div className="buyM_opt_An mt-3 mb-0">
                            <input className="buyM_magic-radio_An" type="radio" name="radio1" id="r2" value="option2"/>
                            <label className="mb-0 pl-4" for="r2">宅急便</label>
                        </div>
                        <div className="buyM_opt_An mx-0 mt-3 mb-0">
                            <input className="buyM_magic-radio_An" type="radio" name="radio1" id="r3" value="option3"/>
                            <label className="mb-0 pl-4" for="r3">便利商店取貨</label>
                        </div>
                    </div>
                </div>
                <div>
                    <span>地址</span>
                    <input className="buyM_input-green_An" type="text" placeholder="123"/>
                </div>
            </div>
            <div className="buyM_boxAddress_An">
                <div>
                    <span>付款方式</span>
                    <div className="d-flex mx-0 my-0">
                        <div className="buyM_opt_An mx-0 mt-3 mb-0">
                            <input className="buyM_magic-radio_An" type="radio" name="radio2" id="r4" value="option4"/>
                            <label className="mb-0 pl-4" for="r4">信用卡</label>
                        </div>
                        <div className="buyM_opt_An mt-3 mb-0">
                            <input className="buyM_magic-radio_An" type="radio" name="radio2" id="r5" value="option5"/>
                            <label className="mb-0 pl-4" for="r5">ATM</label>
                        </div>
                        <div className="buyM_opt_An mx-0 mt-3 mb-0">
                            <input className="buyM_magic-radio_An" type="radio" name="radio2" id="r6" value="option6"/>
                            <label className="mb-0 pl-4" for="r6">貨到付款</label>
                        </div>
                    </div>
                </div>
            </div>
    
            <button className="buyM_btn-green_An" type="button" value="123">購買</button>
        </div>
    </div>
    </>
    );
}

const mapStateToProps = (store) => {
    return { info: store.cartReducer.getBuy };
  };

  const mapDispatchToProps = dispatch =>{
    return bindActionCreators(
      {
        getBuy, getBuyAsync, changeBuyAsync, updateOrderAsync
      },
      dispatch
    )
  };

export default  connect(
    mapStateToProps,mapDispatchToProps)(Buy)

// export default Buy