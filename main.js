//Login
var Modal = document.querySelector('.modal_js')
const LoginLink = document.querySelector('.login_link')
const CloseIcon = document.querySelector('.close_js')
const ContainerModal = document.querySelector('.container_js')
function showForm() {
    Modal.classList.add('open')
}

function hideForm() {
    Modal.classList.remove('open')
}

LoginLink.addEventListener('click' , showForm )
CloseIcon.addEventListener('click',hideForm )
Modal.addEventListener('click',hideForm )
ContainerModal.addEventListener('click',function (event){
 event.stopPropagation()
})


// slide
window.addEventListener( "load" , function(){
    const PrevBtn = this.document.querySelector('.prev-icon')
    const NextBtn = this.document.querySelector('.next-icon')
    const DotItem = this.document.querySelectorAll('.dot_item')
    const ItemImg = this.document.querySelectorAll('.item_img')
    const MainSlide = this.document.querySelector('.main_slider')
    const ListItem = this.document.querySelector('.list_items')
    const SliderWrap = this.document.querySelector('.slide_wrapper')
    const widthOfItem = ItemImg[0].offsetWidth ;
    const lengthImg = ItemImg.length ;
    let position = 0;
    let index = 0 ;

    NextBtn.addEventListener('click' , function(){
        ChanceSlide(1) ;
    })

    PrevBtn.addEventListener('click' , function(){
        ChanceSlide(-1) ;
    })
   DotItem.forEach(e => e.addEventListener('click' , function(){
    DotItem.forEach(function(e){
        e.classList.remove('active')
    })
        const slideIndex = parseInt(e.dataset.index) ;
        DotItem[slideIndex].classList.add('active')
        index = slideIndex ;
        position = -1 * index * widthOfItem;
        ListItem.style =  ` transform: translateX(${position}px)`;

    })
    );
    function ChanceSlide(X) {
        if( X === 1){
            if( index >= lengthImg -1 ) return ;
            position = position - widthOfItem ;
            console.log(position) ;
            ListItem.style =  ` transform: translateX(${position}px)`;
            index++ ;
        }
        else if (X === -1){
            if( index <= 0 ) return ;
            position = position + widthOfItem ;
            console.log(position) ;
            ListItem.style =  ` transform: translateX(${position}px)`;
            index-- ;
        }
        DotItem.forEach(function(e){
            e.classList.remove('active')
        })
        DotItem[index].classList.add('active')
    }

    runSlide =  function(){
        index++ ;
        if( index >= lengthImg  ) 
        index = 0;
        position = -1 * index * widthOfItem;
        ListItem.style =  ` transform: translateX(${position}px)`;
        DotItem.forEach(function(e){
            e.classList.remove('active')
        })
        DotItem[index].classList.add('active')
        
    }
setInterval(runSlide,6000);

})
//slide_product
const SlideProductContainer = document.querySelector('.slide_product-container')
const NextSlideBtn = document.querySelector('.next_product-icon')
const PrevSlideBtn = document.querySelector('.prev_product-icon')
const SlideProduct = document.querySelector('.slide_product-list')
const SlideItem = document.querySelectorAll('.slide_product-item')
// SlideItem.forEach(function (e) {
//     e.style.offsetWidth = SlideProductContainer.offsetWidth / 3 ;
//     console.log(e.style.offsetWidth)
// })
const WidthProduct = SlideItem[0].offsetWidth
const LenghtProduct = SlideItem.length
let WidthProductMove = WidthProduct  + 59;
console.log(LenghtProduct)
let PositionProduct = 0 ;
let indexProduct = 0;

NextSlideBtn.addEventListener('click' ,function() {
    ChanceProduct (1);
})
PrevSlideBtn.addEventListener('click' ,function() {
    ChanceProduct (-1);
})

function ChanceProduct(Y) {
    if(Y ===  1){
         if(indexProduct >= LenghtProduct -3  ) return ;
        PositionProduct = PositionProduct - WidthProductMove ;
        SlideProduct.style =  ` transform: translateX(${PositionProduct}px)`;
        indexProduct++ ;
    }
    else if(Y === -1){
        if(indexProduct <= 0  ) return ;
        PositionProduct = PositionProduct + WidthProductMove ;
        SlideProduct.style =  ` transform: translateX(${PositionProduct}px)`;
        indexProduct-- ;
    }
}