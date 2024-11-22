import { render } from 'ejs';
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';



const popularPictureArr = [
    {
        imgUrl: '../assets/images/sweatpants.png',
        name : '飛行員運動褲',
        price: 69656,
        description: '飛行運動褲 是一款 Nappa 皮革雕塑，其半閃亮的紅色表面成為身體曲線的畫布。這款單品採用引人注目的緊身胸衣細節和奢華的絲綢襯裡，既是一件盔甲，又是一種誘惑，專為那些以泰然自若和力量掌控空間的人士而設計。',
        btnUrl:'#',
    },
    {
        imgUrl: '../assets/images/BIA-corset.png',
        name : 'BIA 緊身胸衣',
        price: 32084,
        description: 'BIA 緊身胸衣 是一款 Nappa 皮革雕塑，其半閃亮的紅色表面成為身體曲線的畫布。這款單品採用引人注目的緊身胸衣細節和奢華的絲綢襯裡，既是一件盔甲，又是一種誘惑，專為那些以泰然自若和力量掌控空間的人士而設計。',
        btnUrl:'#',

    },    
    {
        imgUrl: '../assets/images/corset.png',
        name : '復古飾面緊身胸衣',
        price: 97116,
        description: '復古飾面緊身胸衣 是一款 Nappa 皮革雕塑，其半閃亮的紅色表面成為身體曲線的畫布。這款單品採用引人注目的緊身胸衣細節和奢華的絲綢襯裡，既是一件盔甲，又是一種誘惑，專為那些以泰然自若和力量掌控空間的人士而設計。',
        btnUrl:'#',

    },
    {
        imgUrl: '../assets/images/belt.png',
        name : '緊身胸衣腰帶',
        price: 10979,
        description: '緊身胸衣腰帶 是一款 Nappa 皮革雕塑，其半閃亮的紅色表面成為身體曲線的畫布。這款單品採用引人注目的緊身胸衣細節和奢華的絲綢襯裡，既是一件盔甲，又是一種誘惑，專為那些以泰然自若和力量掌控空間的人士而設計。',
        btnUrl:'bustier-belt.html',

    },    
    {
        imgUrl: '../assets/images/dress.png',
        name : '絲綢垂墜連身裙',
        price: 65448,
        description: '絲綢垂墜連身裙 是一款 Nappa 皮革雕塑，其半閃亮的紅色表面成為身體曲線的畫布。這款單品採用引人注目的緊身胸衣細節和奢華的絲綢襯裡，既是一件盔甲，又是一種誘惑，專為那些以泰然自若和力量掌控空間的人士而設計。',
        btnUrl:'#',
    }
    
]

const stylistCardData = [
    {
        imgUrl : '../assets/images/stylist/Brian.png',
        name : 'Brian',
        description: '以大膽創新的設計理念而聞名,擁有超過20年的時尚造型經驗。曾經獲得多個國際設計獎項,包括「2023年度造型師獎」。擅長將前衛的設計元素融入實穿的服裝中,他的作品經常被時尚界的權威刊物所推崇。',
    },
    {
        imgUrl:'../assets/images/stylist/Kate.png',
        name:'Kate',
        description:'擁有15年的專業經驗。她以其優雅的剪裁和細膩的手工藝著稱,曾為多位名人設計過紅毯造型。設計風格兼具現代感與古典美,作品經常在時尚展覽中亮相,受到業界廣泛讚譽。',
    },
    {
        imgUrl:'../assets/images/stylist/Elena.png',
        name:'Elena',
        description:'以其獨特的創意和前瞻性的設計理念迅速崛起。儘管她的職業生涯僅有五年,但她已經在多個時尚比賽中獲得冠軍,包括「新銳造型師獎」。擅長使用創新的面料和獨特的剪裁技術,為客戶創造出令人驚豔的造型。',
    },
    {
        imgUrl:'../assets/images/stylist/Shen.png',
        name:'Shen',
        description:'經驗豐富的造型師,擁有超過20年的行業經驗。他以其精緻的色彩搭配技術而聞名。曾經為知名品牌擔任首席造型師,並且在時尚界的各大活動中擔任評委。設計風格融合了東方元素與西方現代感,深受客戶喜愛。',
    },
]
const shopProductCardData = [
    {
        imgUrl: '../assets/images/sweatpants.png',
      name: '飛行員運動褲',
      price: 69656,
      productUrl :"#",
    },
    {
        imgUrl: '../assets/images/BIA-corset.png',
        name: 'BIA 緊身胸衣',
        price: 32084, 
        productUrl :"#",

    },
    {
        imgUrl: '../assets/images/corset.png',
        name: '復古飾面緊身胸衣',
        price: 97116, 
        productUrl :"#",

    },
    {
        imgUrl: '../assets/images/belt.png',
        name: '緊身胸衣腰帶',
        price:10979, 
        productUrl :"bustier-belt.html",

    },
    {
        imgUrl: '../assets/images/dress.png',
        name: '絲綢垂墜連身裙',
        price:65448, 
        productUrl :"#",

    },
]
//carousel
//scale

const popularUl = document.querySelector('#popularUl');
const popularArrowL = document.querySelector('.popular-arrow-l');
const popularArrowR = document.querySelector('.popular-arrow-r');
const popularMbItem = document.querySelector('#popularMbItem');

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
    
        renderContent(popularUl,popularHTML);
        enlargePic();
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
        renderContent(popularUl,popularHTML);
        enlargePic();

    })
}

function enlargePic(){
    const popularLi = document.querySelectorAll('.popular-li');
    const popularImg = document.querySelectorAll('.popular-img');
    const popularDesc = document.querySelectorAll('.popular-txt');
    popularLi.forEach((item,index) =>{
            if (index === currentLargePic) {  
                item.classList.add('lg-pic');  
                popularImg[index].style.width = '100%';
                popularDesc[index].style.display = 'block';

            } else {
                item.classList.remove('lg-pic');  
                popularDesc[index].style.display = 'none';

            }             
    })
}

const assamblePopularItem = (popularData)=>{
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
                    <a href=${item.btnUrl} class="fw-bold text-decoration-underline">查看細節</a>
                </div>
            </li>`;
        str += popularContent;
    });
    return str;
}
const popularHTML = assamblePopularItem(popularPictureArr);


const renderContent = (object, content) =>{
    if(content && object){
        object.innerHTML = content;
    }
}
renderContent(popularUl,popularHTML);
enlargePic();


const assamblePopularMbItem = (popularData)=>{
    let str = '';
    const limit = 4;
    popularData.forEach((item,index)=>{
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
    return str;
}
const popularMbItemHtml = assamblePopularMbItem(popularPictureArr); 

assamblePopularMbItem(popularPictureArr);
renderContent(popularMbItem,popularMbItemHtml);


const stylistCard = document.querySelector('#stylistCard');


const assambleStylistContent = (data)=>{
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
        return str;
}

assambleStylistContent(stylistCardData);
const stylistHtml = assambleStylistContent(stylistCardData);
renderContent(stylistCard, stylistHtml );

const shopProductCard = document.querySelector('#shopProductCard');


const assambleProductContent = (data)=>{
    let str ='';
    const renderTimes = shopProductCard.dataset.times;
    if(renderTimes){
        for(let i=0; i < renderTimes; i++){
            shopProductCardData.forEach(item =>{
                const productContent = ` <div class="col">
                            <a href=${item.productUrl}>
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

    }
    return str;
}

const productHtml = assambleProductContent(shopProductCardData);

assambleProductContent(shopProductCardData);
renderContent(shopProductCard,productHtml );



const productAmount = document.querySelector('#productAmount');
let amount = 1;

productAmount.addEventListener('click',(e)=>{
    const click = e.target;
    const digit = document.querySelector('#productAmount .digit');
    if(click.tagName.toLowerCase() === 'i'){
        if(click.classList.contains('bi-dash-lg') && amount >1){
            amount --;
            digit.textContent = amount;
        }if(click.classList.contains('bi-plus-lg')){
            amount ++;
            digit.textContent = amount;
        }
    }
})












