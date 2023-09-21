const express = require('express')
var bodyParser = require('body-parser')
const path = require('path')
const app = express()
var cors = require("cors");
require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')))
app.use(cors());

const getMailConfig=()=>{
  return{
    fromMailId:'noreply.bharathividyalaya@gmail.com',
    mailClient:'468302005147-1hbedm44798vp2re2f4cqt6utjs15mt4.apps.googleusercontent.com',
    mailSec:'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',
    mailRefresh:'1//04QheQEkO4xNuCgYIARAAGAQSNwF-L9IrIDvEGC-K6nYQNou3UOYx4Og_KKJK7oxmFQGAPKiUXi8neZNvpK9Ujq-SLzb01g7suBk',
    displayMail:'Admin Team',
  }
}
const formHtmlBody=(data)=>{
  return `<p>Dear Admin,<br/>Following is the details of the ${data.student?'Student':'Teacher'} willing to join us.</p>
  <table>
  <tr><td><b>Name:</b></td><td>${data.name}</td></tr>
  <tr><td><b>Mobile:</b></td><td>${data.mobile}</td></tr>
  <tr><td><b>Email:</b></td><td>${data.email?data.email:'-'}</td></tr>
  <tr><td><b>Comments:</b></td><td>${data.comments?data.comments:'-'}</td></tr>
  </table><br/><b>Thanks & Regards<br/>Admin Team</b>`
}
const createTransporter = async () => {
  const config= getMailConfig()
  const {fromMailId,mailClient,mailSec,mailRefresh,displayMail}=config;
  const oauth2Client = new OAuth2(
    mailClient,
    mailSec,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: mailRefresh
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        logger.error(JSON.stringify(err));
        reject();
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: fromMailId,
      accessToken,
      clientId: mailClient,
      clientSecret: mailSec,
      refreshToken: mailRefresh
    }
  });
  return transporter;
};

const sendEmail = async (emailOptions) => {
  try{
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions);
  } catch(err){
    console.log(err);
  }
};
app.post('/api/sendmail',async(req,res)=>{
  console.log(req.body)
  const config= getMailConfig()
  const {attachment,details}=req.body;
  const {fromMailId,displayMail}=config;
  const mailOptions = {
    from: `${displayMail}<${fromMailId}>`, // TODO: email sender
    to: 'jefferson.sam93@gmail.com', // TODO: email receiver
    cc: ['bharathividyalayanps@gmail.com','mercydabora.cool60@gmail.com'],
    //bcc: bcc,
    subject: 'Reach Us-reg',
    //text: body,
    html: details?formHtmlBody(details):'',
    attachments: attachment?attachment:null,
  };
  console.log(mailOptions);
  res.send({success:true,data:"Success"})
  await sendEmail({...mailOptions});
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
const { PORT } = process.env;
app.listen(PORT?PORT:8080, () => {
console.log(`server started on port ${PORT ? PORT : 8080}`);
});