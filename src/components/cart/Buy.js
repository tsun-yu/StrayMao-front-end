import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import "../../styles/cart/buy.scss";
import BuyCardC from "./BuyCardC"
import BuyCardM from "./BuyCardM"
import { bindActionCreators } from "redux";
import { getBuy, getBuyAsync, changeBuyAsync, updateOrderAsync } 
from "../../actions/cart/index";
function Buy(props) {
    const [memberName, setMemberName] = useState(props.id[0].memberName)
    const [mobile, setMobile] = useState(props.id[0].mobile)
    const [address, setAddress] = useState(props.id[0].address)
    
    // const [total, setTotal] = useState(0);
    const [dataLoading, setDataLoading] = useState(true);
    const [display, setDisplay] = useState(<></>);

    const [total, setTotal] = useState(0)
    const [savedtotal, setSavedTotal] = useState(total)
    const [subTotal, setSubTotal] = useState(0)


    const content = [];
    let totalCards = props.id;
    console.log("????",totalCards)

    // const totalChange = ()=>{
    //     total=total+(props.id.price*props.id.quantity);
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
          console.log('props.id[0].cartId',props.id[0].cartId)
          console.log('props.id[0].quantity',props.id[0].quantity)
          console.log('subTotal+60',subTotal+60)
          console.log('memberName',memberName)
          console.log('mobile',mobile)
          console.log('address',address)
        props.updateOrderAsync([props.id[0].cartId,props.id[0].quantity,subTotal+60,memberName,mobile,address,'便利商店取貨','貨到付款',props.id[0].orderId])
      }
    
    useEffect(() => {
        // props.getBuyAsync()
        
    }, []);

    useEffect(() => {
        console.log("1 : ",total)
        console.log("2 : ",savedtotal)
        let newTotal ={...savedtotal,...total}
        setSavedTotal(newTotal);
        console.log("3 : ",newTotal)
    }, [total]);

    useEffect(() => {
        console.log('savedtotal',savedtotal)
        
        let temp = 0;
        for (let cartId in savedtotal) { 
            temp += +savedtotal[cartId]; 
        }
        setSubTotal(temp)
        
    }, [savedtotal]);


    useEffect(() => {
        setMemberName(props.id[0].memberName)
        setMobile(props.id[0].mobile)
        setAddress(props.id[0].address)
        totalCards = props.id;
        if (totalCards.length > 0 && props.id[0].memberName!=="") {
          // let tt = JSON.parse(totalCards[0]);
            
            for (let i = 0;i < totalCards.length;i++) {
                    if (totalCards.length > 0) {
                        content.push(<BuyCardC info={totalCards[i]} key={i} index={i} setTotal={(value)=>setTotal(value)}  />);
                    }
                }
                setDisplay(content)
        }

setTimeout(() => setDataLoading(false), 1000);
       
    },[props.id])
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
                    <span className="buyC_countPrice_An">小計：{subTotal} 元 + 運費：60元</span>
                </div>
                <div className="buyC_boxDownRight_An">
                    {/* <span className="buyC_totalPrice_An"  onChange={()=>totalChange()}>總計：{total} 元</span> */}
                    <span className="buyC_totalPrice_An">總計：{subTotal+60} 元</span>
                </div>
            </div>
            <div className="buyC_boxConsignee_An">
                <div>
                    <span>收件人姓名</span>
                    <input className="buyC_input-green_An" type="text" placeholder="123" value={memberName} onChange={(event)=>memberNameChange(event)}/>
                    {/* <input className="buyC_input-green_An" type="text" placeholder="123" value={props.id[0].memberName}/> */}
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
                            <input className="buyC_magic-radio_An" type="radio" name="radio1" id="r1" value="郵寄"/>
                            <label className="mb-0 pl-4" for="r1">郵寄</label>
                        </div>
                        <div className="buyC_opt_An mt-3 mb-0">
                            <input className="buyC_magic-radio_An" type="radio" name="radio1" id="r2" value="宅急便"/>
                            <label className="mb-0 pl-4" for="r2">宅急便</label>
                        </div>
                        <div className="buyC_opt_An mt-3 mb-0">
                            <input className="buyC_magic-radio_An" type="radio" name="radio1" id="r3" value="便利商店取貨"/>
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
                            <input className="buyC_magic-radio_An" type="radio" name="radio2" id="r4" value="信用卡"/>
                            <label className="mb-0 pl-4" for="r4">信用卡</label>
                        </div>
                        <div className="buyC_opt_An mt-3 mb-0">
                            <input className="buyC_magic-radio_An" type="radio" name="radio2" id="r5" value="ATM"/>
                            <label className="mb-0 pl-4" for="r5">ATM</label>
                        </div>
                        <div className="buyC_opt_An mt-3 mb-0">
                            <input className="buyC_magic-radio_An" type="radio" name="radio2" id="r6" value="貨到付款"/>
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
                <span className="buyM_countPrice_An">小計：{subTotal} 元 + 運費：40元</span>
                <span className="buyM_totalPrice_An">總計：{subTotal+40} 元</span>
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
    return { info: store.cartReducer.getBuy,
        id: store.cartReducer.getOrderId };
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