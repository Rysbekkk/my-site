const first = () =>{
    const swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        spaceBetween: 30,
    
        // effect: 'fade',
    
        // effect: "cube",
        // grabCursor: true,
        // cubeEffect: {
        //     shadow: true,
        //     slideShadows: true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94,
        // },
    
        // effect: 'flip',
        // grapCursor: true,
    
        // effect: 'cards',
        // grapCursor: true,
    
    
        // autoplay: {
        //     delay:2500,
        //     diabaleOnInteraction: true,
        // }
    
        // slidesPerView: 3,
    
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    
    
          breakpoints: {
       
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            }
        
          }
    
    
      });
    
    
}


first()


const second = () =>{

    const swiper = new Swiper(".secondSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        spaceBetween: 30,
    
        // effect: 'fade',
    
        // effect: "cube",
        // grabCursor: true,
        // cubeEffect: {
        //     shadow: true,
        //     slideShadows: true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94,
        // },
    
        // effect: 'flip',
        // grapCursor: true,
    
        effect: 'cards',
        grapCursor: true,
    
    
        // autoplay: {
        //     delay:2500,
        //     diabaleOnInteraction: true,
        // }
    
        // slidesPerView: 3,
    
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        //   },

      });



      const data = [
        {
          name: '1980',
          img: 'https://www.autotrader.com/wp-content/uploads/2020/02/257819.jpg'
        },
        {
          name: '1985',
          img: 'https://a.d-cd.net/ae73e2es-960.jpg'
        },
        {
          name: '1990',
          img: 'https://i.pinimg.com/736x/4c/d0/1d/4cd01d1011b516aa840cd0659bb7cea3.jpg'
        },
        {
          name: 'Lond1992on',
          img: 'https://s.auto.drom.ru/i24202/c/photos/fullsize/lexus/ls400/lexus_ls400_641309.jpg'
        } ,
        {
          name: '1995',
          img: 'https://journal.classiccars.com/cdn-cgi/mirage/6773c0d926f5bd88cf90219067cc14eb0e95ec2e40266921eb282dd4b82e2d3f/1280/https://ccnwordpress.blob.core.windows.net/journal/2019/06/15978979-1995-lexus-sc400-std.jpg'
        }
      ]
    
    
    
    
    
    
    const output = document.querySelectorAll('.swiper-wrapper')[1]
    
    
     data.forEach(el => {
        const slide =document.createElement('div')
        const text = document.createElement('p')
        const image = document.createElement('img')
    
    
        slide.className= 'swiper-slide'
        text.textContent = el.name
        image.src = el.img
    
        output.append(slide)
        slide.append(text,image)
    
        
    });
    
    



}

second();