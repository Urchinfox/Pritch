import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';



const popularPictureArr = [
    {
        imgUrl: 'https://s3-alpha-sig.figma.com/img/6023/418d/5431e161ee2484e8d680988b15bac142?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A7WM3M-XfLjIHotwpEmBYJfpOHwLmwvbqovEGwwMRdVsGSPCNKBOWwlpi1gEBLoW3YM9f6HP4DBBvxbqHXTWvR0rEXDxguIPhEWKnEpZZtNR3vPorS8Gaz3eiqJlEc6RM3u4SSIsf1rWKwzPLfPkALFFSJjy5jpAhHJPt5LOME-aJd9kMrZubh6jHtOX9gn-Nl~UFEPGj0uPjTWDbqp8xiXwBAIgAdUEruFhSNjXemjUhpur96iYNtG5ImYRZco8~VkZDh8dNEuUel3tDrct-LFcKG-0zqklH5Ym-jLAl4~6N0eZdI7vkQ69IqcTIgKx6N5~ryuldG-~kPRNxZMR~g__',
        name : '飛行員運動褲',
        price: 69656,
        description: '飛行運動褲 是一款 Nappa 皮革雕塑，其半閃亮的紅色表面成為身體曲線的畫布。這款單品採用引人注目的緊身胸衣細節和奢華的絲綢襯裡，既是一件盔甲，又是一種誘惑，專為那些以泰然自若和力量掌控空間的人士而設計。',
    },
    {
        imgUrl: 'https://s3-alpha-sig.figma.com/img/7579/abf7/ff64de5099a3c6c26cee9f7afe4016cb?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=US1KX0195yEBrd8lQgFgpuJ~~GDojoehj25bxKOmK5X11u~qJgewFLAxiEPlZuMOScDCd0HGUF1NGSJMyDuN2x2pNJxBxYR6OHdDlDWh7s2U2PAc~1R955aJu4r0CJqWGwklz15rAAUdExL6c5fTh9hvJ6dk~5omwvVDjGkyhFPiykEn64gHhdc1EON5LWJbDugEk1DbnoM0PQuyurUSR-F6ZDc1rmgZnOqElRrJvKSl1GIDHAaXSZ0L9TQ3cZeNpyRC1~ikcr1HH4gv9WvXN4mLVSJA-AjpDKrmKRPugulNcidNhw41Nony6ye4RpI4BvScxHOcIywsslI2izRGVA__',
        name : 'BIA 緊身胸衣',
        price: 32084,
        description: 'BIA 緊身胸衣 是一款 Nappa 皮革雕塑，其半閃亮的紅色表面成為身體曲線的畫布。這款單品採用引人注目的緊身胸衣細節和奢華的絲綢襯裡，既是一件盔甲，又是一種誘惑，專為那些以泰然自若和力量掌控空間的人士而設計。',
    },    
    {
        imgUrl: 'https://s3-alpha-sig.figma.com/img/5f03/c48f/ed639527cac5eaecd8005f03dc7d14a3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hKTiaySWkSfwTbp-YPK4oi2Edya-AYjRDUAZGgp5JqkpgvWtpckQ3bYfvtJ4KLYUkhx7oIxk53WJ9LyceGK0gd5dvDFKDCiSQC4fjc4Og3kiJLSJT9~VHIbIjkMl8SMyM5ZzF4RgsbzA6ehyE4LNN7qxiMICdDn0dp15us8rYi64ZNeXQfkAFvu22I3fGdGbgCTgiETx1bRNYogWvV76QMebJmdeh0wgyQ-X0FeyjzXAOw~7pCwdqFLHfbFIBFHPLUqvDAP1fydZeRCks9-xyrQ7v8M-BAzszMwBtff2UBD9FPn24fdnJqdDrt-UZ-ofVr7wxhcT-bUCYo7Q1ZQi2Q__',
        name : '復古飾面緊身胸衣',
        price: 97116,
        description: '復古飾面緊身胸衣 是一款 Nappa 皮革雕塑，其半閃亮的紅色表面成為身體曲線的畫布。這款單品採用引人注目的緊身胸衣細節和奢華的絲綢襯裡，既是一件盔甲，又是一種誘惑，專為那些以泰然自若和力量掌控空間的人士而設計。',
    },
    {
        imgUrl: 'https://s3-alpha-sig.figma.com/img/8e3f/98d1/33102a5ce51cf72c3d0372dd495b52ca?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b4ik4Zl48gWexboWZhFQHVzVH7x2BrlVD1KA4f0Z6Uy4OW29uvT6zpVSjaoDYoO~4P6d1cWKk1TAgYur87ewedO6R1euuUSDXmNLJxYooThH5KQB0vZfJUfrlu9vP9VlOVm6nuUj7cy-hd0DaBwC-x1wzV7PNu9P9x88o7qDCPoPf3IYF5BYBqiT4-FMlufKs259LIO6Wb~QjCJu92zjxjWHyFEHnKbFkhrC5gfca8kTn1rDerw6~HbVI3MrXrhu9QFqkY-XHqIXHeUlIM66Wsm~S1i2sXeraS81t0~39APS8MIJ3kQE7Rh4Z-IOvudnRQfJ98cc5h1CikHdlgy9LA__',
        name : '緊身胸衣腰帶',
        price: 10979,
        description: '緊身胸衣腰帶 是一款 Nappa 皮革雕塑，其半閃亮的紅色表面成為身體曲線的畫布。這款單品採用引人注目的緊身胸衣細節和奢華的絲綢襯裡，既是一件盔甲，又是一種誘惑，專為那些以泰然自若和力量掌控空間的人士而設計。',

    },    
    {
        imgUrl: 'https://s3-alpha-sig.figma.com/img/1b7c/545d/80b8d701aaab1a7cb32c648c0a5317ff?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=owWfiZ1fMHEKjEsEwHcE7EGEnYdb~RDby9Ep5uK~jBB0KaCJG-8pTzj07fMw3slPB-utOPFsEq93mw~Sg0QkQA-tK6zaUDMhH47XvQFxP2yj4SN06f7czasUa9L6NtLWG~1o0xrqRo9OWeSQG4dplpai5uS9t5cK4aIcB7UQ8CuGWWoeGkGb~Kkp9hE5DlQnxawWvcBUFK55N8-DWvmRpoisu9Qj2GYkrNQRXkO2hc4bp8h65q~3p7Zo~B4feIvLeHV24K84ARQAaCSqGhclgxyhlUTbbIHmuGPTNGpqjLVztKkzTIdgtZXHS6TmAY~0LqBerJsHzYmCOHOsbQD~7A__',
        name : '絲綢垂墜連身裙',
        price: 65448,
        description: '絲綢垂墜連身裙 是一款 Nappa 皮革雕塑，其半閃亮的紅色表面成為身體曲線的畫布。這款單品採用引人注目的緊身胸衣細節和奢華的絲綢襯裡，既是一件盔甲，又是一種誘惑，專為那些以泰然自若和力量掌控空間的人士而設計。',

    }
    
]

const stylistCardData = [
    {
        imgUrl : 'https://s3-alpha-sig.figma.com/img/904c/5d42/87dd4bb2ec99928472815b0041220c83?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~0zM4jNepp1RLRzNWyJMFKIBQRUyPlMP~NvVksL5AQO0UXd846IlBhUNiCc9nAxINA37lEPu~85WP~L5PhjJe6tx4diCJT3nDbMtOFeNpBWZBlGRRmiGor~L9tiknqJhG-vP0jHT3KXJOtPu4yemjByFd3gokmqzUJjfEPGnmi~Ei1sEcxma0jYxzLSiNg33NEfRcx618ta3VzG7zmFiVgVhzBOEgg-J-l1S2ltrYR0~Rt9jsvOrUazpYTty~TiuGwMEvLQd9aaWPK2QsfjLwrp4oEq9p8POd7VuixTAG15gTotiTD9ZrbSwIXiMqrd1G4Cap9WnfrG4MJF0QgoFQ__',
        name : 'Brian',
        description: '以大膽創新的設計理念而聞名,擁有超過20年的時尚造型經驗。曾經獲得多個國際設計獎項,包括「2023年度造型師獎」。擅長將前衛的設計元素融入實穿的服裝中,他的作品經常被時尚界的權威刊物所推崇。',
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/dfae/d96f/221167a8cef5dc4f36cd7c95a2f3294e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kV-EkJQqv13olOMCtu36WHhZaGeLelFyWi1NnEs85NxDExMULZ-h1AmF3394fnLkQ0bndhnGdBzTek-xypr3J1iZrsoO9XJISbjt9gup7H7fJsFt8itu5jz6jUvmXfFaKHruuWAV9AQXkvyfvvITUo0uMPjyY0HL~8vn2j1BW2yX4m6-5KAaZ5JvhapMTLLRg8XKrhY85MLSe0c9nWnpuqyQTO7XrVkT0uq3fLFefWojR-ondVXWBNFsOL3c4AEk83THhovPgkOqviAMmqm4QL3QBf~aoF1OLipppFswKATkre14SYTOkyi-bUjMPKQRWLdUaEU1TjKyqtFw0-BaIw__',
        name:'Kate',
        description:'擁有15年的專業經驗。她以其優雅的剪裁和細膩的手工藝著稱,曾為多位名人設計過紅毯造型。設計風格兼具現代感與古典美,作品經常在時尚展覽中亮相,受到業界廣泛讚譽。',
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/5f77/f583/c68659bc9f6ca35cba291c6f4a936eec?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i21dyoJFEaLIHrtBnZ0FxS~Y2VJHgcNjoDyQFIjYzhknM4QspI3kl~hyzalN~5jovgRG3nK17p-fqpxNUTKPWMH9s2To~WwubZi5qTeWWiwOa41LDvBFSgatE2Jq3HTKaQEuEx361WoRQ1RBWWHrsJLXT37sL3OYQaeZbvpR1DuOXwTCMGnJpDCa0txj0PbONfhmbX6FxrwXjrUBWCmwSoNaP4SmoTWOW4r7zYCjCM4NQ6SsJucJ847rztLyN3OCtOK9asdRMx3dJa2DNmIOZe926S47a31y5-9TAfQbd2cwT8L03cUc~tZf9CtkDL9uuJokVPzdvDPvdsyLsHn~Sg__',
        name:'Elena',
        description:'以其獨特的創意和前瞻性的設計理念迅速崛起。儘管她的職業生涯僅有五年,但她已經在多個時尚比賽中獲得冠軍,包括「新銳造型師獎」。擅長使用創新的面料和獨特的剪裁技術,為客戶創造出令人驚豔的造型。',
    },
    {
        imgUrl:'https://s3-alpha-sig.figma.com/img/2d37/6ca5/7a8ed8675dffa6a8d16fdb1cb03d219c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RNRTcwH5Yq7p82C7NQY2kt2d~fbB~Yb-pHEnmTSpZqHllRGnreFqGepIuU2haPQUTKhlx1oQSK12jAyVn7VqJhWN6FSaQyi1Jp3anQj3kpZP8Fc3QbZMghiOwQWz1CnZiihxbRtMU-xy4ntf4X3EUgi8wml-K0RLGbc3i7YnStu7T6wpjdU7ynpEiSRHitlqIpKhZabVXiBwT92y4vttL5~uXh57qYsp-mN9TGpTRN0hY0gkObjn0JDSooOFwF7XhgSGpC2xe7vaK~J834-V-wblPzxtLrjj1B48orLn93T6DT6Ol4Ez~g1CQQOYjBsliI3aIypmw-5npHsqwSmx6A__',
        name:'Shen',
        description:'經驗豐富的造型師,擁有超過20年的行業經驗。他以其精緻的色彩搭配技術而聞名。曾經為知名品牌擔任首席造型師,並且在時尚界的各大活動中擔任評委。設計風格融合了東方元素與西方現代感,深受客戶喜愛。',
    },
]
const shopProductCardData = [
    {
      imgUrl: 'https://s3-alpha-sig.figma.com/img/cc9b/a748/95d3b9535ebcf99858737e9d554514cc?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=noZ7LGBX51eC5XMyD-UIr-3~d-zUhYoFtiEcaFvkKf8-tW5ag~1hf8Jdc1yIxt77g0hWdwSnVe8O-Zi9Fwz4ZjhBExvMDx8ykAE3U5brEvICFgJC1cDGaLyQ20E1cXIh6P5yYjURzWA57PJ~rICnMbHCdVXUOap2fQObgeOjzVsME6eMeUPBZ7uSu6oLBq~QxbhaxJ4001Nj0xktRE2hlFXk71rQOwOOkcDHbzF0ZpH~YI-DM17AYUCBcOxSoJdbM3qesZQVjo0xBa49gtxSqUNxC5nIqd34YvTUtU2D~VQVEGNVkTKZcdrhWidyjFiUH1-xd8V1fNbVa7e1AE0K4g__',
      name: '飛行員運動褲',
      price: 69656,
    },
    {
        imgUrl: 'https://s3-alpha-sig.figma.com/img/7579/abf7/ff64de5099a3c6c26cee9f7afe4016cb?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=US1KX0195yEBrd8lQgFgpuJ~~GDojoehj25bxKOmK5X11u~qJgewFLAxiEPlZuMOScDCd0HGUF1NGSJMyDuN2x2pNJxBxYR6OHdDlDWh7s2U2PAc~1R955aJu4r0CJqWGwklz15rAAUdExL6c5fTh9hvJ6dk~5omwvVDjGkyhFPiykEn64gHhdc1EON5LWJbDugEk1DbnoM0PQuyurUSR-F6ZDc1rmgZnOqElRrJvKSl1GIDHAaXSZ0L9TQ3cZeNpyRC1~ikcr1HH4gv9WvXN4mLVSJA-AjpDKrmKRPugulNcidNhw41Nony6ye4RpI4BvScxHOcIywsslI2izRGVA__',
        name: 'BIA 緊身胸衣',
        price: 32084, 
    },
    {
        imgUrl: 'https://s3-alpha-sig.figma.com/img/bb31/e2d6/19c7e5c57d34ce0ff9c2a84e18590f8c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YMmGCweHufv2vmNHbhbLSHo8S2Gj~D4Gv9zk~wsLH8jx0esCNJf9FbRNifMI3VWCctyBQYSs8851ZxHlNqeHqSX59y32IS~QUbLlEsC~T41cgSjWZG1fP5j~yIIbIascQn6uDE7eNis9S3Svxu5ZkfAjlW~8PWMggcUXXua2dP~8BTAWZmX0AWdtr2nW3FvR1rOel9~x~3~A9fxZLPZzka0TvlBy-CMVpnMU8WZ8Neupxcwm5Zj0nlu4hgCr3BAjtbNJByfVQ1WI~Oq7qnKUuTu9KS~XC0A4FPLkBVf9HNCtowjV1tJfJwheUzJrkajDjK1aweojizaia2qnTVX5nQ__',
        name: '復古飾面緊身胸衣',
        price: 97116, 
    },
    {
        imgUrl: 'https://s3-alpha-sig.figma.com/img/8e3f/98d1/33102a5ce51cf72c3d0372dd495b52ca?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b4ik4Zl48gWexboWZhFQHVzVH7x2BrlVD1KA4f0Z6Uy4OW29uvT6zpVSjaoDYoO~4P6d1cWKk1TAgYur87ewedO6R1euuUSDXmNLJxYooThH5KQB0vZfJUfrlu9vP9VlOVm6nuUj7cy-hd0DaBwC-x1wzV7PNu9P9x88o7qDCPoPf3IYF5BYBqiT4-FMlufKs259LIO6Wb~QjCJu92zjxjWHyFEHnKbFkhrC5gfca8kTn1rDerw6~HbVI3MrXrhu9QFqkY-XHqIXHeUlIM66Wsm~S1i2sXeraS81t0~39APS8MIJ3kQE7Rh4Z-IOvudnRQfJ98cc5h1CikHdlgy9LA__',
        name: '緊身胸衣腰帶',
        price:10979, 
    },
    {
        imgUrl: 'https://s3-alpha-sig.figma.com/img/1b7c/545d/80b8d701aaab1a7cb32c648c0a5317ff?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=owWfiZ1fMHEKjEsEwHcE7EGEnYdb~RDby9Ep5uK~jBB0KaCJG-8pTzj07fMw3slPB-utOPFsEq93mw~Sg0QkQA-tK6zaUDMhH47XvQFxP2yj4SN06f7czasUa9L6NtLWG~1o0xrqRo9OWeSQG4dplpai5uS9t5cK4aIcB7UQ8CuGWWoeGkGb~Kkp9hE5DlQnxawWvcBUFK55N8-DWvmRpoisu9Qj2GYkrNQRXkO2hc4bp8h65q~3p7Zo~B4feIvLeHV24K84ARQAaCSqGhclgxyhlUTbbIHmuGPTNGpqjLVztKkzTIdgtZXHS6TmAY~0LqBerJsHzYmCOHOsbQD~7A__',
        name: '絲綢垂墜連身裙',
        price:65448, 
    },
]
//carousel
//scale

const popularUl = document.querySelector('#popularUl');
const popularArrowL = document.querySelector('.popular-arrow-l');
const popularArrowR = document.querySelector('.popular-arrow-r');
const popularMbItem = document.querySelector('#popularMbItem');
// console.log(popularArrowL)

let currentLargePic = 2;
let center = 0; //currentPosition
const moveAmount = 20; //move 20%
if(popularArrowL){
    popularArrowL.addEventListener('click',(e)=>{
        if(currentLargePic >0){
            currentLargePic -=1;
        }
        if(center < 40){
            center += moveAmount;
            popularUl.style.transform = `translateX(${center}%)`; 
        }
    
        renderPopularItem(popularPictureArr);
        console.log(currentLargePic)
    })
}
if(popularArrowR){
    popularArrowR.addEventListener('click',(e)=>{
        if(currentLargePic < 4 ){
            currentLargePic +=1;
        }
    
        if(center > -40){
            center -= moveAmount;
            popularUl.style.transform = `translateX(${center}%)`; 
        }
        renderPopularItem(popularPictureArr);
    
        console.log(currentLargePic)
    })
}

const renderPopularItem = (popularData) => {
    let str = '';
    popularData.forEach((item, index) => {
        const popularContent = `
            <li class="popular-li position-relative">
                <div>
                    <img class="popular-img" width="306" height="408" src="${item.imgUrl}" alt="...">
                </div>
                <div class="d-flex justify-content-between">
                    <p>${item.name}</p>
                    <span>$${item.price}</span>
                </div>
                <div class="position-absolute popular-txt">
                    <p class= "mb-3">${item.description}</p>
                    <a href="#" class="fw-bold text-decoration-underline">查看細節</a>
                </div>
            </li>`;
        str += popularContent;
    });
    if(popularUl){
        popularUl.innerHTML = str;
    }
    const popularLi = document.querySelectorAll('.popular-li');
    const popularImg = document.querySelectorAll('.popular-img');
    const popularDesc = document.querySelectorAll('.popular-txt');
    popularLi.forEach((item,index) =>{
        if(index === currentLargePic){
            if (index === currentLargePic) {  
                item.classList.add('lg-pic');  
                popularImg[index].style.width = '100%';
                popularDesc[index].style.display = 'block';

            } else {
                item.classList.remove('lg-pic');  
                popularDesc[index].style.display = 'none';

            }            
        }

    })

};

const renderPopularMbItem = (popularData)=>{
    let str = '';
    const limit = 4;
    popularPictureArr.forEach((item,index)=>{
        const content = `<div class="col">
            <img class="w-100" src=${item.imgUrl} alt="...">
            <div class="d-flex justify-content-between pt-2 px-3 fs-8">
              <p>${item.name}</p>
              <span>$${item.price}</span>
            </div>
          </div>`;
        if(index < 4){
            str += content;
        }
    })
    if(popularMbItem){
        popularMbItem.innerHTML = str;
    }
}

renderPopularItem(popularPictureArr);
renderPopularMbItem(popularPictureArr);


const stylistCard = document.querySelector('#stylistCard');

const renderStylistCard = (stylistData) =>{
    let str = '';
    stylistCardData.forEach(item=>{
        const stylistContent = `<div class="col  mb-lg-0 mb-9">
            <div class="">
                <div>
                    <img class="w-100" width="324" height="324" src="${item.imgUrl}" alt="...">   
                </div>

                <div class="mt-2 px-3">
                    <h3 class="fs-5 fw-bold border-2 border-bottom pb-1 border-primary mb-3">${item.name}</h3>
                    <p class="mb-6 fs-8">${item.description}</p>
                    <div class="text-center text-lg-start">
                        <a href="#" class="btn btn-primary">立即預約</a>
                    </div>
                </div> 
            </div>
        </div>`
        
          str += stylistContent;
    })
    if(stylistCard){
        stylistCard.innerHTML = str;
    }
}

renderStylistCard(stylistCardData);

//shop productCard
const shopProductCard = document.querySelector('#shopProductCard');

const renderProductCard = (shopProductCardData)=>{
    let str = '';
    for(let i = 0; i < 3; i++){
        shopProductCardData.forEach(item =>{
            const productContent = ` <div class="col">
                        <a href="#">
                        <div class="mb-4">
                            <img class="w-100" src=${item.imgUrl} width="377" height="518" alt="...">
                        </div>
                        <div class="text-center">
                            <h2 class="fs-8">${item.name}</h2>
                            <span class="fs-8">$${item.price}</span>
                        </div>
                        </a>
                    </div>`
            str += productContent;
        })
    }
    if(shopProductCard){
        shopProductCard.innerHTML = str;
    }
}


renderProductCard(shopProductCardData);







