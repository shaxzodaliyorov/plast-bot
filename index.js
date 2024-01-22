const Telegram = require('node-telegram-bot-api')


const token  = "6342670090:AAF6Mes0rbvKcCLwxRyCgmwFMNRYTKTUseM"

const opt = {
    polling:true
}

const bot = new Telegram(token,opt)

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const replyMarkup = {
        keyboard: [
            [{
                text: "Ro'yxatdan o'tish",
                request_contact: true
            }]
        ],
        resize_keyboard: true,
        one_time_keyboard: true
    };

    bot.sendMessage(chatId, "Iltimos Ro'yxatdan o'ting", { reply_markup: replyMarkup });
});


bot.on('contact', (msg) => {
    const chatId = msg.chat.id;
    const phoneNumber = msg.contact.phone_number;
    bot.sendMessage(chatId, `Telefon raqamingiz: ${phoneNumber}`);
});