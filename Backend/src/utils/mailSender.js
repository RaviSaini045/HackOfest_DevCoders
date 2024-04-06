import nodemailer from "nodemailer";
import { ApiError } from "./ApiError.js";

const mailSender = async(email,subject,body) => {
    const transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                secure: true,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })
    const info = await transporter.sendMail({
        from:"PeGo",
        to: `${email}`,
        subject: `${subject}`,
        html: `${body}`, 
    })
    if(!info)
        throw new ApiError(500,"Unable to send Email")
};

export {
    mailSender,
}