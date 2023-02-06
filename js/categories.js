const dataAlt = [

    {
        name: 'LEXUS 570',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYY3CpzKFtiTO82pCwzphtj1I825zfdSyUEw&usqp=CAU',
        price: 7000000,
        category: 'LX'
    },
    {
        name: 'LEXUS 470',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrBFcn3Ug_IhXX_lvfoCpS2iKPse1AhIa_Q&usqp=CAU',
        price: 5000000,
        category: 'LX'
    },
    {
        name: 'LEXUS 600',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCt911bzpbSfOHxTySQNjMeSl6efV3WLlGMw&usqp=CAU',
        price: 4500000,
        category: 'LX'
    },
    {
        name: 'ES 350',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BGUtK442D16HqzsNeS_Z9epZNdXQYnIZdw&usqp=CAU',
        price: 4000000,
        category: 'ES'
    },
    {
        name: 'ES 300',
        img: 'https://cdn.wheel-size.com/automobile/body/lexus-es-2015-2018-1550562274.19.jpg',
        price: 3500000,
        category: 'ES'
    },
    {
        name: 'RX 350',
        img: 'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/881c1beb-9ed6-458b-a3d2-3fe2489b61ef/6999330b-15da-4052-a4b5-52aa5d564b68.png',
        price: 5000000,
        category: 'RX'
    },
    {
        name: 'RX 300',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTParWLtWdW_PGwbxfmTT4uPTd-zg28YkHIMQ&usqp=CAU',
        price: 3500000,
        category: 'RX'
    },
    {
        name: 'ES 330',
        img: 'https://www.cars.com/i/large/in/v2/stock_photos/c3c836e5-c91a-4418-81f0-9472ad5c7bb2/d8c85bd7-321e-45d0-892c-79e3a1d1c769.png',
        price: 2000000,
        category: 'ES'
    },
    {
        name: 'RX 450',
        img: 'https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25f42530e1e3d8e88cb/stills_0640_png/MY2022/15325/15325_st0640_116.png',
        price: 6000000,
        category: 'RX'
    },
]



const output = document.querySelector('.output')

const categoriesRender = (data) => {

    output.innerHTML = ''

    console.log(data);
    data.forEach(el => {
        const image = document.createElement('img')
        const title = document.createElement('h2')
        const price = document.createElement('h2')
        const category = document.createElement('h2')
        const button = document.createElement('button')

        const wrap = document.createElement('div')

        image.src = el.img
        title.textContent = el.name
        category.textContent = el.category
        price.textContent = el.price
        button.textContent = 'Цена'

        category.className = 'show'
        price.className = 'show'
        wrap.className = 'wrap activeShow'

        button.addEventListener('click', () => {
            wrap.classList.toggle('activeShow')

            button.textContent = wrap.classList.contains('activeShow')
                ? 'Цена' : 'закрыть'
        })

        wrap.append(image, title, button, category, price)
        output.append(wrap)
    })

}
categoriesRender(dataAlt)




const renderButtons = () => {
    const categoryItems = ['все', 'LX', 'ES', 'RX']
    const buttonWrap = document.querySelector('.categories__choise')

    categoryItems.forEach(el => {
        console.log(el);
        const button = document.createElement('button')
        button.className = 'btns'
        button.textContent = el
        console.log(button);

        button.addEventListener('click', () => {

            if (el === 'все') {
                categoriesRender(dataAlt)
            } else {
                const result = dataAlt.filter(item => {
                    return item.category === el
                })
                categoriesRender(result)
            }
        })

        buttonWrap.append(button)
    })

}
renderButtons()


const searchItems = () => {
    const input = document.querySelector('#search')
    const form = document.querySelector('#form')


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const filteredItems = dataAlt.filter(el => {
            return el.name.toLowerCase().includes(input.value.toLowerCase())
        })

        if (filteredItems.length > 0) {
            categoriesRender(filteredItems)
        } else {
            output.textContent = 'В наличии нет'
        }


    })

}
searchItems()

// console.log(btns);







// console.log(result);
