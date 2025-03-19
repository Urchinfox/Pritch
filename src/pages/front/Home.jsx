
import Brian from '../../assets/images/stylist/Brian.png';
import Elena from '../../assets/images/stylist/Elena.png';
import Kate from '../../assets/images/stylist/Kate.png';
import Shen from '../../assets/images/stylist/Shen.png';

import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';





export default function Home() {
  const stylistCardData = [
    {
      imgUrl: Brian,
      name: 'Brian',
      description: 'Known for bold and innovative designs, with over 20 years of fashion styling experience. A recipient of multiple international design awards, including the "2023 Stylist of the Year," specializing in blending avant-garde elements with wearable fashion. His work is frequently praised by leading fashion publications.',
    },
    {
      imgUrl: Kate,
      name: 'Kate',
      description: 'With 15 years of professional experience, she is known for her elegant cuts and exquisite craftsmanship. She has designed red carpet looks for several celebrities. Her design style blends modernity with classic beauty, and her work is frequently showcased in fashion exhibitions, earning widespread acclaim in the industry.',
    },
    {
      imgUrl: Elena,
      name: 'Elena',
      description: 'She has rapidly risen with her unique creativity and forward-thinking design concepts. Despite having only five years of experience, she has already won multiple fashion competitions, including the "Rising Star Stylist Award." She excels in using innovative fabrics and distinctive cutting techniques to create stunning looks for her clients.',
    },
    {
      imgUrl: Shen,
      name: 'Shen',
      description: 'An experienced stylist with over 20 years in the industry, he is known for his exquisite color coordination skills. He has served as the chief stylist for renowned brands and as a judge at major fashion events. His design style blends Eastern elements with Western modernity, earning him great admiration from clients.',
    },
  ]

  const featureData = [
    {
      imgUrl: 'https://www.joint-space.co.jp/category_common/tina/collection/slider/staffstyle2.png',
      title: 'Fine Craftsmanship',
      description: `The staff engages in styling activities, selecting outfits based on the brand’s vision and client preferences. They carefully curate each ensemble, ensuring a polished, cohesive look that enhances the client’s appearance.

`
    },
    {
      imgUrl: 'https://www.joint-space.co.jp/category_common/tina/collection/slider/preoder.png',
      title: 'Unique Design',
      description: 'The team handles pre-order activities by coordinating product availability and taking customer orders in advance. They ensure accurate inventory management and timely communication with customers, providing updates on delivery schedules and product releases.'
    },
    {
      imgUrl: 'https://www.joint-space.co.jp/category_common/tina/appfirst/appfirst_980x600.jpg',
      title: 'Exclusive Customization',
      description: `☑公式WEBショップと店舗でポイントが貯まる＆使える☑リアルショップのイベントやニュース情報配信☑アプリ限定キャンペーンやクーポンのプレゼント`
    }

  ]

  const popularPictureArr = [
    {
      imgUrl: 'https://shirai.itembox.design/product/150/000000015011/000000015011-02-l.jpg',
      name: '刺繍入り ストレートデニムパンツ',
      price: 6500,
      description: 'ポケット部分と裾元に手書き星刺繍を施した、ワイドストレートデニムパンツ。大きめウエスト仕様なので、ベルトを合わせての着用はもちろん、ルーズな着こなしも叶います。',
      btnUrl: 'products/-OLSlOn4u9WL05IGWgiI',
    },
    {
      imgUrl: 'https://shirai.itembox.design/product/119/000000011902/000000011902-02-l.jpg',
      name: 'クリアボタン ヘンリーネックカットソー',
      price: 3280,
      description: '女性らしさを引き立てるコンパクトなシルエットながらも、ストレッチの効いた着心地の良い素材感。衿ぐり、袖口、裾の細かなレース使いもポイント。',
      btnUrl: 'products/-OLT6VtgYyGYWY8ZR9yE',

    },
    {
      imgUrl: 'https://shirai.itembox.design/product/150/000000015019/000000015019-02-l.jpg',
      name: '小花柄 フリルキャミワンピース',
      price: 3500,
      description: 'ギャザーをたっぷりと入れたフリルがボリューミーでガーリームードを高める、キャミワンピース。歩くたびにふわりと揺れるシルエットもポイントす。',
      btnUrl: 'products/-OLIkqa9n1LFssKlNDp1',

    },
    {
      imgUrl: 'https://shirai.itembox.design/product/150/000000015015/000000015015-02-l.jpg',
      name: 'リボン付き レースレッグウォーマー',
      price: 5690,
      description: '表面感のあるレース素材にコットンレースを上下に付けたレッグウォーマー。25SSのテーマ「Fairy Collection」を彷彿とさせる、ガーリームード高まるアイテムです。',
      btnUrl: 'products/-OLSwYdO8bST22YalL7A',

    },
    {
      imgUrl: 'https://shirai.itembox.design/product/150/000000015045/000000015045-02-l.jpg',
      name: 'フリルラップレイヤード ショートパンツ',
      price: 4280,
      description: '花柄と無地のシフォン素材をミックスしたラップスカートと、コンパクトなシルエットのショートパンツがセットになったアイテム。スカートとパンツはセパレート仕様なので、お持ちのアイテムと合わせてスタイリングも◎',
      btnUrl: 'products/-OLT7NfB3-nkFRrjQCd4',
    }

  ]

  const ulRef = useRef(null);
  const [currentLargePic, setCurrentLargePic] = useState(2);
  // const [move, setMove] = useState(0);
  const [, setMove] = useState(0);


  const slideR = () => {
    if (currentLargePic < 4) {
      setCurrentLargePic((pre) => pre + 1)
      setMove((pre) => {
        const newMove = pre - 20;
        ulRef.current.style.transform = `translateX(${newMove}%)`;
        return newMove;
      })
    }

  }
  const slideL = () => {
    if (currentLargePic > 0) {
      setCurrentLargePic((pre) => pre - 1)
      setMove((pre) => {
        const newMove = pre + 20;
        ulRef.current.style.transform = `translateX(${newMove}%)`;
        return newMove;
      })
    }

  }



  return (<>
    <section className="banner position-relative">
      <div className="banner-img">
        <img width="1920" height="980" src='https://www.joint-space.co.jp/category_common/tina/collection/fc_mar/fc_mar_banner.jpg' alt="" />
      </div>

      <div className="banner-txt position-absolute text-center">
        <p className="mb-4 fs-lg-1 fs-5 text-white">2024 NEW IN</p>
        <div className="text-center">
          <NavLink to='products' className="btn btn-primary btn-sm">Explore New Arrivals</NavLink>
        </div>
      </div>
    </section>

    <section className="recommendation my-lg-14 my-12">
      <div className="container">
        <div className="text-center mb-7">
          <h3 className="fs-4">Featured presentation</h3>
        </div>

        <div className="row row-cols-2 gx-lg-4 gx-0">
          <div className="col">
            <div className="mb-6">
              <img src='https://shirai.itembox.design/product/139/000000013996/000000013996-02-l.jpg' width="636" height="871" alt="..." />
            </div>
            <div className="d-lg-flex d-block justify-content-between text-center text-lg-start">
              <div className="mb-lg-0 mb-4">
                <h2 className="fs-6 mb-2">小花柄 レース付きキャミソール TINA：JOJUN</h2>
                <p className="mb-2">肩紐長さ調節可能なアジャスター付き</p>
                <p>伸縮性のある生地を使用しているので、ボディラインに程よくフィット</p>
                <p className="mb-2">後ろにゴールドのブランドチャーム付き</p>
              </div>
              <div>
                <NavLink to='products' className="btn btn-primary">New Arrivals</NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="mb-6">
              <img src='https://shirai.itembox.design/product/119/000000011915/000000011915-02-l.jpg' width="636" height="871" alt="..." />
            </div>
            <div className="d-lg-flex d-block justify-content-between text-center text-lg-start">
              <div className="mb-lg-0 mb-4">
                <h2 className="fs-6 mb-2">フロントリボン ニットカーディガン</h2>
                <p className="mb-2">春夏にかけて取り入れやすいニット素材</p>
                <p className="mb-2">結ばずに垂らしても可愛いフロントリボン</p>
                <p>スッキリとした着丈でスタイルアップをアシスト</p>
              </div>
              <div>
                <NavLink to='products' className="btn btn-gray">New Arrivals</NavLink>
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
        </div>
        <div className="d-none d-lg-block">
          <NavLink to='products' >Explore</NavLink>
        </div>
      </div>

      <div className="position-relative d-lg-block d-none">
        <ul className="list-unstyled popular-ul d-flex" ref={ulRef}>
          {
            popularPictureArr.map((item, index) => {
              return (
                <li className={`popular-li position-relative ${currentLargePic === index ? 'lg-pic' : ''}`} key={item.name}>
                  <div>
                    <img className={`popular-img ${currentLargePic === index ? 'w-100' : ''}`} width="306" height="408" src={item.imgUrl} alt="..." />
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>{item.name}</p>
                    <span>${item.price}</span>
                  </div>
                  <div className={`position-absolute popular-txt ${currentLargePic === index ? 'd-block' : ''}`}>
                    <p className="mb-3">{item.description}</p>
                    <NavLink to={item.btnUrl} className="fw-bold text-decoration-underline">View Details</NavLink>
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
              popularPictureArr.map((item) => {
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
          <a href="/" className="btn btn-primary">Explore more</a>
        </div>

      </div>


    </div>

    <section className="feature my-lg-14 my-12">
      <div className="text-center container-fluid">
        <h2 className="fs-4">Activities</h2>
      </div>
      <div className="container-fluid mt-7">
        <div className="row-cols-lg-3 row-cols-1 row">
          {
            featureData.map((item) => {
              return (
                <div className="col position-relative" key={item.title}>
                  <div className="feature-shadow">
                    <div>
                      <img className="w-100" width="592" height="592" src={item.imgUrl} alt="..." />
                    </div>
                    <div className="feature-txt position-absolute">
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
          <h2 className="fs-5">Stylist</h2>
        </div>

        <div className="row row-cols-lg-4 row-cols-1 g-0" >
          {
            stylistCardData.map(((stylist, index) => {
              return (
                <div className="col mb-lg-0 mb-9" key={index}>
                  <div>
                    <div>
                      <img className="w-100" width="324" height="324" src={stylist.imgUrl} alt="..." />
                    </div>

                    <div className="mt-2 px-3">
                      <h3 className="fs-5 fw-bold border-2 border-bottom pb-1 border-primary mb-3">{stylist.name}</h3>
                      <p className="mb-6 fs-8">{stylist.description}</p>

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