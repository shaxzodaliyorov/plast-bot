import Telegram from "node-telegram-bot-api";
import { app } from "./app.js";
import userModel from "./model/user.model.js";

const token = "6342670090:AAF6Mes0rbvKcCLwxRyCgmwFMNRYTKTUseM";

const opt = {
  polling: true,
};

const bot = new Telegram(token, opt);

app();

const superAdminID = 6565641426;

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
  const phoneNumber = msg.contact.phone_number;

  const keyboardButtons = () => {
    const keyboards = [
      ["Mahsulotlar"],
      ["Mening Buyrutmalarim", "Izoh Qoldirish"],
    ];

    if (chatId === superAdminID) {
      keyboards.push(["Admin Panel"]);
      return keyboards;
    }
    return keyboards;
  };

  const findUser = await userModel.find({ phone: phone_number });

  if (!findUser) {
    const user = await userModel.create({
      fullName: first_name,
      phone: phone_number,
      userID: user_id,
    });
  }

  const replyMarkup = {
    keyboard: keyboardButtons(),
    resize_keyboard: true,
    one_time_keyboard: true,
  };

  bot.sendMessage(chatId, `Telefon raqamingiz: ${phoneNumber}`, {
    reply_markup: replyMarkup,
  });
});

bot.onText(/Admin Panel/, async (msg) => {
  const chatId = msg.chat.id;
  const keyboardButtons = () => {
    const buttons = [
      ["Mahsulot Qo'shish", "Barcha Mahsulotlar"],
      ["Adminlar", "Admin Qo'shish"],
    ];

    if (chatId === superAdminID) {
      return buttons;
    }

    return [];
  };

  const replyMarkup = {
    keyboard: keyboardButtons(),
    resize_keyboard: true,
    one_time_keyboard: true,
  };

  const replayMessage =
    chatId === superAdminID
      ? "Super Admin Paneliga Xush kelibsiz"
      : "Siz Admin Emasiz";

  bot.sendMessage(chatId, replayMessage, {
    reply_markup: replyMarkup,
  });
});

bot.onText(/Mahsulot Qo'shish/, async (msg) => {
  const chatId = msg.chat.id;
  // Foydalanuvchi yuborgan rasm so'roqni jo'natish
  //   const keyboard = {
  //     reply_markup: {
  //       one_time_keyboard: true,
  //       keyboard: [[{ text: "Rasmni yuborish", request_contact: true }]],
  //     },
  //   };

  bot.sendMessage(chatId, "Rasmni yuboring:");

  bot.on("photo", (msg) => {
    const chatId = msg.chat.id;
    const photoId = msg.photo[msg.photo.length - 1].file_id;
    bot.sendMessage(chatId, "Rahmat! Rasmni qabul qildim", {
      reply_to_message_id: msg.message_id,
    });
    bot.sendMessage(chatId, "Endi Mahsulot Nomini kiriting:");
    bot.on("text", (ms) => {
      console.log(ms);
    });
  });
});
