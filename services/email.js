const nodemailer = require('nodemailer');

async function sendMail({from,to,subject,text,html}){
    //let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host:"smtp-relay.sendinblue.com",
        port:587,
        secure:false,
        auth:{
            user:process.env.USER, // generated ethereal user
            pass:process.env.PASSWORD, // generated ethereal password
        }
    });
    let info = await transporter.sendMail({
        from:`TruelyShare <${from}>`,
        to:to,
        subject:subject,
        text:text,
        html:html
    });
    console.log("Message sent: %s", info.messageId);
}

 
module.exports = sendMail;