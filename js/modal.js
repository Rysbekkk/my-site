// poluchit knopku
const modalButton = document.querySelector('.modalButton')
const modal = document.querySelector('.modal')
const backdropModal = document.querySelector('.modalBackdrop')
const krestik = document.querySelector('.modalCloseButton')
const apply = document.querySelector('.modalApplyButton')
const thankYou = document.querySelector('.thankYou')
const modalContent = document.querySelector('.modalContent')
const form = document.querySelector('form')
const message = document.querySelector('#inputMessage')
const number = document.querySelector('#inputNumber')
const bot = {
    TOKEN:'6169884295:AAFeQZQZJLG89JttrWuMyHLs4FMZurarA7g',
    chatID:'-857092309'
}

// https://app.jivosite.com/join.html?token=615993cbaf5f0701baee9bfd33f90483.2159364

let time

const clearInput = () =>{
    message.value=''
    number.value=''
}

form.addEventListener('submit', (e) => {
    e.preventDefault()



    if(message.value && number.value && message.value.trim()) {
        const telegramMessage = `sms: ${message.value} nomer:${number.value}`
        const TELEGRAM_API = 'https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${telegramMessage}'
        fetch(TELEGRAM_API)
            .then(response => {
                if (response.ok) {
                    thankYou.innerHTML = `
        <img src = '123.png' style="height: 100px; display: block; position: relative; margin: auto; top: 0;bottom: 0;left: 0;right: 0;">
        <h2>Ваше сообщение отправлено</h2> 
        <p>Мы вам обязательно перезвоним</p>
        `
        clearInput() 
                }
            }, error => {
                  thankYou.innerHTML = `
                  <img src = '1234.jpg' style="height: 90px; display: block; position: absolute; margin: auto; top: 0;bottom: 0;left: 0;right: 0;">
                  <h2>Ваше сообщение не отправлено</h2> 
                  <p>К сожелению произошла ошибка повторите попытку</p>
                  `
        clearInput()
            })

    }else {
        // alert ('Not valitated')
    }
  

            
})



modalButton.addEventListener('click', () => {
    backdropModal.classList.add('modalBackdropActive')
    modal.classList.add('modalActive')
    modalContent.classList.remove('hideContent')
    thankYou.innerHTML = ''
    
})


const removeModalClasses = () => {
    if (time) {
        clearTimeout(time)
    }
    backdropModal.classList.remove('modalBackdropActive')
    modal.classList.remove('modalActive')
    setTimeout(thankyouFunc, 300)
}

backdropModal.addEventListener('click', removeModalClasses)

krestik.addEventListener('click', removeModalClasses)

modal.addEventListener('click', (e) => {
    e.stopPropagation()
})

apply.addEventListener('click', () => {
    modalContent.classList.add('hideContent')
    thankYou.innerHTML = ''
})



