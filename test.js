const Telegram = require('node-telegram-bot-api')


const token  = "6342670090:AAF6Mes0rbvKcCLwxRyCgmwFMNRYTKTUseM"

const opt = {
    polling:true
}

const bot = new Telegram(token,opt)


// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     const replyMarkup = {
//         keyboard: [
//             ['Menu'], 
//             ['Meing Buyrutmalarim'], 
//             ['Fikir Bil1dirish', 'Sozlamalar']
//         ],
//         resize_keyboard: true,
//         one_time_keyboard: true
//     };

//     bot.sendMessage(chatId, 'Quyidagilardan birini tanlang', { reply_markup: replyMarkup });
// });

// bot.onText(/Menu/, (msg) => {
//     const chatId = msg.chat.id;
//     const menuReplyMarkup = {
//         keyboard: [
//             ['Mening Manzillarim'],
//             ['Geolokatsiya','Orqaga']
//         ],
//         resize_keyboard: true,
//         one_time_keyboard: true
//     };

//     bot.sendMessage(chatId, 'You selected Menu. Now choose an option:', { reply_markup: menuReplyMarkup });
// });

// bot.onText(/Mening Manzillarim/, (msg) => {
//     const chatId = msg.chat.id;
    
//     const locationRequest = {
//         text: 'Please share your location:',
//         reply_markup: {
//             keyboard: [[{ text: 'Share Location', request_location: true }]],
//             one_time_keyboard: true,
//             resize_keyboard: true
//         }
//     };

//     bot.sendMessage(chatId, locationRequest.text, { reply_markup: locationRequest.reply_markup });
// });

// bot.on('location', (msg) => {
//     const chatId = msg.chat.id;
//     const latitude = msg.location.latitude;
//     const longitude = msg.location.longitude;

//     bot.sendMessage(chatId, `Received location: Latitude - ${latitude}, Longitude - ${longitude}`);
// });


bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const replyMarkup = {
        keyboard: [
            ['Ro\'yxatdan o\'tish']        
        ],
        resize_keyboard: true,
        one_time_keyboard: true
    };

    bot.sendMessage(chatId, "Iltimos Ro'yxatdan o'ting", { reply_markup: replyMarkup });
});
    