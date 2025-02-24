import axios from "axios";
import { useEffect, useReducer } from "react";
import { Outlet } from "react-router-dom";
import Message from "../../components/Message";
import { useNavigate } from "react-router-dom";
import { initState, messageContext,messageReducer } from "../../store/MessageStore";

export default function Dashboard(){
    const reducer = useReducer(messageReducer,initState);
    const navigate = useNavigate();
    const logout = () =>{
        document.cookie = 'hexToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        navigate('/login')
    }
    const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
 
    axios.defaults.headers.common['Authorization'] = token;

    useEffect(()=>{
        if(!token){
            return navigate('/login')
        }
        (async()=>{
            try {
                await axios.post('/v2/api/user/check');
            } catch (error) {
                if(!error.response.data.success){
                    navigate('/login')
                }
                console.log(error)
            }
        })()

    },[navigate,token])
    


    return(<messageContext.Provider value={reducer}>
            <nav className='navbar navbar-expand-lg bg-dark'>
                <div className='container-fluid'>
                <h1 className='text-white mb-0'>Pritch 後台管理系統</h1>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' />
                </button>
                <div
                    className='collapse navbar-collapse justify-content-end'
                    id='navbarNav'
                >
                    <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <button type='button' className='btn btn-sm btn-light' onClick={logout}>
                        登出
                        </button>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>

            <Message />

            <div className="container ">
            <div className="row align-items-start mt-5">
            <div className="col-lg-4">
                <div className="nav flex-column nav-pills profile-control me-3" id="v-pills-tab">
                  <button className="text-start nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-products" type="button">所有商品</button>
                  <button className="text-start nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-orders" type="button">所有訂單</button>
                  <button className="text-start nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-comments" type="button">查看評論</button>
                  <button className="text-start nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-stylist" type="button">造型師預約</button>
                  <button className="text-start nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-members" type="button">所有會員</button>
                </div>
            </div>
    
            <div className="col-lg-8 mt-lg-0 mt-5">
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-products">
                
                    {token && <Outlet/>}

                  </div>
                  <div className="tab-pane fade" id="v-orders" >
                        <div>
                            <form action="">
                                <div className="">
                                    {/* <!-- Button trigger modal --> */}
                                        {/* <!-- Modal --> */}
                                        <div className="modal fade" id="statistic">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header border-0">
                                                    <h5 className="modal-title" id="exampleModalLabel">銷售統計</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="modal-body">
                                                            <div className="text-center">圓餅圖</div>
                                                            <div className="text-end">
                                                                <select className="">
                                                                    <option defaultValue={null}>分類</option>
                                                                    <option value="1">上衣</option>
                                                                    <option value="2">裙子</option>
                                                                    <option value="3">褲子</option>
                                                                  </select>
                                                            </div>
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                    <th scope="col"></th>
                                                                    <th scope="col">訂單</th>
                                                                    <th scope="col">狀態</th>
                                                                    <th scope="col">金額</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="align-middle">
                                                                    <td scope="row">
                                                                        {/* <!-- Button trigger modal --> */}
                                                                        <small><a href="#" className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#checkOrder">
                                                                            查看
                                                                        </a></small>
                                                                        {/* <!-- Modal --> */}
                                                                        <div className="modal fade">
                                                                            <div className="modal-dialog">
                                                                                <div className="modal-content">
                                                                                    <div className="modal-header border-0">
                                                                                    <h5 className="modal-title" id="exampleModalLabel">訂單編號：#001</h5>
                                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                                    </div>
                                                                                    <div className="modal-body">
                                                                                        <div className="modal-body">
                                                                                            <p>產品名稱：夢幻上衣 * 1</p>
                                                                                            <p>寄送地址：xx市 xx鄉 xx路 xx號 x樓</p>
                                                                                            <p>總計：1500$</p>
                                                                                            <p>付款方式：信用卡</p>
                                                                                            <p>狀態：已出貨</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="modal-footer border-0">
                                                                                        <button type="button" className="btn btn-primary">編輯</button>
                                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>#001</td>
                                                                    <td>已出貨</td>
                                                                    <td>1500$</td>
                                
                                                                    </tr>
                                                                    <tr className="align-middle">
                                                                    <td scope="row">
                                                                        {/* <!-- Button trigger modal --> */}
                                                                        <small><a href="#" className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#checkOrder2">
                                                                            查看
                                                                        </a></small>
                                                                        {/* <!-- Modal --> */}
                                                                        <div className="modal fade">
                                                                            <div className="modal-dialog">
                                                                                <div className="modal-content">
                                                                                    <div className="modal-header border-0">
                                                                                    <h5 className="modal-title" id="exampleModalLabel">訂單編號：#002</h5>
                                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                                    </div>
                                                                                    <div className="modal-body">
                                                                                        <p>產品名稱：迷人洋裝 * 1</p>
                                                                                        <p>寄送地址：xx市 xx鄉 xx路 xx號 x樓</p>
                                                                                        <p>總計：3000$</p>
                                                                                        <p>付款方式：信用卡</p>
                                                                                        <p>狀態：付款成功</p>
                                                                                    </div>
                                                                                    <div className="modal-footer border-0">
                                                                                        <button type="button" className="btn btn-primary">編輯</button>
                                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>#002</td>
                                                                    <td>付款成功</td>
                                                                    <td>3000$</td>
                                
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                                
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer border-0">
                                                        <button type="button" className="btn btn-primary">編輯</button>
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="d-lg-flex d-block justify-content-around align-items-center">
                                        <div>
                                            <select className="form-select form-select-sm me-lg-3 me-0 mb-lg-0 mb-3">
                                                <option defaultValue={null}>2024</option>
                                                <option value="2">2023</option>
                                                <option value="3">2022</option>
                                              </select>
                                        </div>
                                        <div>
                                            <select className="form-select form-select-sm me-lg-3 me-0 mb-lg-0 mb-3 ">
                                              <option value="Mon" defaultValue={null}>選擇月份</option>
                                              <option value="1">Jan</option>
                                              <option value="2">Feb</option>
                                              <option value="3">Mar</option>
                                              <option value="4">Apr</option>
                                              <option value="5">May</option>
                                              <option value="6">Jun</option>
                                              <option value="7">Jul</option>
                                              <option value="8">Aug</option>
                                              <option value="9">Sep</option>
                                              <option value="10">Oct</option>
                                              <option value="11">Nov</option>
                                              <option value="12">Dec</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select className="form-select form-select-sm me-lg-3 me-0 mb-lg-0 mb-3 ">
                                              <option defaultValue={null}>選擇日期</option>
                                              <option value="1">1</option>
                                              <option value="2">2</option>
                                              <option value="3">3</option>
                                            </select>
                                        </div>
                                        <div>
                                            <input className="outline-0 w-100" type="search" placeholder="搜尋品項" />
                                        </div>
                                    </div>
                                    <div className="text-end mt-4">
                                        <button className="btn btn-primary btn-sm " type="button" data-bs-toggle="modal" data-bs-target="#statistic">銷售統計</button>
                                        <button type="button" className="btn btn-primary btn-sm">搜尋</button>
                                    </div>
                                </div>
                            </form>
    
                            <table className="table mt-5 mt-lg-0">
                                <thead>
                                  <tr>
                                    <th scope="col"></th>
                                    <th scope="col">訂單</th>
                                    <th scope="col">狀態</th>
                                    <th scope="col">金額</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="align-middle">
                                    <td scope="row">
                                        {/* <!-- Button trigger modal --> */}
                                        <small><a href="#" className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#checkOrder">
                                            查看
                                        </a></small>
                                        {/* <!-- Modal --> */}
                                        <div className="modal fade" id="checkOrder">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header border-0">
                                                    <h5 className="modal-title" id="exampleModalLabel">訂單編號：#001</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="modal-body">
                                                            <p>產品名稱：夢幻上衣 * 1</p>
                                                            <p>寄送地址：xx市 xx鄉 xx路 xx號 x樓</p>
                                                            <p>總計：1500$</p>
                                                            <p>付款方式：信用卡</p>
                                                            <p>狀態：已出貨</p>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer border-0">
                                                        <button type="button" className="btn btn-primary">編輯</button>
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>#001</td>
                                    <td>已出貨</td>
                                    <td>1500$</td>

                                  </tr>
                                  <tr className="align-middle">
                                    <td scope="row">
                                        {/* <!-- Button trigger modal --> */}
                                        <small><a href="#" className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#checkOrder2">
                                            查看
                                        </a></small>
                                        {/* <!-- Modal --> */}
                                        <div className="modal fade" id="checkOrder2">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header border-0">
                                                    <h5 className="modal-title" id="exampleModalLabel">訂單編號：#002</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>產品名稱：迷人洋裝 * 1</p>
                                                        <p>寄送地址：xx市 xx鄉 xx路 xx號 x樓</p>
                                                        <p>總計：3000$</p>
                                                        <p>付款方式：信用卡</p>
                                                        <p>狀態：付款成功</p>
                                                    </div>
                                                    <div className="modal-footer border-0">
                                                        <button type="button" className="btn btn-primary">編輯</button>
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>#002</td>
                                    <td>付款成功</td>
                                    <td>3000$</td>

                                  </tr>
                                </tbody>
                              </table>
                        </div>
                  </div>

                  <div className="tab-pane fade" id="v-comments">
                    <table className="table">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">使用者</th>
                            <th scope="col">留言資訊</th>
                            <th scope="col">商品編號</th>


                          </tr>
                        </thead>
                        <tbody>
                          <tr className="align-middle">
                            <td scope="row">
                                <div>
                                    <small><a href="#">回覆</a></small>
                                    {/* <!-- Button trigger modal --> */}
                                    <small><a className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#deleteComment">
                                        刪除
                                    </a></small>
                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="deleteComment">
                                        <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header border-0">
                                            <h5 className="modal-title" id="exampleModalLabel"><i className="bi bi-exclamation-triangle"></i></h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                            </div>
                                            <div className="modal-body">
                                            <p className="text-center">是否確定刪除此評論？</p>
                                            </div>
                                            <div className="modal-footer border-0">
                                                <button type="button" className="btn btn-primary">確定</button>
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating d-none">
                                    <textarea className="form-control" id="responseComment0001" style={{height: '100px'}}></textarea>
                                    <label htmlFor="responseComment0001">Comments</label>
                                  </div>
                            </td>
                            <td>Jamie</td>
                            <td>出貨很快速</td>
                            <td>0001</td>
                          </tr>
                          <tr className="align-middle">
                            <td scope="row">
                                <div>
                                    <small><a href="#">回覆</a></small>
                                    {/* <!-- Button trigger modal --> */}
                                    <small><a className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#deleteComment">
                                        刪除
                                    </a></small>
                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="deleteComment">
                                        <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header border-0">
                                            <h5 className="modal-title" id="exampleModalLabel"><i className="bi bi-exclamation-triangle"></i></h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                            </div>
                                            <div className="modal-body">
                                            <p className="text-center">是否確定刪除此評論？</p>
                                            </div>
                                            <div className="modal-footer border-0">
                                                <button type="button" className="btn btn-primary">確定</button>
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating d-none">
                                    <textarea className="form-control" id="responseComment0002" style={{height: '100px'}}></textarea>
                                    <label htmlFor="responseComment0002">Comments</label>
                                  </div>
                            </td>
                            <td>Kelly</td>
                            <td>品質很好</td>
                            <td>0002</td>
                          </tr>
          
                        </tbody>
                      </table>




                  </div>

                  <div className="tab-pane fade" id="v-stylist">
                    
                        <div>
                            <ul className="nav nav-pills mb-3 align-items-center" id="pills-tab">
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#reservation" type="button">所有預約(8)</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#stylist-list" type="button">所有造型師(3)</button>
                                </li>

                                <li className="ms-auto">
                                    {/* <!-- Button trigger modal --> */}
                                    <a className="d-block" type="button" data-bs-toggle="modal" data-bs-target="#addStylist0001">
                                        <u>新增造型師</u></a>
                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="addStylist0001">
                                        <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header border-0">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row row-cols-lg-2 row-cols-1">
                                                    <div className="col">
                                                        <img width="200" height="300" src="https://fakeimg.pl/200x300/" alt="..." />
                                                    </div>
                                                    <div className="col">
                                                        <div>
                                                            <div>
                                                                <label htmlFor="stylistName" className="form-label"></label>
                                                                <input type="text" className="form-control" id="stylistName" placeholder="姓名" />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="stylistTitle" className="form-label"></label>
                                                                <input type="text" className="form-control" id="stylistTitle" placeholder="副標題" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="stylistIntro" className="form-label"></label>
                                                                <textarea className="form-control" id="stylistIntro" rows="3"></textarea>
                                                            </div>
                                                          <div className="d-flex mb-3">
                                                                <div>
                                                                    <span className="badge bg-info text-dark">x 大膽創新</span>
                                                                    <span className="badge bg-info text-dark">x 國際獎項</span>
                                                                </div>
                                                                <div>
                                                                    <input type="text" className="form-control" id="addStylistBadge" />
                                                                </div>
                                                            </div>
                                                            <div className="text-end">
                                                                <button type="submit" className="btn-primary btn-sm btn">新增標籤</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer border-0">
                                                <button type="submit" className="btn btn-primary">完成</button>
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </li>
         
                            </ul>

                              <div className="tab-content overflow-scroll w-100" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="reservation">
                                    <table className="table text-center">
                                        <thead>
                                          <tr className="text-nowrap">
                                            <th scope="col">姓名</th>
                                            <th scope="col">電話</th>
                                            <th scope="col">設計師</th>
                                            <th scope="col">信箱</th>
                                            <th scope="col">日期</th>
                                            <th scope="col">狀態</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr className="align-middle">
                                            <td className="text-nowrap">王大哥</td>
                                            <td className="">0911-011111</td>
                                            <td className="text-nowrap">Daniel</td>
                                            <td className="">wang@gmail.com</td>
                                            <td className="">2/4/2024<br />10:00</td>
                                            <td className="text-nowrap">
                                                <div>
                                                    <select className="w-100">
                                                        <option defaultValue={null}>未安排</option>
                                                        <option value="1">已取消</option>
                                                        <option value="2">已完成</option>
                                                        <option value="3">已安排</option>
                                                    </select>
                                                    <div className="text-end">
                                                        <small><a className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#note">
                                                            查看備註
                                                        </a></small>                                                    
                                                        <div className="modal fade" id="note">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header border-0">
                                                                    <h5 className="modal-title" id="exampleModalLabel">備註內容</h5>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <p className="text-wrap">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque et dolor distinctio provident ullam qui, fugiat omnis, sint aliquam, suscipit dolorem! Veniam officiis temporibus nam, aliquid velit corporis quam reiciendis?</p>
                                                                    </div>
                                                                    <div className="modal-footer border-0">
                                                                        <button type="button" className="btn btn-primary">確定</button>
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
    
                                                        {/* <!-- Button trigger modal --> */}
                                                        <small><a className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#deleteNote">
                                                            刪除
                                                        </a></small>
                                                        {/* <!-- Modal --> */}
                                                        <div className="modal fade" id="deleteNote">
                                                            <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header border-0">
                                                                <h5 className="modal-title" id="exampleModalLabel"><i className="bi bi-exclamation-triangle"></i></h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                <p className="text-center">是否確定刪除此預約？</p>
                                                                </div>
                                                                <div className="modal-footer border-0">
                                                                    <button type="button" className="btn btn-primary">確定</button>
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                            
                                          </tr>
                           
                                        </tbody>
                                      </table>
                                </div>

                                <div className=" tab-pane fade stylist-list" id="stylist-list">
                                    <ul className="p-0">
                                        <li className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img className="me-3" width="50" height="50" src="https://fakeimg.pl/50x50/" alt="..." />
                                                <p>造型師：Brian</p>
                                            </div>
                                            <div>
                                                <div className="modal fade" id="checkStylist0001">
                                                    <div className="modal-dialog modal-dialog-centered">
                                                      <div className="modal-content">
                                                        <div className="modal-header border-0">
                                                          <h5 className="modal-title" id="exampleModalToggleLabel">Brian</h5>
                                                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="row row-cols-lg-2 row-cols-1">
                                                                <div className="col">
                                                                    <img width="200" height="300" src="https://fakeimg.pl/200x300/" alt="..." />
                                                                </div>
                                                                <div className="col">
                                                                    <div className="d-flex align-items-end">
                                                                        <h2 className="me-3">Brian</h2> 
                                                                        <small>造型總監</small>
                                                                    </div>
                                                                    <div className="mb-5">
                                                                        <span className="badge bg-info text-dark">大膽創新</span>
                                                                        <span className="badge bg-info text-dark">國際獎項</span>
                                                                        <span className="badge bg-info text-dark">前衛</span>
                                                                    </div>
                                                                    <p>
                                                                        以大膽創新的設計理念而聞名,擁有超過20年的時尚造型經驗。曾經獲得多個國際設計獎項,包括「2023年度造型師獎」。擅長將前衛的設計元素融入實穿的服裝中,他的作品經常被時尚界的權威刊物所推崇。
                                                                    </p>
                                                                </div>
                                                            </div>                                        
                                                        </div>
                                                        <div className="modal-footer border-0">
                                                          <button className="btn btn-primary" data-bs-target="#editStylist0001" data-bs-toggle="modal">編輯</button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="modal fade" id="editStylist0001">
                                                    <div className="modal-dialog modal-dialog-centered">
                                                      <div className="modal-content">
                                                        <div className="modal-header border-0">
                
                                                          <h5 className="modal-title"><a data-bs-toggle="modal" href="#checkStylist0001"><i className="bi bi-box-arrow-left"></i></a>
                                                            編輯造型師</h5>
                                                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="row row-cols-lg-2 row-cols-1">
                                                                <div className="col">
                                                                    <img width="200" height="300" src="https://fakeimg.pl/200x300/" alt="..." />
                                                                </div>
                                                                <div className="col">
                                                                    <div>
                                                                        <div>
                                                                            <label htmlFor="stylistName" className="form-label"></label>
                                                                            <input type="text" className="form-control" id="stylistName" placeholder="姓名" />
                                                                        </div>
                                                                        <div>
                                                                            <label htmlFor="stylistTitle" className="form-label"></label>
                                                                            <input type="text" className="form-control" id="stylistTitle" placeholder="副標題" />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor="stylistIntro" className="form-label"></label>
                                                                            <textarea className="form-control" id="stylistIntro" rows="3"></textarea>
                                                                        </div>
                                                                      <div className="d-flex mb-3">
                                                                            <div>
                                                                                <span className="badge bg-info text-dark">x 大膽創新</span>
                                                                                <span className="badge bg-info text-dark">x 國際獎項</span>
                                                                            </div>
                                                                            <div>
                                                                                <input type="text" className="form-control" id="addStylistBadge" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-end">
                                                                            <button type="submit" className="btn-primary btn-sm btn">新增標籤</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                
                                                            </div>
                
                
                                                        </div>
                                                        <div className="modal-footer border-0">
                                                          <button className="btn btn-sm btn-primary" type="submit">完成</button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <small><a data-bs-toggle="modal" href="#checkStylist0001"><u>查看</u></a></small>
                                 
                
                                                {/* <!-- Button trigger modal --> */}
                                                <small className="d-block"><a className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#deleteStylist0001">
                                                    刪除
                                                </a></small>
                                                {/* <!-- Modal --> */}
                                                <div className="modal fade" id="deleteStylist0001">
                                                    <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header border-0">
                                                        <h5 className="modal-title" id="exampleModalLabel"><i className="bi bi-exclamation-triangle"></i></h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                        <p className="text-center">是否確定刪除此造型師？</p>
                                                        </div>
                                                        <div className="modal-footer border-0">
                                                            <button type="button" className="btn btn-primary">確定</button>
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="d-flex justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img className="me-3" width="50" height="50" src="https://fakeimg.pl/50x50/" alt="..." />
                                                <p>造型師：Brian</p>
                                            </div>
                                            <div>
                                                <div className="modal fade" id="checkStylist0002">
                                                    <div className="modal-dialog modal-dialog-centered">
                                                      <div className="modal-content">
                                                        <div className="modal-header border-0">
                                                          <h5 className="modal-title" id="exampleModalToggleLabel">Brian</h5>
                                                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="row row-cols-lg-2 row-cols-1">
                                                                <div className="col">
                                                                    <img width="200" height="300" src="https://fakeimg.pl/200x300/" alt="..." />
                                                                </div>
                                                                <div className="col">
                                                                    <div className="d-flex align-items-end">
                                                                        <h2 className="me-3">Brian</h2> 
                                                                        <small>造型總監</small>
                                                                    </div>
                                                                    <div className="mb-5">
                                                                        <span className="badge bg-info text-dark">大膽創新</span>
                                                                        <span className="badge bg-info text-dark">國際獎項</span>
                                                                        <span className="badge bg-info text-dark">前衛</span>
                                                                    </div>
                                                                    <p>
                                                                        以大膽創新的設計理念而聞名,擁有超過20年的時尚造型經驗。曾經獲得多個國際設計獎項,包括「2023年度造型師獎」。擅長將前衛的設計元素融入實穿的服裝中,他的作品經常被時尚界的權威刊物所推崇。
                                                                    </p>
                                                                </div>
                                                            </div>                                        
                                                        </div>
                                                        <div className="modal-footer border-0">
                                                          <button className="btn btn-primary" data-bs-target="#editStylist0002" data-bs-toggle="modal">編輯</button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="modal fade" id="editStylist0002">
                                                    <div className="modal-dialog modal-dialog-centered">
                                                      <div className="modal-content">
                                                        <div className="modal-header border-0">
                
                                                          <h5 className="modal-title"><a data-bs-toggle="modal" href="#checkStylist0002"><i className="bi bi-box-arrow-left"></i></a>
                                                            編輯造型師</h5>
                                                          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="row row-cols-lg-2 row-cols-1">
                                                                <div className="col">
                                                                    <img width="200" height="300" src="https://fakeimg.pl/200x300/" alt="..." />
                                                                </div>
                                                                <div className="col">
                                                                    <div>
                                                                        <div>
                                                                            <label htmlFor="stylistName" className="form-label"></label>
                                                                            <input type="text" className="form-control" id="stylistName" placeholder="姓名" />
                                                                        </div>
                                                                        <div>
                                                                            <label htmlFor="stylistTitle" className="form-label"></label>
                                                                            <input type="text" className="form-control" id="stylistTitle" placeholder="副標題" />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label htmlFor="stylistIntro" className="form-label"></label>
                                                                            <textarea className="form-control" id="stylistIntro" rows="3"></textarea>
                                                                        </div>
                                                                      <div className="d-flex mb-3">
                                                                            <div> 
                                                                                <span className="badge bg-info text-dark">x 大膽創新</span>
                                                                                <span className="badge bg-info text-dark">x 國際獎項</span>
                                                                            </div>
                                                                            <div>
                                                                                <input type="text" className="form-control" id="addStylistBadge" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-end">
                                                                            <button type="submit" className="btn-primary btn-sm btn">新增標籤</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                
                                                            </div>
                
                
                                                        </div>
                                                        <div className="modal-footer border-0">
                                                          <button className="btn btn-primary btn-sm" type="submit">完成</button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <small><a data-bs-toggle="modal" href="#checkStylist0002"><u>查看</u></a></small>
                                 
                
                                                {/* <!-- Button trigger modal --> */}
                                                <small className="d-block"><a className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#deleteStylist0002">
                                                    刪除
                                                </a></small>
                                                {/* <!-- Modal --> */}
                                                <div className="modal fade" id="deleteStylist0002">
                                                    <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header border-0">
                                                        <h5 className="modal-title" id="exampleModalLabel"><i className="bi bi-exclamation-triangle"></i></h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                        <p className="text-center">是否確定刪除此造型師？</p>
                                                        </div>
                                                        <div className="modal-footer border-0">
                                                            <button type="button" className="btn btn-primary">確定</button>
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        
                                    </ul>

                                </div>
                              </div>
                
                        </div>

                    

                  </div>

                  <div className="tab-pane fade" id="v-members">
                    <table className="table mt-5 mt-lg-0 text-center">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">使用者名稱</th>
                            <th scope="col">聯絡電話</th>
                            <th scope="col">累積金額</th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr className="align-middle">
                            <td scope="row">
                                <div>
                                    {/* <!-- Button trigger modal --> */}
                                    <small className="d-block"><a href="#" className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#checkMember0001">
                                        查看
                                    </a></small>
                                    
                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="checkMember0001">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header border-0">
                                                <h5 className="modal-title" id="exampleModalLabel">使用者詳細資訊</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="modal-body">
                                                        <p>使用者姓名：王小明</p>
                                                        <p>聯絡電話：09xx-xxx-xxx</p>
                                                        <p>地址：xx市 xxx路 x樓</p>
                                                        <p>電子郵件：example@gmail.com</p>
                                                        <p>累計金額：5600$</p>
                                                    </div>
                                                </div>
                                                <div className="modal-footer border-0">
                                                <a href="edit-member.html" type="button" className="btn btn-primary">編輯</a>
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        {/* <!-- Button trigger modal --> */}
                                    <small className="d-block"><a className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#deleteMember0001">
                                        刪除
                                    </a></small>
                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="deleteMember0001">
                                        <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header border-0">
                                            <h5 className="modal-title" id="exampleModalLabel"><i className="bi bi-exclamation-triangle"></i></h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                            </div>
                                            <div className="modal-body">
                                            <p className="text-center">是否確定刪除此會員？</p>
                                            </div>
                                            <div className="modal-footer border-0">
                                                <button type="button" className="btn btn-primary">確定</button>
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>王小明</td>
                            <td>09xx-xxx-xxx</td>
                            <td>5600$</td>
                          </tr>
                          <tr className="align-middle">
                            <td scope="row">
                                <div>
                                    {/* <!-- Button trigger modal --> */}
                                    <small className="d-block"><a href="#" className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#checkMember0002">
                                        查看
                                    </a></small>
                                    
                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="checkMember0002">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header border-0">
                                                <h5 className="modal-title" id="exampleModalLabel">使用者詳細資訊</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="modal-body">
                                                        <p>使用者姓名：吳宗憲</p>
                                                        <p>聯絡電話：09xx-xxx-xxx</p>
                                                        <p>地址：xx市 xxx路 x樓</p>
                                                        <p>電子郵件：example@gmail.com</p>
                                                        <p>累計金額：300$</p>
                                                    </div>
                                                </div>
                                                <div className="modal-footer border-0">
                                                <a href="edit-member.html" type="button" className="btn btn-primary">編輯</a>
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        {/* <!-- Button trigger modal --> */}
                                    <small className="d-block"><a className="text-decoration" type="button" data-bs-toggle="modal" data-bs-target="#deleteMember0002">
                                        刪除
                                    </a></small>
                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="deleteMember0002">
                                        <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header border-0">
                                            <h5 className="modal-title" id="exampleModalLabel"><i className="bi bi-exclamation-triangle"></i></h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                            </div>
                                            <div className="modal-body">
                                            <p className="text-center">是否確定刪除此會員？</p>
                                            </div>
                                            <div className="modal-footer border-0">
                                                <button type="button" className="btn btn-primary">確定</button>
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>吳宗憲</td>
                            <td>09xx-xxx-xxx</td>
                            <td>600$</td>
                          </tr>
                        </tbody>
                      </table>

                  </div>

                </div>
            </div>
        </div>
    
            </div>
    
    
    </messageContext.Provider>)
}