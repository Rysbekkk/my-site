// Accordion All tabs open
// const accordion = () =>{
//     const accordion = document.querySelectorAll('.accordion__wrap')


//         accordion.forEach(el=>{
//             el.addEventListener('click',()=>{
//                 el.classList.toggle('accordion__active')
//              })
//         })
//         }
// accordion()
// Accordion All tabs open


const data = [
    {
        title: 'О МАРКЕ',
        text: `Lexus (яп. レクサス рэкусасу) (рус. «Ле́ксус») — марка премиальных автомобилей, производимых японской корпорацией Toyota Motor. Автомобили бренда продаются более чем в 90 странах мира[1]. Lexus присутствует на российском рынке с 2002 года[2], на 25 января 2021 года у компании более 50 дилеров на территории страны.`
    },
    {
        title: 'Lexus LX',
        text: `Lexus LX — полноразмерный 8-местный внедорожник бренда Lexus. По состоянию на январь 2021 г. выпускается уже третье поколение. Основные рынки сбыта — Россия, Северная Америка, Ближний Восток, Китай, Индонезия, Филиппины, Австралия и Новая Зеландия. На российском рынке LX стабильно входит в тройку самых продаваемых автомобилей бренда[`,
    },
    {
        title: 'Lexus RX',
        text: `
        Поколения Lexus RX: 
        
        1-е поколение: RX 300 (1997—2003 гг.)
        2-е поколение: RX 300, RX 330, RX 400h (2003—2009 гг.)
        3-е поколение: RX 270, RX 350, RX 450h (2008—2015 гг.)
        4-е поколение: RX 300, RX 350, RX 450h (2015 г. — н. в.)`
    },
    {
        title: 'Lexus ES',
        text: `Lexus ES — среднеразмерный седан бизнес-класса, выпускаемый с 1989 года.


        Lexus ES
        Поколения:
        
        1-е поколение: ES 250 (1989—1991 гг.)
        2-е поколение: ES 300 (1991—1996 гг.)
        3-е поколение: ES 300 (1996—2001 гг.)
        4-е поколение: ES 300, ES 330 (2001—2006 гг.)
        5-е поколение: ES 350 (2007—2011 гг.)
        6-е поколение: ES 250, ES 350 (2012 г. — н. в.)
        7-е поколение: ES 200, ES 250, ES 350 (2018 г. — н. в.)
        Двигатель укомплектован шестиступенчатой автоматической трансмиссией ECT-I. Индекс аэродинамического сопротивления ES равен 0,28. Производится в Японии на заводе Кюсю в Фукуоке. По габаритам находится между седанами GS и LS. ES — первый переднеприводной Lexus в современной линейке.`
    },

]

const accardeonOutput = document.querySelector('.accordion')

console.log("hello: ", output)

const accordionRender = () => {
    data.forEach(el => {
        const wrap = document.createElement('div')
        const header = document.createElement('div')
        const name = document.createElement('p')
        const img = document.createElement('img')
        const contentWrap = document.createElement('div')
        const content = document.createElement('p')

        wrap.className = 'accordion__wrap'
        header.className = 'accordion__name'
        img.className = 'plus'
        img.src = 'https://logos-world.net/wp-content/uploads/2021/09/Lexus-Logo.png'
        contentWrap.className = 'accordion__content'

        name.textContent = el.title
        content.textContent = el.text

        contentWrap.append(content)
        header.append(name, img)
        wrap.append(header, contentWrap)
        accardeonOutput.append(wrap)
    })
}
accordionRender()


const accordion = () => {
    const accordion = document.querySelectorAll('.accordion__wrap')
    console.log(accordion);
    for (let i = 0; i < accordion.length; i++) {
        // console.log(`first: ${i}`);

        accordion[i].addEventListener('click', () => {
            accordion.forEach((el, index) => {
                // console.log(`second:${index}`);
                if (i === index) {
                    el.classList.toggle('accordion__active')
                } else {
                    console.log('accordion close ' + index);
                    el.classList.remove('accordion__active')
                }
            })
        })
    }
}
accordion()


// e.stopPropagation()

