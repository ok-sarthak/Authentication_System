import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";


dotenv.config();

// console.log(process.env.MAILTRAP_TOKEN);


export const mailtrapClient = new MailtrapClient({
	endpoint: process.env.MAILTRAP_ENDPOINT,
	token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
	email: "noreply@vacantvectors.tech",
	name: "Vacant Vectors",
};



// const recipients = [
//   {
//     email: "csarthak12op@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     template_uuid: "02de2d9d-c38f-4623-9c6d-57f4cb5b0388",

//     template_variables: {

//     }
//   })
//   .then(console.log, console.error);