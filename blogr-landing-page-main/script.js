const MobileBtn = document.querySelector('#mobileBtn');
const headerNavMobile = document.querySelector('#NavMobile');
const productNavMobile = document.querySelector('.product-nav-mobile');
const companyNavMobile = document.querySelector('.company-nav-mobile');
const connectNavMobile = document.querySelector('.connect-nav-mobile');
const productOptions = document.querySelector('.product-options');
const companyOptions = document.querySelector('.company-options');
const connectOptions = document.querySelector('.connect-options');
const iconDropdownProduct = document.querySelector('.icon-dropdown-product');
const iconDropdownCompany = document.querySelector('.icon-dropdown-company');
const iconDropdownConnect = document.querySelector('.icon-dropdown-connect');

const modalNavMobile = ()=>{
    headerNavMobile.classList.toggle('active');
    
   if (MobileBtn.getAttribute('src') == './images/icon-close.svg'){
       MobileBtn.src ='./images/icon-hamburger.svg'      
   }else{
    MobileBtn.src = './images/icon-close.svg'
   };
};



const productOptionsShow = ()=>{
    productOptions.classList.toggle('active');
    iconDropdownProduct.classList.toggle('active');
};

const companyOptionsShow = ()=>{
    companyOptions.classList.toggle('active');
    iconDropdownCompany.classList.toggle('active');
};

const connectOptionsShow = ()=>{
    connectOptions.classList.toggle('active');
    iconDropdownConnect.classList.toggle('active');
};

MobileBtn.addEventListener('click', modalNavMobile);

productNavMobile.addEventListener('click', productOptionsShow);

companyNavMobile.addEventListener('click', companyOptionsShow);

connectNavMobile.addEventListener('click', connectOptionsShow);



