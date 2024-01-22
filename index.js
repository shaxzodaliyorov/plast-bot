import Telegram from "node-telegram-bot-api";
import { app } from "./app.js";
import userModel from "./model/user.model.js";

const token = "6342670090:AAF6Mes0rbvKcCLwxRyCgmwFMNRYTKTUseM";

const opt = {
  polling: true,
};

const bot = new Telegram(token, opt);

app();

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const replyMarkup = {
    keyboard: [
      [
        {
          text: "Ro'yxatdan o'tish",
          request_contact: true,
        },
      ],
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  };

  bot.sendMessage(chatId, "Iltimos Ro'yxatdan o'ting", {
    reply_markup: replyMarkup,
  });
});

bot.on("contact", async (msg) => {
  const chatId = msg.chat.id;
  const { phone_number, first_name, user_id } = msg.contact;
  console.log(msg);
  const phoneNumber = msg.contact.phone_number;

  const findUser = await userModel.find({ phone: phone_number });

  if (!findUser) {
    const user = await userModel.create({
      fullName: first_name,
      phone: phone_number,
      userID: user_id,
    });
  }

  bot.sendMessage(chatId, `Telefon raqamingiz: ${phoneNumber}`);
});
