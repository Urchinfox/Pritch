import indexBanner from '../../assets/images/home/index-banner.jpeg';
import jumpsuit from '../../assets/images/home/jumpsuit.png';
import coat from '../../assets/images/home/coat.png';
import craftsmanship1 from '../../assets/images/home/craftsmanship-1.jpeg';
import craftsmanship2 from '../../assets/images/home/craftsmanship-2.png';
import Brian from '../../assets/images/stylist/Brian.png';
import Elena from '../../assets/images/stylist/Elena.png';
import Kate from '../../assets/images/stylist/Kate.png';
import Shen from '../../assets/images/stylist/Shen.png';
import belt from '../../assets/images/shop/belt.png';
import BIAcorset from '../../assets/images/shop/BIA-corset.png';
import corset from '../../assets/images/shop/corset.png';
import dress from '../../assets/images/shop/dress.png';
import sweatpants from '../../assets/images/shop/sweatpants.png';
import { useEffect, useRef,useState } from 'react';
import { NavLink } from 'react-router-dom';





export default function Home(){
    const stylistCardData = [
        {
            imgUrl :Brian,
            name : 'Brian',
            description: '以大膽創新的設計理念而聞名,擁有超過20年的時尚造型經驗。曾經獲得多個國際設計獎項,包括「2023年度造型師獎」。擅長將前衛的設計元素融入實穿的服裝中,他的作品經常被時尚界的權威刊物所推崇。',
        },
        {
            imgUrl: Kate ,
            name:'Kate',
            description:'擁有15年的專業經驗。她以其優雅的剪裁和細膩的手工藝著稱,曾為多位名人設計過紅毯造型。設計風格兼具現代感與古典美,作品經常在時尚展覽中亮相,受到業界廣泛讚譽。',
        },
        {
            imgUrl: Elena,
            name:'Elena',
            description:'以其獨特的創意和前瞻性的設計理念迅速崛起。儘管她的職業生涯僅有五年,但她已經在多個時尚比賽中獲得冠軍,包括「新銳造型師獎」。擅長使用創新的面料和獨特的剪裁技術,為客戶創造出令人驚豔的造型。',
        },
        {
            imgUrl: Shen,
            name:'Shen',
            description:'經驗豐富的造型師,擁有超過20年的行業經驗。他以其精緻的色彩搭配技術而聞名。曾經為知名品牌擔任首席造型師,並且在時尚界的各大活動中擔任評委。設計風格融合了東方元素與西方現代感,深受客戶喜愛。',
        },
    ]

    const featureData =[
        {
            imgUrl:craftsmanship1,
            title:'精細製作',
            description:'專業工匠根據獨特設計圖紙進行精確剪裁，確保每個細節完美對齊。使用傳統裁縫技術，精心縫合每一個接縫，確保服裝結構穩定且耐用。'
        },
        {
            imgUrl:craftsmanship2,
            title:'設計獨特',
            description:'不僅是時尚的象徵，更是設計創意與工藝技術的完美結合，讓每一件作品都成為獨一無二的藝術品。'
        },
        {
            imgUrl:craftsmanship2,
            title:'專屬訂製',
            description:'為送禮者提供專屬的定制服務，如根據對方的喜好和需求，製作獨特的服飾或配件，彰顯送禮的真誠與用心。'
        }

    ]

    const popularPictureArr = [
        {
            imgUrl:sweatpants,
            name : '飛行員運動褲',
            price: 69656,
            description: '飛行運動褲 是一款 Nappa 皮革雕塑，其半閃亮的紅色表面成為身體曲線的畫布。這款單品採用引人注目的緊身胸衣細節和奢華的絲綢襯裡，既是一件盔甲，又是一種誘惑，專為那些以泰然自若和力量掌控空間的人士而設計。',
            btnUrl:'#',
        },
        {
            imgUrl: BIAcorset,
            name : 'BIA 緊身胸衣',
            price: 32084,
            description: 'BIA 緊身胸衣 是一款 Nappa 皮革雕塑，其半閃亮的紅色表面成為身體曲線的畫布。這款單品採用引人注目的緊身胸衣細節和奢華的絲綢襯裡，既是一件盔甲，又是一種誘惑，專為那些以泰然自若和力量掌控空間的人士而設計。',
            btnUrl:'#',
    
        },    
        {
            imgUrl:corset,
            name : '復古飾面緊身胸衣',
            price: 97116,
            description: '復古飾面緊身胸衣 是一款 Nappa 皮革雕塑，其半閃亮的紅色表面成為身體曲線的畫布。這款單品採用引人注目的緊身胸衣細節和奢華的絲綢襯裡，既是一件盔甲，又是一種誘惑，專為那些以泰然自若和力量掌控空間的人士而設計。',
            btnUrl:'#',
    
        },
        {
            imgUrl:belt,
            name : '緊身胸衣腰帶',
            price: 10979,
            description: '緊身胸衣腰帶 是一款 Nappa 皮革雕塑，其半閃亮的紅色表面成為身體曲線的畫布。這款單品採用引人注目的緊身胸衣細節和奢華的絲綢襯裡，既是一件盔甲，又是一種誘惑，專為那些以泰然自若和力量掌控空間的人士而設計。',
            btnUrl:'bustier-belt.html',
    
        },    
        {
            imgUrl:dress,
            name : '絲綢垂墜連身裙',
            price: 65448,
            description: '絲綢垂墜連身裙 是一款 Nappa 皮革雕塑，其半閃亮的紅色表面成為身體曲線的畫布。這款單品採用引人注目的緊身胸衣細節和奢華的絲綢襯裡，既是一件盔甲，又是一種誘惑，專為那些以泰然自若和力量掌控空間的人士而設計。',
            btnUrl:'#',
        }
        
    ]

    const ulRef = useRef(null) ;
    const [currentLargePic, setCurrentLargePic] = useState(2); 
    const [move,setMove] = useState(0);

    const slideR = () =>{
        if(currentLargePic < 4){
            setCurrentLargePic((pre)=> pre +1)
            setMove((pre) => {
                const newMove = pre - 20;
                ulRef.current.style.transform = `translateX(${newMove}%)`; 
                return newMove;
            })
        }

    }
    const slideL = () =>{
        if(currentLargePic > 0){
            setCurrentLargePic((pre) => pre -1)
            setMove((pre) =>{
                const newMove = pre + 20;
                ulRef.current.style.transform = `translateX(${newMove}%)`; 
                return newMove;
            })
        }

    }



    return(<>
        <section className="banner position-relative">
      <div className="banner-img">
        <img width="1920" height="980" src={indexBanner} alt="" />
      </div>

      <div className="banner-txt position-absolute text-center">
        <p className="fs-lg-1 fs-5 text-white">品味，由你定義</p>
        <p className="mb-4 fs-lg-1 fs-5 text-white">2024 NEW IN</p>
        <div className="text-center">
          <NavLink to='products' className="btn btn-primary btn-sm">探索新品</NavLink>
        </div>
      </div>
    </section>

    <section className="recommendation my-lg-14 my-12">
      <div className="container">
        <div className="text-center mb-7">
          <h3 className="fs-4">Featured presentation</h3>
          <h3 className="fs-5">精選推薦</h3>
        </div>

        <div className="row row-cols-2 gx-lg-4 gx-0">
          <div className="col">
            <div className="mb-6">
              <img src={jumpsuit} width="636" height="871" alt="..." />
            </div>
            <div className="d-lg-flex d-block justify-content-between text-center text-lg-start">
              <div className="mb-lg-0 mb-4">
                <h2 className="fs-6 mb-2">黑色流蘇連身褲</h2>
                <p className="mb-2">頂級納帕皮革手工製作</p>
                <p className="mb-2">手工流蘇反射光影</p>
                <p>展現動感之美</p>
              </div>
              <div>
                <NavLink to='products' className="btn btn-primary">探索新品</NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mb-6">
              <img src={coat} width="636" height="871" alt="..." />
            </div>
            <div className="d-lg-flex d-block justify-content-between text-center text-lg-start">
              <div className="mb-lg-0 mb-4">
                <h2 className="fs-6 mb-2">紅色復古飾面外套</h2>
                <p className="mb-2">紅色復古飾面外套</p>
                <p className="mb-2">重新詮釋文藝復興的奢華</p>
                <p>將經典雙排釦剪裁與當代設計相結合</p>
              </div>
              <div>
                <NavLink to='products' className="btn btn-gray">探索新品</NavLink>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>


    <div className="popular mx-lg-7 mx-0 overflow-x-hidden">
    <div className="d-lg-flex d-block justify-content-between text-center align-items-center mb-lg-7 mb-4">
      <div>
        <h3 className="mb-2 fs-4">Popular</h3>
        <h3 className="fs-5">熱門列表</h3>
      </div>
      <div className="d-none d-lg-block">
        <NavLink to='products' >探索更多</NavLink>
      </div>
    </div>    

    <div className="position-relative d-lg-block d-none">
      <ul className="list-unstyled popular-ul d-flex" ref={ulRef}>
        {
            popularPictureArr.map((item,index)=>{
                return(
                    <li className={`popular-li position-relative ${currentLargePic === index ? 'lg-pic':''}`} key={item.name}>
                    <div>
                        <img className={`popular-img ${currentLargePic === index ? 'w-100':''}`} width="306" height="408" src={item.imgUrl} alt="..."/>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>{item.name}</p>
                        <span>${item.price}</span>
                    </div>
                    <div className={`position-absolute popular-txt ${currentLargePic === index ? 'd-block':''}`}>
                        <p className= "mb-3">{item.description}</p>
                        <NavLink to='/' className="fw-bold text-decoration-underline">查看細節</NavLink>
                    </div>
                </li>
                )
            })
        }

      </ul> 
      <i className="popular-arrow-l bi bi-chevron-left position-absolute" onClick={slideL}></i>
      <i className="popular-arrow-r bi bi-chevron-right position-absolute" onClick={slideR}></i>
    </div>

    <div className="d-block d-lg-none">
      <div className="container-fluid px-0">
        <div className="row-cols-2 row gx-0 gy-10">
          {
            popularPictureArr.map((item)=>{
              return (<div className="col" key={item.name}>
                <img className="w-100" src={item.imgUrl} alt="..." />
                <div className="d-flex justify-content-between pt-2 px-3 fs-8">
                  <p>{item.name}</p>
                  <span>${item.price}</span>
                </div>
              </div>)
            })
          }
        </div>
      </div>

      <div className="text-center mt-4">
        <a href="/" className="btn btn-primary">探索更多</a>
      </div>

    </div>


    </div>

    <section className="feature my-lg-14 my-12">
      <div className="text-center container-fluid">
        <h2 className="fs-4">Craftsmanship</h2>
        <h2 className="fs-5">精湛工藝</h2>
      </div>
      <div className="container-fluid mt-7">
        <div className="row-cols-lg-3 row-cols-1 row">
          {
            featureData.map((item)=>{
                return(
                    <div className="col position-relative" key={item.title}>
                    <div className="feature-shadow">
                      <div>
                        <img className="w-100" width="592" height="592" src={item.imgUrl} alt="..." />
                      </div>
                      <div className="feature-txt position-absolute">
                        <h3 className="fs-5 text-center ">{item.title}</h3>
                        <p className="text-white">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
            })
          }
        </div>

      </div>
    </section>

    <section className="stylist mb-12">
      <div className="container">
        <div className="text-center mb-3 mb-lg-7">
          <h2 className="fs-4">Stylist</h2>
          <h2 className="fs-5">造型師</h2>
        </div>

        <div className="row row-cols-lg-4 row-cols-1 g-0" >
            {
                stylistCardData.map(((stylist,index) => {
                    return(
                    <div className="col mb-lg-0 mb-9"  key={index}>
                    <div>
                        <div>
                            <img className="w-100" width="324" height="324" src={stylist.imgUrl} alt="..." />   
                        </div>
        
                        <div className="mt-2 px-3">
                            <h3 className="fs-5 fw-bold border-2 border-bottom pb-1 border-primary mb-3">{stylist.name}</h3>
                            <p className="mb-6 fs-8">{stylist.description}</p>
                            <div className="text-center text-lg-start">
                                <a href="#" className="btn btn-primary">立即預約</a>
                            </div>
                        </div> 
                    </div>
                    </div>
                    )
                }))
            }
           
        </div>
      </div>
    </section>
    </>)
}