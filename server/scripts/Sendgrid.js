const sgMail = require('@sendgrid/mail');
const conf = require('../config/config')

//const BASE_URL = "http://IRecycle.com"
const BASE_URL = "http://localhost:4000"

let template1 = `<div>        
<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="font-size:13px;font-family:helvetica">
    <tbody><tr>
        <td>
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-image:linear-gradient(0deg,#211937 0%,#211937 100%);background-image:-moz-linear-gradient(0deg,#211937 0%,#211937 100%);background-image:-webkit-linear-gradient(0deg,#211937 0%,#211937 100%);background-image:-ms-linear-gradient(0deg,#211937 0%,#211937 100%)">
                <tbody><tr>
                    <td width="60%" style="padding:20px 0px 20px 20px">
                        <a href="https://IRecycle.com">
                          <!--img width="150" src="https://IRecycle.com/assets/img/irecycleLogo.png" class="CToWUd"-->
                          <h2>IRecycle</h2>  
                        </a>
                    </td>
                    <td width="40%" style="color:#fff;text-align:right;padding-right:10px">

                    </td>
                </tr>
            </tbody></table>

            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-height:200px">
                <tbody><tr>
                    <td style="padding:20px;color:#8c8c8c;border:1px solid #eee" valign="top">`

let template2 = `<p>Please do not reply to this message. This email message was sent from a notification-only address that can not accept incoming email.</p>
                        <br>
                        <p>
                            Regards,<br>
                            Team IRecycle <br>
                        </p>
                    </td>
                </tr>
            </tbody></table>

            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-image:linear-gradient(0deg,#211937 0%,#211937 100%);background-image:-moz-linear-gradient(0deg,#211937 0%,#211937 100%);background-image:-webkit-linear-gradient(0deg,#211937 0%,#211937 100%);background-image:-ms-linear-gradient(0deg,#211937 0%,#211937 100%)">
                <tbody><tr>
                    <td style="padding:10px;color:#ffffff">
                        <p>
                            Need help? Get in touch with our Support Team! You received this message because this email was used to create an account with IRecycle. To ensure our emails continue to reach your inbox, please add our email address (hello@IRecycle.com) to your address book</p>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
</tbody></table>
</div>`

let footer2 = `<br>
                        <p>
                            Regards,<br>
                            Team IRecycle <br>
                        </p>
                    </td>
                </tr>
            </tbody></table>

            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-image:linear-gradient(0deg,#211937 0%,#211937 100%);background-image:-moz-linear-gradient(0deg,#211937 0%,#211937 100%);background-image:-webkit-linear-gradient(0deg,#211937 0%,#211937 100%);background-image:-ms-linear-gradient(0deg,#211937 0%,#211937 100%)">
                <tbody><tr>
                    <td style="padding:10px;color:#262422">
                        <p>
                          Need help? Get in touch with our Support Team! To ensure our emails continue to reach your inbox, please add our email address (hello@IRecycle.cash) to your address book</p>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
</tbody></table>
</div>`


module.exports = {
  verificationEmail: function (email, code, name, emailCode) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: 'Welcome to irecycle!',
      text: 'irecycle',
      html: template1 + `
      <div style="font-size:16px;color:#4776e6">
        Hello ${name},<br><br>
      </div>
      <p>Thank you for creating an Account at irecycle!</p>
      <p style="margin-bottom: 30px">Use the password below:</p>
      <p>${code}</p>
      <p style="margin-bottom: 30px">Email verification:</p>
      <a href="${BASE_URL}/confirm?code=${emailCode}">And Confirm your email here</a>
      ` + template2,
    };
    sgMail.send(msg);

  },
  withdraw: function (email, userDetails) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg2 = {
      to: 'odtorres891118@gmail.com',
      bcc: [{ email: 'otorres@irecycle.com', name: 'Oscar' }],
      from: 'irecycle <info@irecycle.com>',
      subject: 'Withdraw Request',
      text: 'irecycle',
      html: template1 + `
      <div style="font-size:16px;">
         ${email},<br><br><h2>User Details</h2><br><br>${userDetails}
      </div>
      ` + template2,
    };
    sgMail.send(msg2);
  },
  simpleVerificationEmail: function (email, name, emailCode) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: 'Welcome to irecycle !',
      text: 'irecycle',
      html: template1 + `
      <div style="font-size:16px;color:#4776e6">
        Hello ${name},<br><br>
      </div>
      <p>Thank you for creating an Account at irecycle!</p>
      <p style="margin-bottom: 30px">Email verification:</p>
      <a href="${BASE_URL}/confirm?code=${emailCode}">And Confirm your email here</a>
      ` + template2,
    };
    sgMail.send(msg);
  },
  recoverEmail: function (email, code, name) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: 'Recover your irecycle password!',
      text: 'irecycle',
      html: template1 + `
      <div style="font-size:16px;color:#4776e6">
        Hello ${name},<br><br>
      </div>
      <a href="${BASE_URL}/forgot-password?code=${code}">Recover your access here</a>
      ` + template2,
    };
    sgMail.send(msg);
  },
  changeEmail: function (email, name) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: 'Recover your irecycle password!',
      text: 'irecycle',
      html: template1 + `
      <div style="font-size:16px;color:#4776e6">
        Hello ${name},<br><br>
      </div>
      <p>Your password has been changed successfully</p>
      ` + template2,
    };
    sgMail.send(msg);
  },
  thanksForBuying: function (email) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: 'irecycle | Thanks for buying',
      text: 'irecycle',
      html: template1 + `
            <div style="font-size:16px;color:#4776e6">
              Hello,<br><br>
            </div>
            <p>Thank you for buying at irecycle!</p>
            <p style="margin-bottom: 30px">Please create your account now:</p>
            <a href="${BASE_URL}/signup?email=${email}">Create Account</a>
            `+ template2,
    };
    sgMail.send(msg);
  },
  thanksForBuyingUser: function (email, name) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: 'irecycle | Thanks for buying',
      text: 'irecycle',
      html: template1 + `
            <div style="font-size:16px;color:#4776e6">
              Hello ${name},<br><br>
            </div>
            <p>Thank you for buying at irecycle!</p>
            <p style="margin-bottom: 30px">You can check now your order here:</p>
            <a href="${BASE_URL}/dashboard">Dashboard</a>
            `+ template2,
    };
    sgMail.send(msg);
  },
  sorryForBuyingUser: function (email, name) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: 'irecycle | Thanks for buying',
      text: 'irecycle',
      html: template1 + `
            <div style="font-size:16px;color:#4776e6">
              Hello ${name},<br><br>
            </div>
            <p>Thank you for buying at irecycle!</p>
            <p style="margin-bottom: 30px">You can check now your order here:</p>
            <a href="${BASE_URL}/dashboard">Dashboard</a>
            `+ template2,
    };
    sgMail.send(msg);
  },
  participatedInOurBounty: function (email, name) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: " If you don't engage in telegram your DCASH token will be voided",
      text: 'irecycle',
      html: template1 + `
      
      <div class="" style="font-size: 1rem !important;">
        <div class="aHl"></div>
        <div id=":1eq" tabindex="-1"></div>
        <div id=":1ag" class="ii gt"><div id=":121" class="a3s aXjCH m164d2e73426522aa">
        <div dir="ltr">
        <div class="adM">


<span></span>
</div><p class="m_4494939056882744834gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">If you don't engage in telegram your DCASH token will be voided</p>
<p class="m_4494939056882744834gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
<p class="m_4494939056882744834gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">Hello from irecycle team here!</p>
<p class="m_4494939056882744834gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
<p class="m_4494939056882744834gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">I would like to introduce myself first. My name is Jon Santillan and I am the founder of denarii.cash. First of all, I would like to thank you for joining us in this journey and participating in our airdrop and bounty.</p>
<p class="m_4494939056882744834gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
<p class="m_4494939056882744834gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">We have noticed an increase of telegram users from the recent days however what we are missing is the engagement in our channel.</p>
<p class="m_4494939056882744834gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
<p class="m_4494939056882744834gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">I know how badly you want our DCASH token but we all need to work together and make our campaign successful. In order to do that, I would appreciate if you can, once in a while to engage with other members of the community and provide feedback.</p>
<p class="m_4494939056882744834gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
<p class="m_4494939056882744834gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">We believe that providing value as part of the community will have a better chances for our campaign to succeed.<span class="m_4494939056882744834gmail-Apple-converted-space">&nbsp;</span></p>
<p class="m_4494939056882744834gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
<p class="m_4494939056882744834gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">We just don’t want the HYPE!<span class="m_4494939056882744834gmail-Apple-converted-space">&nbsp; </span>we want a community that provides value.</p>
<p class="m_4494939056882744834gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
<p class="m_4494939056882744834gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">By saying that, in the next couple of days we will start cleaning our channel. To those who does not participate and we believe that the user is generated by a bot, we will automatically remove it from the group from the bounty list without any noticed.</p>
<p class="m_4494939056882744834gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
<p class="m_4494939056882744834gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">Speak to you soon!</p><p class="m_4494939056882744834gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)"><a href="http://t.me/denarii" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://t.me/denarii&amp;source=gmail&amp;ust=1532644682226000&amp;usg=AFQjCNGlCZgugN7Y4TG8pqZTuSRzjMPtrg">t.me/denarii</a></p><div class="yj6qo ajU"><div id=":1em" class="ajR" role="button" tabindex="0" aria-label="Hide expanded content" data-tooltip="Hide expanded content"><img class="ajT" src="//ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif"></div></div><span class="HOEnZb adL"><font color="#888888">
<p class="m_4494939056882744834gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
<p class="m_4494939056882744834gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">Jon Santillan</p><p class="m_4494939056882744834gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)"><br></p>



</font></span></div><div class="adL">
</div></div></div><div id=":1el" class="ii gt" style="display:none"><div id=":1ek" class="a3s aXjCH undefined"></div></div><div class="hi"></div></div>

      `+ footer2,
    };
    sgMail.send(msg);
  },
  usersWithoutKYC: function (email, name) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: "  Hey " + name + " , get you free Denarii.Cash Sticker",
      text: 'irecycle',
      html: template1 + `
            <div class="" style="font-size: 1rem !important;"><div class="aHl"></div><div id=":l7" tabindex="-1"></div><div id=":kw" class="ii gt"><div id=":kv" class="a3s aXjCH m164d37aadb130b03"><div dir="ltr"><div>Hey ${name} , get you free Denarii.Cash Sticker</div><div><br></div><div><br></div><div>

            <span></span>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">Hi ${name},</p>
            <p class="m_-6741438325585199261gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">Jon Santillan here, founder of irecycle. I would like to personally thank you for signing-up with us. I have noticed that you have not completed your KYC profile.</p>
            <p class="m_-6741438325585199261gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">Here is a deal for you, I have few extra personalise denarii.cash sticker and I will give this to you as a thank you gift for completing your KYC profile and I will ship it to the address you want to be shipped.</p>
            <p class="m_-6741438325585199261gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">This deal is only for today because these stickers is only limited.<span class="m_-6741438325585199261gmail-Apple-converted-space">&nbsp;</span></p>
            <p class="m_-6741438325585199261gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">I am adding here step-by-step guide how to submit your KYC to help you navigate our dashboard</p>
            <p class="m_-6741438325585199261gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)"><b>Step 1</b></p>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">Visit <a href="https://whitelisting.denarii.cash/login" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://whitelisting.denarii.cash/login&amp;source=gmail&amp;ust=1532672584473000&amp;usg=AFQjCNHN6MXu1GeX-hE04SU3V01jbpku4g"><span class="m_-6741438325585199261gmail-s1" style="color:rgb(228,175,10)">https://whitelisting.denarii.<wbr>cash/login</span></a> and enter your email address and password</p>
            <p class="m_-6741438325585199261gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)"><b>Step 2</b></p>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">Once logged-in. Click the yellow button “<b>FILL KYC / AML</b>” in the dashboard and a pop-up box will appear on your page</p>
            <p class="m_-6741438325585199261gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)"><b>Step 3</b></p>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">Enter all the necessary information and click submit.</p>
            <p class="m_-6741438325585199261gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)"><b>Step 4</b></p>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">And that’s it! You will receive an email from us once you are veried</p>
            <p class="m_-6741438325585199261gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">If you are still having trouble, just ask questions on our telegram channel or you can email info@irecycle.com and I will personally make sure for someone will assist you.</p>
            <p></p>
            <br>
            <br>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)">Thanks,&nbsp;</p>
            <p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69)"><b>Jon Santillan - Co-Founder irecycle</b></p><p class="m_-6741438325585199261gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal"><font color="#454545" face="Helvetica Neue"><span style=""><a href="https://www.linkedin.com/in/jonedwardsantillan/" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.linkedin.com/in/jonedwardsantillan/&amp;source=gmail&amp;ust=1532672584473000&amp;usg=AFQjCNGxiwEETswIHoB5EecdMBpCCRRCJA">https://www.linkedin.com/in/<wbr>jonedwardsantillan/</a></span></font><br></p>
            <p class="m_-6741438325585199261gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"></p><p class="m_-6741438325585199261gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p><p class="m_-6741438325585199261gmail-p2" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-weight:normal;font-stretch:normal;line-height:normal;font-family:&quot;Helvetica Neue&quot;;color:rgb(69,69,69);min-height:14px"><br></p><div class="yj6qo"></div><div class="adL">
            
            
            </div></div><div class="adL"><br></div><div class="adL"></div><div class="adL"></div><div class="adL"></div></div><div class="adL">
            </div></div></div><div id=":lb" class="ii gt" style="display:none"><div id=":lc" class="a3s aXjCH undefined"></div></div><div class="hi"></div></div>
      `+ footer2,
    };
    sgMail.send(msg);
  },
  sureYouAreReal: function (email, name) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: "I want to make sure you are real.",
      text: 'irecycle',
      html: template1 + `
            
            <div id=":nn" class="ii gt" style="font-size: 1rem !important;"><div id=":ne" class="a3s aXjCH m164d388c01911a97"><div dir="auto"><div class="adM"><br></div><p class="m_1307848925719037651gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal"><b style="background-color:rgba(255,255,255,0)">I want to make sure you are real.</b></p>
            <p class="m_1307848925719037651gmail-p3" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal;min-height:14px"><span style="background-color:rgba(255,255,255,0)"><br></span></p><p class="m_1307848925719037651gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal">
            <span style="background-color:rgba(255,255,255,0)">Hey ${name},</span></p><p class="m_1307848925719037651gmail-p3" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal;min-height:14px"><span style="background-color:rgba(255,255,255,0)"><br></span></p><p class="m_1307848925719037651gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal"><span style="background-color:rgba(255,255,255,0)">You know these days! A lot of bounty hunters that creates bot and spam the telegram just to secure free token right?&nbsp;</span></p><p class="m_1307848925719037651gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal"><span style="background-color:rgba(255,255,255,0)"><br></span></p><p class="m_1307848925719037651gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal"><span style="background-color:rgba(255,255,255,0)">I am sending this email to make sure you are a real account:) as&nbsp;</span><span style="background-color:rgba(255,255,255,0)">It seems that you have not referred anyone yet to denarii.cash. In case you are having trouble on where to start, you can join us on telegram channel and ask question. here is our link</span><span class="m_1307848925719037651gmail-Apple-converted-space" style="background-color:rgba(255,255,255,0)">&nbsp;&nbsp;</span><a href="http://t.me/denarii" style="background-color:rgba(255,255,255,0)" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://t.me/denarii&amp;source=gmail&amp;ust=1532672584467000&amp;usg=AFQjCNGM2CGY0aTOR1CX9P_liT12KR8taQ"><span class="m_1307848925719037651gmail-s1">t.me/denarii</span></a><span style="background-color:rgba(255,255,255,0)">.</span></p><p class="m_1307848925719037651gmail-p3" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal;min-height:14px"><span style="background-color:rgba(255,255,255,0)"><br></span></p><p class="m_1307848925719037651gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal"><span style="background-color:rgba(255,255,255,0)">If we haven’t hear from you in the next couple of days we assumed that you are a bot and we might decided to deactivate your account.</span></p><p class="m_1307848925719037651gmail-p3" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal;min-height:14px"><span style="background-color:rgba(255,255,255,0)"><br></span></p><p class="m_1307848925719037651gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal"><span style="background-color:rgba(255,255,255,0)">Should you have any questions about the affiliate program, you can reach us in our email, [<a href="mailto:info@irecycle.com" dir="ltr" target="_blank">info@irecycle.com</a>].</span></p><p class="m_1307848925719037651gmail-p3" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal;min-height:14px"><span style="background-color:rgba(255,255,255,0)"><br></span></p><p class="m_1307848925719037651gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal"><span style="background-color:rgba(255,255,255,0)">Thank you,</span></p><p class="m_1307848925719037651gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal"><span style="background-color:rgba(255,255,255,0)">The Marketing Team</span></p><p class="m_1307848925719037651gmail-p1" style="margin:0px;font-variant-numeric:normal;font-variant-east-asian:normal;font-stretch:normal;line-height:normal"><span style="background-color:rgba(255,255,255,0)">[Denarii.Cash]</span></p><div id="m_1307848925719037651AppleMailSignature">Regards,<div>Jon Santillan</div><div class="yj6qo"></div><div class="adL"><br></div></div></div></div></div>

            `+ footer2,
    };
    sgMail.send(msg);
  },
  privateSaleStartedToday: function (email, name) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: "10% ETH CashBack and 5% lottery pool every 24 hours in ETH. Grab your spot with irecycle Private Sale",
      text: 'irecycle',
      html: template1 + `
            
            <div id=":nn" class="ii gt" style="font-size: 1rem !important;">
            
            <p>Dear ${name}</p>

            <p>My name is Jon Edward Santillan and I am one of the co-founder of irecycle. I am reaching out to you as we have seen in our system that you are interest in participating in our private sale. </p>
            
<p>Our private sale started today and I am personally emailing you first because I want you to be the first to participate to us and I will tell you why!</p>

<ul>
    <li type="disc">If you participated in the private sale you will receive 10% cash back in ETH distributed proportionally based in the amount of Denarii.Cash token that you are holding. Cashback can be withdraw anytime. Anyone who participated after you, additional 10% will be distributed to those who participate proportionally based in the amount of Denarii.Cash token that they are holding.</li>
    <li type="disc">5% worth of ETH for every referral that you referred in our private sale will be given to you and any succeeding participation from the referral that you referred you will get 5% of it.</li>
    <li type="disc">80% Bonus. For the private sale, we are giving 80% on the top DCASH token. Bonus is not included in the computation for cash back</li>
    <li type="disc">Every 24 hours round, the last transaction that is recorded in our eth address (UTC time) will receive 5% of the total ETH that was raised. the next round will exclude the previous round that are raised.</li>
</ul>

<h3>Still not convince? Below will tell you where we at now and how we are progressing!</h3>

<ul>
<li type="disc">Company Started last Feb 2017 and launched April 2018</li>
<li type="disc">Bootstrapped $200K USD</li>
<li type="disc">Product Available on both IOS and Android: mobile app that allows users to buy, send, hold, pay bills ond accept crypto payment.</li>
<li type="disc">From 0 to 75K MAU since launched April 2018</li>
<li type="disc">$260K USD crypto volume since April 2018</li>
<li type="disc">Verified 20 Cashpoint Partners from Saudi, UAE, Bahrain and Australia</li>
<li type="disc">OKLink.com, Paylance.com, Rebit.ph and ECCPay partnership to power crypto liquidity, bills payment and crypto remittance</li>
</ul>

<p>If you have any other questions, you can jump in our telegram channel and ask one of our team members.</p>

<p>Looking forward to your participation</p>

<p>Thanks</p>
 
<p>Jon Santillan</p>

</div>
            `+ footer2,
    };
    sgMail.send(msg);
  },
  askMe: function (email, name) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: "irecycle - AMA with Jon Santillan",
      text: 'irecycle',
      html: template1 + `
            
            <div dir="ltr"><div>Hello Everyone,</div><div>
            <br></div><div>In the next couple of hours, Jon Santillan will be going live for his first AMA, please join him to know more what is happening with irecycle. Our slots is a first come first serve basis so please make sure to be on time!</div><div>
            <br></div><div>Below is the details for the AMA webinar!</div>
            <span id="m_6720568796759073350gmail-meeting-subject" style="box-sizing:border-box;margin:0px;font-family:lato-regular,Helvetica,Arial,sans-serif;text-decoration-style:initial;text-decoration-color:initial;font-size:18px;font-weight:700;color:rgb(57,64,77)"><div>
            <br></div>irecycle - AMA with Jon Santillan</span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="aBn" data-term="goog_41382377" tabindex="0"><span class="aQJ">Sat, Aug 11, 2018 5:10 PM - 5:40 PM</span>
            </span> +04<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">
            <span style="box-sizing:border-box;margin:0px;font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;font-weight:700;color:rgb(57,64,77)">Please join my meeting from your computer, tablet or smartphone.<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span>
            <br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><a href="https://global.gotomeeting.com/join/832540805" id="m_6720568796759073350gmail-meeting-join-url" style="box-sizing:border-box;background:0px 0px;text-decoration:none;color:rgb(48,157,220)" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://global.gotomeeting.com/join/832540805&amp;source=gmail&amp;ust=1533976398447000&amp;usg=AFQjCNGGMsfjPIaNAz2AjNW5VH57Nen9rw">https://global.gotomeeting.<wbr>com/join/832540805<span>&nbsp;</span></a></span>
            <span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span id="m_6720568796759073350gmail-text-dial-in" style="box-sizing:border-box;margin:0px;font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;font-weight:700;color:rgb(57,64,77)"><span id="m_6720568796759073350gmail-pstn-numbers-list" style="box-sizing:border-box;margin:0px">You can also dial in using your phone.</span>
            <span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" id="m_6720568796759073350gmail-primary-toll-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">United States: +1 (571) 317-3116<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span style="box-sizing:border-box;margin:0px;font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;font-weight:700;color:rgb(57,64,77)">Access Code:<span>&nbsp;</span><span id="m_6720568796759073350gmail-access-code" style="box-sizing:border-box;margin:0px">832-540-805</span><span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span style="box-sizing:border-box;margin:0px;font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;font-weight:700;color:rgb(57,64,77)">More phone numbers<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">Australia: +61 2 8355 1038<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">Austria: +43 7 2081 5337<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">Belgium: +32 28 93 7002<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">Canada: +1 (647) 497-9373<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">Denmark: +45 32 72 03 69<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">Finland: +358 923 17 0556<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">France: +33 170 950 590<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">Germany: +49 693 8098 999<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">Ireland: +353 15 360 756<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">Italy: +39 0 230 57 81 80<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">Netherlands: +31 207 941 375<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">New Zealand: +64 9 282 9510<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">Norway: +47 21 93 37 37<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">Spain: +34 932 75 1230<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">Sweden: +46 853 527 818<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">Switzerland: +41 225 4599 60<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span class="m_6720568796759073350gmail-invite-phone-number" style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">United Kingdom: +44 20 3713 5011<span>&nbsp;</span></span><span style="color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline"></span><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><br style="box-sizing:border-box;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial"><span style="box-sizing:border-box;margin:0px;color:rgb(71,81,99);font-family:lato-regular,Helvetica,Arial,sans-serif;font-size:14px;text-decoration-style:initial;text-decoration-color:initial">First GoToMeeting? Let's do a quick system check:<a href="https://link.gotomeeting.com/system-check" style="box-sizing:border-box;background:0px 0px;text-decoration:none;color:rgb(48,157,220)" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://link.gotomeeting.com/system-check&amp;source=gmail&amp;ust=1533976398447000&amp;usg=AFQjCNE32NVtGw7gKYDpy21_w0YtvEmOcg">https://link.<wbr>gotomeeting.com/system-check</a><div class="yj6qo"></div><div class="adL"><span>&nbsp;</span></div></span><div class="adL">
</div></div>
            
            `+ footer2,
    };
    sgMail.send(msg);
  },
  denariiCashUpdate: function (email, name) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: "irecycle Update - August 2018",
      text: 'irecycle',
      html: template1 + `
                
            <div dir="ltr" style="font-size: 1rem !important;"><div class="adM">
<span></span>
<p ><br></p>
<p  >Hello everyone, I hope you are all having a great weekend. We are sending this email to give you an update on what is happening in our project.</p>

<p ><b style="color:black"><font size="4">First of all we are looking for bloggers and vlogger . Grab your $1000 worth of DCASH token</font></b></p>
<p  >If you are blogger or vlogger, we need you! To participate, write one of the following content and post it on your blog or youtube, send us your link for verification.</p>
<ul >
<li  >Write a content or create a video walkthrough on how to use irecycle mobile app</li>
<li >How to buy Bitcoin / Ethereum in Dubai using denarii.cash mobile app</li>
<li >Step by step guide how to buy bitcoin in Dubai</li>
<li >Tutorial how to become a irecyclepoint Partner</li>
<li >irecycle: What Is It and How Do You Use It?<br>
</li>
</ul>
<p><b >Make sure to link the phrase “How to buy bitcoin in Dubai”, "irecycle" </b>to<b > </b><a href="https://denarii.cash" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://denarii.cash&amp;source=gmail&amp;ust=1534153695227000&amp;usg=AFQjCNFpA8RPUB7HfqSLozH93gR1Ob2tEg"><span class="m_8692565582494860943gmail-s1" style="color:rgb(228,175,10)"><b>https://denarii.cash</b></span></a><b style="font-weight:normal"> </b>. Once its done, send your link and email us at <a href="mailto:hello@denarii.cash" style="font-weight:normal" target="_blank"><span class="m_8692565582494860943gmail-s1" style="color:rgb(228,175,10)">hello@denarii.cash</span></a> to verify.</p>

<p  ><b style="color:black"><font size="4">AMA with Jon Santillan, co-founder of irecycle.</font></b>

<p>
    <a href="https://www.youtube.com/watch?v=H74_4bZ6YBI" target="_blank" >https://www.youtube.com/watch?v=H74_4bZ6YBI</a>
</p>

</span></font></p>
<p >Over the weekend we organized our first AMA session with one of the co-founder of denarii.cash Jon Santillan . To those have who have not had a chance to attend, you can watched him in our youtube channel.</p>
<div><div>

<img src="https://whitelisting.denarii.cash/articles/image.png" width="562" height="368" class="CToWUd a6T" tabindex="0">

<div class="a6S" dir="ltr" style="opacity: 0.01; left: 474px; top: 680.91px;"><div id=":nz" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" role="button" tabindex="0" aria-label="Download attachment image.png" data-tooltip-class="a1V" data-tooltip="Download"><div class="aSK J-J5-Ji aYr"></div></div><div id=":o0" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" role="button" tabindex="0" aria-label="Save attachment to Drive image.png" data-tooltip-class="a1V" data-tooltip="Save to Drive"><div class="wtScjd J-J5-Ji aYr aQu"><div class="T-aT4" style="display: none;"><div></div><div class="T-aT4-JX"></div></div></div></div></div></div></div>
<p ><b style="color:black"><font size="4">Another milestone achieved</font></b></p>
<p >Well done everyone! For the last 4 weeks of hard work, we have achieved another crazy milestone! 20,264 web-signups in which almost 90% are verified their account!</p>
<div>

<img src="https://whitelisting.denarii.cash/articles/image2.png" width="562" height="299" class="CToWUd a6T" tabindex="0">

<div class="a6S" dir="ltr" style="opacity: 0.01; left: 474px; top: 1084.55px;"><div id=":o2" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" title="Download" role="button" tabindex="0" aria-label="Download attachment image.png" data-tooltip-class="a1V"><div class="aSK J-J5-Ji aYr"></div></div><div id=":o3" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" title="Save to Drive" role="button" tabindex="0" aria-label="Save attachment to Drive image.png" data-tooltip-class="a1V"><div class="wtScjd aQu J-J5-Ji aYr"><div class="T-aT4"><div></div><div class="T-aT4-JX"></div></div></div></div></div><br></div><br><p></p>

<p  style=""><b style="color:black" ><font size="4">We are running our private sale with minimum 0.1 ETH</font></b></p><p style="">irecycle earns you ETH cash back during ICO from its own volume. Crypto Cashback will only be introduced during ICO event and it is a 10% transaction fee applied to anyone who participated in our ICO during to that particular round. This transaction fee is split between all participants proportionate to the % of their participation from the total sum of crypto that was raised.</p><div>

<img src="https://whitelisting.denarii.cash/articles/image3.png" width="562" height="341" class="CToWUd a6T" tabindex="0">

<div class="a6S" dir="ltr" style="opacity: 0.01; left: 474px; top: 1594.55px;"><div id=":o5" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" title="Download" role="button" tabindex="0" aria-label="Download attachment image.png" data-tooltip-class="a1V"><div class="aSK J-J5-Ji aYr"></div></div><div id=":o6" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" title="Save to Drive" role="button" tabindex="0" aria-label="Save attachment to Drive image.png" data-tooltip-class="a1V"><div class="wtScjd aQu J-J5-Ji aYr"><div class="T-aT4"><div></div><div class="T-aT4-JX"></div></div></div></div></div></b></div><p class="m_8692565582494860943gmail-p1" style="">Our Airdrop and Bounty is almost full, please make sure to participate and engage in our community. Starting this week we will start removing all users&nbsp; that are using bots and similar API. In order for this project to be successful we need you to participate in our telegram community</p><p class="m_8692565582494860943gmail-p1" style=""><br></p><p class="m_8692565582494860943gmail-p1" style=""><br></p><p class="m_8692565582494860943gmail-p1" style=""><br></p>
<div class="yj6qo"></div><div class="adL">
</div></div>

            `+ footer2,
    };
    sgMail.send(msg);
  },
  saveTheDate: function (email, name) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: "Save the Date:  irecycle - PreSale will be live on September 2 (9 AM UTC)",
      text: 'irecycle',
      html: template1 + `
            
            <div class="section-inner sectionLayout--insetColumn">
  <!-- <h1 name="289a" id="289a" class="graf graf--h3 graf--leading graf--title">irecycle — PreSale will be live on September
    2 (9 AM&nbsp;UTC)</h1> -->
  <!-- <figure name="2a93" id="2a93" class="graf graf--figure graf-after--h3">
    <div class="aspectRatioPlaceholder is-locked" style="max-width: 700px; max-height: 366px;">
      <div class="aspectRatioPlaceholder-fill" style="padding-bottom: 52.300000000000004%;"></div>
      <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*3Wzi9rasxWPnTh4AdzujHA.jpeg"
        data-width="1200" data-height="628" data-action="zoom" data-action-value="1*3Wzi9rasxWPnTh4AdzujHA.jpeg" data-scroll="native"><noscript class="js-progressiveMedia-inner"><img
            class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/max/1600/1*3Wzi9rasxWPnTh4AdzujHA.jpeg"></noscript></div>
    </div>
  </figure> 
    <img src="https://cdn-images-1.medium.com/freeze/max/60/1*3Wzi9rasxWPnTh4AdzujHA.jpeg?q=20" crossorigin="anonymous"
          class="progressiveMedia-thumbnail js-progressiveMedia-thumbnail">
  -->

  <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="38"></canvas><img class="progressiveMedia-image js-progressiveMedia-image"
    data-src="https://cdn-images-1.medium.com/max/1600/1*3Wzi9rasxWPnTh4AdzujHA.jpeg" src="https://cdn-images-1.medium.com/max/1600/1*3Wzi9rasxWPnTh4AdzujHA.jpeg" style="    width: 100%">
  <p></p>
    <p name="75b4" id="75b4" class="graf graf--p graf-after--figure">Thank you to all our community members who completed the
    whitelist verification process. From <strong class="markup--strong markup--p-strong">27,185 total registrations</strong>,
    <strong class="markup--strong markup--p-strong">21,785 account verified</strong> and
    <strong class="markup--strong markup--p-strong">14,907</strong> have been whitelisted to date.</p>
  <p name="70db" id="70db" class="graf graf--p graf-after--p">The pre-sale contributions will start on September 2, 2018
    at <strong class="markup--strong markup--p-strong">9 AM UTC</strong>, on our website <a href="https://denarii.cash/en/tokensale"
      data-href="https://denarii.cash/en/tokensale" class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank"><strong
        class="markup--strong markup--p-strong">denarii.cash</strong></a> and
    <a href="https://www.wings.ai/project/0xd02d3d7ef211351c0d54863f543c3c8c9f755649" data-href="https://www.wings.ai/project/0xd02d3d7ef211351c0d54863f543c3c8c9f755649"
      class="markup--anchor markup--p-anchor" rel="nofollow noopener" target="_blank"><strong class="markup--strong markup--p-strong">wings.ai</strong></a>
    website <strong class="markup--strong markup--p-strong">ONLY</strong>!</p>
  <p name="d589" id="d589" class="graf graf--p graf-after--p"><strong class="markup--strong markup--p-strong">Hardcap is
      set at 10,000 ETH.</strong></p>
  <p name="12b4" id="12b4" class="graf graf--p graf-after--p">Contributions will close as soon as we reach the cap, so don’t
    miss your chance!</p>
  <ul class="postList">
    <li name="79da" id="79da" class="graf graf--li graf-after--p">Contributions can be made in ETH or BTC only during pre-sale</li>
    <li name="a56a" id="a56a" class="graf graf--li graf-after--li">Minimum Contribution: 0.1 ETH with BTC the equivalent</li>
    <li name="86f2" id="86f2" class="graf graf--li graf-after--li">No lock up period for the participants</li>
    <li name="a07b" id="a07b" class="graf graf--li graf-after--li">Every <strong class="markup--strong markup--li-strong">0.2
        ETH</strong> purchased grant you a ticket for the raffle to
      <strong class="markup--strong markup--li-strong">win 100 ETH</strong> at the end of the sale</li>
    <li name="154e" id="154e" class="graf graf--li graf-after--li">For ETH participants, DCASH token will be distributed
      as soon as you participate in pre-sale and for BTC, it will be after the pre-sale</li>
    <li name="ec33" id="ec33" class="graf graf--li graf-after--li">Following the pre-sale, we will amend the rate of DCASH
      token to enable the participants <strong class="markup--strong markup--li-strong">sell their token in public sale</strong>
      at the best rate on the next platform roadshow.</li>
  </ul>
  <p name="4311" id="4311" class="graf graf--p graf-after--li"><strong class="markup--strong markup--p-strong">Our smart
      contract is governed and audited by Wings.ai </strong>— a decentralized app for trusted source ICO listing and forecasting.
    irecycle is the first project that uses wings.ai smart contract. Wings.ai have raised over $425 Million in the 6
    months to over 30 projects in 2017.</p>
  <p name="00fa" id="00fa" class="graf graf--p graf-after--p">irecycle has already a working product that is available
    on both IOS and Android. Since we launched irecycle mobile app in April 2018, we have generated a quarter million
    dollar worth of volume transaction and continuously growing.</p>
  <p name="ab4b" id="ab4b" class="graf graf--p graf-after--p graf--trailing">If you have any questions, you are welcome to
    get in touch with us on <a href="https://t.me/denarii" data-href="https://t.me/denarii" class="markup--anchor markup--p-anchor"
      rel="nofollow noopener" target="_blank">https://t.me/denarii</a> or via email
    <a href="mailto:hello@denarii.cash" data-href="mailto:hello@denarii.cash" class="markup--anchor markup--p-anchor" target="_blank">hello@denarii.cash</a>.
    We will be providing further updates the day before the pre-sale starts.</p>
</div>
            
            `+ footer2,
    };
    sgMail.send(msg);
  },
  weThinkYouAreBot: function (email, name) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: "We think you are a bot!",
      text: 'irecycle',
      html: template1 + `
            
            <div dir="ltr">
  <div class="adM">
    <span></span>
  </div>
  <p>Dear ${name}</p>
  
  <p >We think you are a bot!</p>
  
  <p>Hello this is Jon Santillan and we noticed an inactivity in your account for the last couple of days. This is to inform
    you that we will delete your account in the next 2 days if we don’t seen any activity from your account.</p>
  
  <p>If you are participating in one of our
    <b>bounty</b>, we would like to remind you that in order for you be qualified and get the bounty DCASH reward, you must
    participate in our telegram channel or engage in our social media account else your account will automatically deleted
    after today.</p>
  
  <p>We have already decided to remove 5000 accounts that was registered for the last 4 weeks to give ways to the real users.</p>
  
  <p style="color:black">
    <b>Sample questions that you might want to ask, any other questions, feel free to ask
      <span>&nbsp; </span>and we are happy to answer it</b>
  </p>
  <ul >
    <li >What is the hardcap of the ICO</li>
    <li >What is the target market</li>
    <li >Where is the Roadmap</li>
    <li >What is the problem you are solving</li>
    <li >What is the process of sending remittance using cryptocurrency</li>
    <li >How irecycle Works</li>
  </ul>
  
  <p >If don’t know yet we have started creating local telegram channel. If you are from one of this country feel free to join</p>
  
  <p>
    <b style="color:black">Official Telegram Channel :
      <a href="https://t.me/denarii" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://t.me/denarii&amp;source=gmail&amp;ust=1534383045804000&amp;usg=AFQjCNES7VnUeEMiUWExrh5sevxiU5MIRQ">https://t.me/denarii</a>
    </b>
  </p>
  
  <ul>
    <li>🇮🇩 (Indonesia) -
      <a href="https://web.telegram.org/#/im?p=%40DenariiIndonesia" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://web.telegram.org/%23/im?p%3D%2540DenariiIndonesia&amp;source=gmail&amp;ust=1534383045804000&amp;usg=AFQjCNGWSaTus4-0vfis8L9lCePP8KURbw">
        <span >@DenariiIndonesia</span>
      </a>
      <br>
    </li>
    <li>🇻🇳 (Vietnam) -
      <a href="https://web.telegram.org/#/im?p=%40DenariiCashVN" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://web.telegram.org/%23/im?p%3D%2540DenariiCashVN&amp;source=gmail&amp;ust=1534383045804000&amp;usg=AFQjCNHvyJszz0gfFH5ZMU5tSWcMc9hr9A">
        <span >@DenariiCashVN</span>
      </a>
      <br>
    </li>
    <li>:de: (Germany) -
      <a href="https://web.telegram.org/#/im?p=%40DenariiCashGER" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://web.telegram.org/%23/im?p%3D%2540DenariiCashGER&amp;source=gmail&amp;ust=1534383045804000&amp;usg=AFQjCNEAHDlh5Q3Wz-cjNK1iFQD_BFmApg">
        <span >@DenariiCashGER</span>
      </a>
      <br>
    </li>
    <li>:ru: (Russia) -
      <a href="https://web.telegram.org/#/im?p=%40DenariiCashRU" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://web.telegram.org/%23/im?p%3D%2540DenariiCashRU&amp;source=gmail&amp;ust=1534383045804000&amp;usg=AFQjCNG7G3lr35_ZPd5EsmLlq6IsLY8NKg">
        <span >@DenariiCashRU</span>
      </a>
      <br>
    </li>
    <li>:kr: (Korea) -
      <a href="https://web.telegram.org/#/im?p=%40DenariiCashRU" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://web.telegram.org/%23/im?p%3D%2540DenariiCashRU&amp;source=gmail&amp;ust=1534383045804000&amp;usg=AFQjCNG7G3lr35_ZPd5EsmLlq6IsLY8NKg">
        <span >@DenariiCashRU</span>
      </a>
      <br>
    </li>
    <li>🇳🇬 (Nigeria) -
      <a href="https://web.telegram.org/#/im?p=%40DenariiCashNI" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://web.telegram.org/%23/im?p%3D%2540DenariiCashNI&amp;source=gmail&amp;ust=1534383045804000&amp;usg=AFQjCNHtIj-ro_hghN042WQga-IVKDpprw">
        <span >@DenariiCashNI</span>
      </a>
      <br>
    </li>
    <li>🇮🇳 (India) -
      <a href="https://web.telegram.org/#/im?p=%40DenariiCashIN" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://web.telegram.org/%23/im?p%3D%2540DenariiCashIN&amp;source=gmail&amp;ust=1534383045804000&amp;usg=AFQjCNEhD9Rw5TsKMht3lt46Wtco5UhFww">
        <span >@DenariiCashIN</span>
      </a>
      <br>
    </li>
    <li>🇵🇭 (Philippines) -
      <a href="https://web.telegram.org/#/im?p=%40DenariiCashPH" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://web.telegram.org/%23/im?p%3D%2540DenariiCashPH&amp;source=gmail&amp;ust=1534383045804000&amp;usg=AFQjCNF5BzkLVTF7nCHrt-YSABKSLzgwcA">
        <span >@DenariiCashPH</span>
      </a>
      <br>
    </li>
    <li>🇵🇰 (Pakistan) -
      <a href="https://web.telegram.org/#/im?p=%40DenariiCashPK" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://web.telegram.org/%23/im?p%3D%2540DenariiCashPK&amp;source=gmail&amp;ust=1534383045804000&amp;usg=AFQjCNFZky_d1YXnCu7-6IuUFzAcdsLRww">
        <span >@DenariiCashPK</span>
      </a>
      <br>
    </li>
    <li>🇸🇬 (China) -
      <a href="https://web.telegram.org/#/im?p=%40DenariiCashCN" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://web.telegram.org/%23/im?p%3D%2540DenariiCashCN&amp;source=gmail&amp;ust=1534383045804000&amp;usg=AFQjCNEmoVB23h7Rw3O3IicYVdFY5RXbHA">
        <span >@DenariiCashCN</span>
      </a>
      <br>
    </li>
    <li>🇧🇩 (Bangladesh) -
      <a href="https://web.telegram.org/#/im?p=%40DenariiCashBD" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://web.telegram.org/%23/im?p%3D%2540DenariiCashBD&amp;source=gmail&amp;ust=1534383045804000&amp;usg=AFQjCNEhwb0UM-K4ZOr3VfAIbBgBrD3w_g">
        <span >@DenariiCashBD</span>
      </a>
      <br>
    </li>
    <li>:es: (Spain/Latin America) -
      <a href="https://web.telegram.org/#/im?p=%40DenariiCashES" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://web.telegram.org/%23/im?p%3D%2540DenariiCashES&amp;source=gmail&amp;ust=1534383045805000&amp;usg=AFQjCNEH-qg8YkKlmaEA-0ytCsImOIRGJA">
        <span >@DenariiCashES</span>
      </a>
      <br>
    </li>
  </ul>
  
  <p >
    <b style="color:black">Join our competition and win 1 ETH</b>
  </p>
  <ol >
    <li >To qualify in this competition you will need at least a minimum of 5 post in our bitcointaltk thread.
      <span >&nbsp;</span>
    </li>
    <li >The last user that post on the
      <span class="aBn" data-term="goog_55699607" tabindex="0">
        <span class="aQJ">31st of August 10PM</span>
      </span> (Dubai time) will be getting 1 ETH as a prize! All post must be qualified and related to irecycle project.</li>
  </ol>
  <p >
    <span >Link:
      <a href="https://bitcointalk.org/index.php?topic=4788857" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://bitcointalk.org/index.php?topic%3D4788857&amp;source=gmail&amp;ust=1534383045805000&amp;usg=AFQjCNECwL3TUeWhigmplzgxo7Oj23oGxQ">
        <span >https://bitcointalk.org/index.<wbr>php?topic=4788857</span>
      </a>
    </span>
  </p>
  
  <p >
    <b style="color:black">We are live at Wings.Ai</b>
  </p>
  <p >Feel free to participate at
    <a href="http://wings.ai" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://wings.ai&amp;source=gmail&amp;ust=1534383045805000&amp;usg=AFQjCNHBxeaPqIMFHKPt1eoHn3KiRJVRVQ">wings.ai</a> to forecast our ICO campaign.</p>
  <p >
    <a href="https://www.wings.ai/project/0xd02d3d7ef211351c0d54863f543c3c8c9f755649" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://www.wings.ai/project/0xd02d3d7ef211351c0d54863f543c3c8c9f755649&amp;source=gmail&amp;ust=1534383045805000&amp;usg=AFQjCNEItUrJxq44HCTxNEhtrAy_mtiA-w">https://www.wings.ai/project/<wbr>0xd02d3d7ef211351c0d54863f543c<wbr>3c8c9f755649</a>
  </p>
  
  <p >
    <b style="color:black">Private sale are Ongoing</b>
  </p>
  <p >irecycle earns you ETH cash back during ICO from its own volume. Crypto Cashback will only be introduced during ICO
    event and it is a 10% transaction fee applied to anyone who participated in our ICO during to that particular round.
    This transaction fee is split between all participants proportionate to the % of their participation from the total sum
    of crypto that was raised.</p>
  

  <div>Thanks</div>
  <div >
    <div id=":lb" class="ajR" role="button" tabindex="0" data-tooltip="Show trimmed content" aria-label="Show trimmed content">
      <img class="ajT" src="//ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif">
    </div>
  </div>
  <span >
    <font >
      <div>Jon Santillan</div>
    </font>
  </span>
</div>
            
            `+ footer2,
    };
    sgMail.send(msg);
  },
  TheTimeHasCome: function (email, name) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: "The time has come! irecycle pre-sale  is now live!",
      text: 'irecycle',
      html: template1 + `
            
            <div dir="ltr"><div class="adM">




  <span></span>
  
  
  
  
  
  </div><p class="m_-7291812146084117889gmail-p1" ><b>The time has come! irecycle </b><a href="https://denarii.cash/en/tokensale" target="_blank" data-saferedirecturl="https://denarii.cash/en/tokensale"><span class="m_-7291812146084117889gmail-s1" style="text-decoration:underline;color:rgb(228,175,10)"><b>pre-sale</b></span></a><b><span class="m_-7291812146084117889gmail-Apple-converted-space">&nbsp; </span>is now live!</b></p>
  <p class="m_-7291812146084117889gmail-p1" >We are ready! Let us all make it happen!&nbsp;</p>
  <p class="m_-7291812146084117889gmail-p2" ><b></b></p>
  <p class="m_-7291812146084117889gmail-p1" >Whales are joining! make sure to participate as quicker as possible as we only have a limited DCASH token<span class="m_-7291812146084117889gmail-Apple-converted-space">&nbsp;</span></p>
  <p class="m_-7291812146084117889gmail-p3" ></p>
  <ul class="m_-7291812146084117889gmail-ul1">
  <li class="m_-7291812146084117889gmail-li1" >Hardcap: 10,000 ETH</li>
  <li class="m_-7291812146084117889gmail-li1" >Min: 0.1 ETH + 20% Bonus</li>
  <li class="m_-7291812146084117889gmail-li1" >Every 0.2 ETH purchased grant you a ticket for the raffle to win 100 ETH at the end of the sale</li>
  <li class="m_-7291812146084117889gmail-li1" >Following the pre-sale, we will amend the rate of DCASH token to enable the participants sell their token in public sale at the best rate on the next platform roadshow.</li>
  </ul>
  <p class="m_-7291812146084117889gmail-p3" ></p>
  <p class="m_-7291812146084117889gmail-p1" >Before we start our journey, I would like you to know that we have secured partnership with Bancor, Stox, LaToken and Wings.ai . We couldn’t be more thrilled to be working with great teams bringing great products and networks to blockchain.</p>
  <p class="m_-7291812146084117889gmail-p3" ></p>
  <p class="m_-7291812146084117889gmail-p4" ><b>irecycle signed a partnership with the Bancor&nbsp;platform</b></p>
  <p class="m_-7291812146084117889gmail-p1" >We have entered into a strategic partnership with Bancor protocol for the integration of irecycle token (DCASH) to its ecosystem.</p>
  <p class="m_-7291812146084117889gmail-p1" >Bancor will provide irecycle (DCASH) with liquidity by creating a smart contract via the Bancor Protocol. This will be enabled by Bancor Smart TokensTM, which interconnect to form token liquidity networks, allowing user-generated cryptocurrencies to thrive. Bancor and irecycle will work closely together to ensure that DCASH payments are processed through the Bancor Protocol with precision, enabling efficient liquidity.</p>
  <p class="m_-7291812146084117889gmail-p3" ></p>
  <p class="m_-7291812146084117889gmail-p4" ><b>Stox Partners with DenariiCash to launch sponsored predictions for&nbsp;ICO</b></p>
  <p class="m_-7291812146084117889gmail-p1" >irecycle has partnered Stox to support our Token Sale. Stox will allow platform users to make predictions on the irecycleToken Sale. Stox is currently working with the marketing material to promote our ICO</p>
  <p class="m_-7291812146084117889gmail-p5" ><b></b></p>
  <p class="m_-7291812146084117889gmail-p4" ><b>LaToken crypto exchange partnership</b></p>
  <p class="m_-7291812146084117889gmail-p1" >We are also very pleased to announce our partnership and listing of DCASH with an amazing company and exchange — LATOKEN! The LATOKEN platform is a multi-faceted cryptocurrency exchange. It is a company determined to be a pioneer in the blockchain space by providing projects, ICO’s, and startups a platform to gain exposure and funding from the crypto community.</p>
  <p class="m_-7291812146084117889gmail-p5" ><b></b></p>
  <p class="m_-7291812146084117889gmail-p4" ><b>Wings.ai governing DCASH&nbsp;token</b></p>
  <p class="m_-7291812146084117889gmail-p1" >Although that there is no formalize partnership with Wings.ai. irecycle selected Wings.ai to governed our DCASH token smart contract via decentralized consensus. A decentralized app for trusted source ICO listing and forecasting. irecycle is the first project that uses <a href="http://wings.ai" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://wings.ai&amp;source=gmail&amp;ust=1535942329974000&amp;usg=AFQjCNG5V6UBPbhz1v2_zEa8csRHr4V_Hw">wings.ai</a> smart contract. Wings.ai have raised over $425 Million in the 6 months to over 30 projects in 2017.</p>
  <p class="m_-7291812146084117889gmail-p3" ></p>
  <p class="m_-7291812146084117889gmail-p1" >If you have any questions, you are welcome to get in touch with us on <a href="https://t.me/denarii" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://t.me/denarii&amp;source=gmail&amp;ust=1535942329974000&amp;usg=AFQjCNH3zN486lwdTtBK63pFaGHimwhMeg"><span class="m_-7291812146084117889gmail-s1" style="text-decoration:underline;color:rgb(228,175,10)">https://t.me/denarii</span></a> or via email <a href="mailto:hello@denarii.cash" target="_blank"><span class="m_-7291812146084117889gmail-s1" style="text-decoration:underline;color:rgb(228,175,10)">hello@denarii.cash</span></a>. We will be providing further updates the day before the pre-sale starts.</p>
  <p class="m_-7291812146084117889gmail-p3" ><br></p><div class="yj6qo"></div><div class="adL">
  
  
  
  </div></div>
            
            `+ footer2,
    };
    sgMail.send(msg);
  },
  justStarting: function (email, name) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: "We have just reached 500 ETH and we are just starting",
      text: 'irecycle',
      html: template1 + `

            <p>Dear ${name}</p>

            <p>Jon Santillan here, today we have started our pre-sale and so far we have generated 500 ETH. I would like to request to
              you personally to help us promote irecycle. This will only be beneficial to you as the main bounty and airdrop holder.
              You want to make sure that your token will have value by end of our campaign.</p>
            
            <p><b>Telegram</b></p>
            <p>To do that I would appreciate if you can participate in our telegram by engaging with existing and new people. It is very
              important that our telegram is active and there is an engagement. Here is the link for out irecycle telegram channel
              <a href="https://t.me/denarii">https://t.me/denarii</a> </p>
            
            <p><b>Bitcointalk</b></p>
            <p>We have a good conversation here in bitcointalk. <a href="https://bitcointalk.org/index.php?topic=4788857">https://bitcointalk.org/index.php?topic=4788857</a>
              It would be great if you can participate and join the conversation
            </p>
            
            <p><b>Social Media (Facebook and Twitter)</b></p>
            <p>Some of you are activate in Twitter and some of you are not. It is your chance to increase your points by sharing, linking
              and commenting in our social media post.</p>
            
            <p>Let’s help together to make this project possible and have a great DCASH value token out there.</p>
            
            <p>If you have any questions, feel free to ask in the telegram channel</p>
            
            <p><b>Token Sale Details</b></p>
            <ul style="list-style-type:circle" class="ml-2">
              <li>Hardcap is set at 10,000 ETH</li>
              <li>Currency: ETH and BTC</li>
              <li>Minimum: 0.1 ETH</li>
              <li>Every 0.2 ETH purchased grant you a ticket for the raffle to win 100 ETHat the end of the sale</li>
              <li> Following the pre-sale, we will amend the rate of DCASH token to enable the participants sell their token in public
                sale at the best rate on the next platform roadshow which is LATOKEN.</li>
            </ul>
            
            <p class="mt-2"><b>Bonus</b></p>
            <ul style="list-style-type:circle" class="ml-2">
              <li>Day 1: 20%</li>
              <li>Day 2: 19% </li>
              <li>Day 3: 18%</li>
              <li>Day 4: 17%</li>
              <li>Day 5: 16%</li>
              <li>Day 6 - Day 30: 10%</li>
            </ul>
            
            <p><b>Links</b></p>
            <ul style="list-style-type:circle">
              <li><a href="https://denarii.cash/resources/DC_WhitePaper_0607-2018.pdf">Whitepaper: https://denarii.cash/resources/DC_WhitePaper_0607-2018.pdf</a></li>
              <li><a href="https://twitter.com/denariicash">Twitter: https://twitter.com/denariicash</a></li>
              <li><a href="https://www.facebook.com/denariicash/">Facebook: https://www.facebook.com/denariicash/</a></li>
              <li><a href="https://medium.com/denariicash/">Medium: https://medium.com/denariicash/</a></li>
              <li><a href="https://angel.co/denarii-cash">Angellist: https://angel.co/denarii-cash</a></li>
              <li><a href="https://instagram.com/denariicash/">Instagram: https://instagram.com/denariicash/</a></li>
              <li><a href="https://www.linkedin.com/company/denariicash">Linkedin https://www.linkedin.com/company/denariicash</a></li>
              <li><a href="https://www.reddit.com/r/denariicash/">Reddit: https://www.reddit.com/r/denariicash/</a></li>
              <li><a href="https://denarii.cash">Website: https://denarii.cash</a></li>
              <li><a href="https://t.me/denarii">Official Telegram: https://t.me/denarii</a></li>
            </ul>
            
            
            <p>
              <div>Jon Santillan </div>
              <div>Co-founder of irecycle</div>
            </p>
            
            `+ footer2,
    };
    sgMail.send(msg);
  },



  joven: function (email, name) {
    // using SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    sgMail.setApiKey(conf.sendgridApiKey);
    const msg = {
      to: email,
      from: 'irecycle <info@irecycle.com>',
      subject: "Best Festive Ever. It all starts  at Fairmont The Palm!",
      text: 'irecycle',
      html: `

           
      <table class="m_9196842005373473009m_2358127156346129984MsoNormalTable" border="0" cellspacing="0" cellpadding="0" width="600" style="width:6.25in">
      <tbody>
      <tr>
      <td style="border:solid #cccccc 1.0pt;background:white;padding:0in 0in 0in 0in">
      <div align="center">
      <table class="m_9196842005373473009m_2358127156346129984MsoNormalTable" border="0" cellspacing="0" cellpadding="0" width="600" style="width:6.25in">
      <tbody>
      <tr>
      <td style="padding:0in 0in 0in 0in">
      <div>
      <p class="MsoNormal" style="line-height:0%"><a href="http://www.fairmont.com/palm-dubai/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://www.fairmont.com/palm-dubai/&amp;source=gmail&amp;ust=1544005651702000&amp;usg=AFQjCNGS-kP1gHjMzEgZxoIB9K8aqaVEhA"><span style="font-size:1.0pt;text-decoration:none"><img border="0" width="600" height="364" id="m_9196842005373473009m_2358127156346129984_x0000_i1042" src="https://ci3.googleusercontent.com/proxy/mygJESazc7QozJgp3MNM18umfnzm4YVCMWTqdGNF7NnRBPmn5wfqnjcNf9INdfYUkydVRaFzv2rfRvFlARoNQgC35mr3qeF1wvbH5k-jT3zURert1a0fqNt6iHyBMKjizsDbnry-bEAaGeK0Z4w-PIo=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/hero-1.jpg" alt="Eat, drink and rub your belly" class="CToWUd"></span></a><u></u><u></u></p>
      </div>
      </td>
      </tr>
      <tr>
      <td style="padding:0in 0in 0in 0in">
      <div>
      <p class="MsoNormal" style="line-height:0%"><a href="http://www.fairmont.com/palm-dubai/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://www.fairmont.com/palm-dubai/&amp;source=gmail&amp;ust=1544005651702000&amp;usg=AFQjCNGS-kP1gHjMzEgZxoIB9K8aqaVEhA"><span style="font-size:1.0pt;text-decoration:none"><img border="0" width="600" height="300" id="m_9196842005373473009m_2358127156346129984_x0000_i1041" src="https://ci6.googleusercontent.com/proxy/d00YDBOYo4Ut6rjJQ_qNMFvPR9Y7cG6-D3nrl12IQNO-7j_P1wXGrGmATfylADqVGGz_JFZMRCUicbrmHOOCXD9rGToGerNZr4eok6N85lVV7Kn8Jn1iR094Qhx9ADkvzy6kEwAYr6TO3OwX-dSndhU=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/hero-2.jpg" alt="Eat, drink and rub your belly" class="CToWUd"></span></a><u></u><u></u></p>
      </div>
      </td>
      </tr>
      <tr>
      <td valign="top" style="padding:11.25pt 15.0pt 11.25pt 15.0pt">
      <p class="MsoNormal" align="center" style="text-align:center"><span style="font-size:10.5pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;">Dear Guest<br>
      <span style="color:black"><br>
      This Festive season we are offering you the opportunity to receive priority<br>
      booking and access to the best seats in the house.<br>
      From Brazilian bites at Frevo, mouth-watering roast selections at Flow Kitchen,<br>
      flavours of the Mediterranean at Seagrill Bistro, to spectacular festive<br>
      celebrations in our No. 1 Indian restaurant Little Miss India,<br>
      Fairmont The Palm has something for everyone.<br>
      <br>
      Here’s to good friends, a loving family and loads of laughter this festive season!<br>
      <br>
      <strong><span style="font-family:&quot;Arial&quot;,&quot;sans-serif&quot;">Don’t delay. Book Now.</span></strong></span></span><u></u><u></u></p>
      </td>
      </tr>
      <tr>
      <td style="padding:0in 0in 0in 0in">
      <div align="center">
      <table class="m_9196842005373473009m_2358127156346129984MsoNormalTable" border="0" cellspacing="0" cellpadding="0" width="600" style="width:6.25in">
      <tbody>
      <tr>
      <td width="160" style="width:120.0pt;padding:0in 0in 0in 0in">
      <p class="MsoNormal"><a href="https://www.fairmont.com/palm-dubai/special-offers/seasonal-offers/turkey-take-away/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fairmont.com/palm-dubai/special-offers/seasonal-offers/turkey-take-away/&amp;source=gmail&amp;ust=1544005651703000&amp;usg=AFQjCNEwGXzLgNJ7sUx_TNrVPfIRjxIHOw"><span style="text-decoration:none"><img border="0" width="160" height="50" id="m_9196842005373473009m_2358127156346129984_x0000_i1040" src="https://ci5.googleusercontent.com/proxy/RAAwr1xXTrYli6xsmdOVQev9cO7AaJs6ebV9b9u8PeMjLE85mNmgBX2_a5YqJAlgD0waoTfPdBJQDURF4mfoYng6cfWpwqS71YGPkAfkxBXGcGEBu-z_Z7jNlbvz75_aRQle_yX5futMW7EXpxLu1OSG10SqK64BtZD0oPU=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/bt-turkey-takeaway.jpg" alt="Turkey Take Away" class="CToWUd"></span></a><u></u><u></u></p>
      </td>
      <td width="140" style="width:105.0pt;padding:0in 0in 0in 0in">
      <p class="MsoNormal"><a href="https://www.fairmont.com/palm-dubai/special-offers/seasonal-offers/christmas-brunch/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fairmont.com/palm-dubai/special-offers/seasonal-offers/christmas-brunch/&amp;source=gmail&amp;ust=1544005651703000&amp;usg=AFQjCNGBVx2PmGl1sfkEpN5mi-lFNdU8Qg"><span style="text-decoration:none"><img border="0" width="140" height="55" id="m_9196842005373473009m_2358127156346129984_x0000_i1039" src="https://ci3.googleusercontent.com/proxy/hi-IZvlYb4-BoiW_-kF9ltECkrTNHf-yqeM0rY9PjqgIZ90QtMuV0sJt8iFObRucPUlf0jGBubhYjpD4G5ziiSdCXwizqpJNzUpDZhZH5PfWeiu9JzCfp8faScaGmH5KQ9QoPI9pjryC_V07RqfovTg37jaUQsj6B70a=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/bt-christmas-day.jpg" alt="Christmas Day" class="CToWUd"></span></a><u></u><u></u></p>
      </td>
      <td width="140" style="width:105.0pt;padding:0in 0in 0in 0in">
      <p class="MsoNormal"><a href="https://www.fairmont.com/palm-dubai/special-offers/seasonal-offers/christmas-eve-dinner/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fairmont.com/palm-dubai/special-offers/seasonal-offers/christmas-eve-dinner/&amp;source=gmail&amp;ust=1544005651703000&amp;usg=AFQjCNG1ePPAbGG9heSfyoE0ljhLuaXL7Q"><span style="text-decoration:none"><img border="0" width="140" height="50" id="m_9196842005373473009m_2358127156346129984_x0000_i1038" src="https://ci5.googleusercontent.com/proxy/rfwF6Sh5k-G047pmzUjDagyWe1SjCJV6hOo02C6mPNYWbll63hiTTMivVP14YWUhtNuZ0l_CsAfOK4bFSO_MDt1Rt1HwyVNrOES3nZ5xnGDe3qLafda6QB3ZOK9ZRQq3kRSoA9vGt0fSTguWYJ1w6CSb-xMafFYJmjv6=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/bt-christmas-eve.jpg" alt="Christmas Eve" class="CToWUd"></span></a><u></u><u></u></p>
      </td>
      <td width="160" style="width:120.0pt;padding:0in 0in 0in 0in">
      <p class="MsoNormal"><a href="https://www.fairmont.com/palm-dubai/special-offers/seasonal-offers/new-year-39-s-eve-dinner/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.fairmont.com/palm-dubai/special-offers/seasonal-offers/new-year-39-s-eve-dinner/&amp;source=gmail&amp;ust=1544005651703000&amp;usg=AFQjCNHbGRpyXvhfWhcvWFHiPy3KYDUVEQ"><span style="text-decoration:none"><img border="0" width="160" height="50" id="m_9196842005373473009m_2358127156346129984_x0000_i1037" src="https://ci5.googleusercontent.com/proxy/Qf86rM2qlOuK-p2mQwi7_q1cgA4r3rA742IK1BZt1fbHy9PlNitgmwjSJUOFtBl3Cr7KFKDQjDUV4bTcas1pgQQemkA-AFFLv0BkPAjzeNOGKmsWJ3CWYrkfKF-VhTyzdtXG8l922rSpAGBC_ThdX7BqSdZvniNOhWjb=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/bt-new-years-eve.jpg" alt="New Year’s Eve" class="CToWUd"></span></a><u></u><u></u></p>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </td>
      </tr>
      <tr>
      <td style="padding:0in 0in 0in 0in">
      <div align="center">
      <table class="m_9196842005373473009m_2358127156346129984MsoNormalTable" border="0" cellspacing="0" cellpadding="0" width="600" style="width:6.25in">
      <tbody>
      <tr>
      <td valign="top" style="padding:0in 0in 0in 0in">
      <p class="MsoNormal" align="right" style="text-align:right"><span style="font-size:10.5pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;color:black"><img border="0" width="92" height="50" id="m_9196842005373473009m_2358127156346129984_x0000_i1036" src="https://ci6.googleusercontent.com/proxy/gdoz-abMXTzjtUameQWVo98KP4SmBz3nabvARZeA4sgWQ9ehPKrJKNdHksG0R-ZKJP7nBj0ubMooEq84qCN8PqIewRHBI-uIMURX43ZQ8WpSsTTJchQWJ0ITpa_QuVhefJNi2lpLEIttXGnjPQgJuT_ZJQ=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/discover.jpg" alt="http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/discover.jpg" class="CToWUd"></span><u></u><u></u></p>
      </td>
      <td width="148" valign="top" style="width:111.0pt;padding:0in 0in 0in 0in">
      <p class="MsoNormal" align="center" style="text-align:center"><a href="http://palmdining.com/uploads/festive-offers/Festive-Brochure-2018_Online.pdf" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://palmdining.com/uploads/festive-offers/Festive-Brochure-2018_Online.pdf&amp;source=gmail&amp;ust=1544005651703000&amp;usg=AFQjCNF1jJ1vLbyrzXvKdAwDMOxgLI9_hQ"><span style="text-decoration:none"><img border="0" width="148" height="50" id="m_9196842005373473009m_2358127156346129984_x0000_i1035" src="https://ci3.googleusercontent.com/proxy/fRq-ub6xSDwMAjuTKGxGiuW6QS2xnxTtjA2QToV5yb2E6GCFQgJaj5FdL_KrznqUzIy7GcSj_Kb-uoYY5UCyUuJK5HpS811-kITxUVf1Q1mp95nrNZrTX3FSq7762H-oNa-g_EdKLU4X20lFKqjWDD4Frb7a_Q6Z2LpZ8pTD=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/bt-festive-brochure.jpg" alt="Festive Brochure" class="CToWUd"></span></a><u></u><u></u></p>
      </td>
      <td valign="top" style="padding:0in 0in 0in 0in">
      <p class="MsoNormal"><span style="font-size:10.5pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;color:black"><img border="0" width="100" height="50" id="m_9196842005373473009m_2358127156346129984_x0000_i1034" src="https://ci3.googleusercontent.com/proxy/N9QGIfe8ABUqtRRtUUTPsTKMfSfIUm0GAhk2WJcxANuapGf_Mw5oDbo74OT1rAcEJm258tSHqY2rI4BrQeoArQIGnixpNtYa5EReJdYgLtvcrJ3rvNauHTxOW45W8IvqcpQNemK14qRBfT5wNDbfOaSU1a4q7kKf=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/to-learn-more.jpg" alt="http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/to-learn-more.jpg" class="CToWUd"></span><u></u><u></u></p>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </td>
      </tr>
      <tr>
      <td style="padding:15.0pt 0in 0in 0in">
      <p class="MsoNormal" align="center" style="text-align:center"><span style="font-size:10.5pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;color:black">Warm Regards<br>
      <strong><span style="font-family:&quot;Arial&quot;,&quot;sans-serif&quot;">The Festive Reservations Team&nbsp;</span></strong><b><br>
      <strong><span style="font-family:&quot;Arial&quot;,&quot;sans-serif&quot;">Fairmont The Palm</span></strong><br>
      <strong><span style="font-family:&quot;Arial&quot;,&quot;sans-serif&quot;">+971 4 457 3457 | <a href="mailto:palm.dining@fairmont.com" target="_blank">
      <span style="color:black;text-decoration:none">palm.dining@fairmont.com</span></a></span></strong><br>
      <strong><span style="font-family:&quot;Arial&quot;,&quot;sans-serif&quot;"><a href="http://www.palmdining.com" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://www.palmdining.com&amp;source=gmail&amp;ust=1544005651703000&amp;usg=AFQjCNGlUQcn-loRfFLpdB325ndw7eYg6w"><span style="color:black;text-decoration:none">palmdining.com</span></a></span></strong></b></span><u></u><u></u></p>
      </td>
      </tr>
      <tr>
      <td style="padding:0in 0in 0in 0in">
      <div>
      <p class="MsoNormal" style="line-height:0%"><a href="http://www.fairmont.com/palm-dubai/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://www.fairmont.com/palm-dubai/&amp;source=gmail&amp;ust=1544005651703000&amp;usg=AFQjCNEmJmV2weNAt21QIip2RAK2PdoOZQ"><span style="font-size:1.0pt;text-decoration:none"><img border="0" width="600" height="232" id="m_9196842005373473009m_2358127156346129984_x0000_i1033" src="https://ci5.googleusercontent.com/proxy/c8GFcaFoi2IyPFxHZBN4LMlubCT6ZZ2tNKDjrcPZffaRVrqRuyRDN18GwsSRJdBdHuw6McOdZyIMQz5i7RU8RNG6M-A3ffJOnwndZPXy-_n7QbkRTsTNQedmyLWqfs0ZLsVMZlH1Ic7rCLN38WJtYlk=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/hero-3.jpg" alt="Faimont The Palm" class="CToWUd"></span></a><u></u><u></u></p>
      </div>
      </td>
      </tr>
      <tr>
      <td style="padding:0in 0in 0in 0in">
      <div>
      <p class="MsoNormal" style="line-height:0%"><a href="http://www.fairmont.com/palm-dubai/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://www.fairmont.com/palm-dubai/&amp;source=gmail&amp;ust=1544005651703000&amp;usg=AFQjCNEmJmV2weNAt21QIip2RAK2PdoOZQ"><span style="font-size:1.0pt;text-decoration:none"><img border="0" width="600" height="181" id="m_9196842005373473009m_2358127156346129984_x0000_i1032" src="https://ci5.googleusercontent.com/proxy/cA6XN9-u_-xO9G1wypGNrygpDZQZvE4yIQO45P897Lg6hkDgN82H-LR_NmwN6D4wvpElrrWCQfq1GK3CT3emwdaC2LWwuH893ywXVK5ORKBPF8krS85LcxlE2jKyUZjduAZMxX_1Sbg82D5sHDIPzU4=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/hero-4.jpg" alt="http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/hero-4.jpg" class="CToWUd"></span></a><u></u><u></u></p>
      </div>
      </td>
      </tr>
      <tr>
      <td style="padding:0in 0in 0in 0in">
      <table class="m_9196842005373473009m_2358127156346129984MsoNormalTable" border="0" cellspacing="0" cellpadding="0" width="600" style="width:6.25in">
      <tbody>
      <tr>
      <td width="41" style="width:30.75pt;padding:0in 0in 0in 0in">
      <div>
      <p class="MsoNormal" style="line-height:0%"><a href="http://www.fairmont.com/palm-dubai/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://www.fairmont.com/palm-dubai/&amp;source=gmail&amp;ust=1544005651703000&amp;usg=AFQjCNEmJmV2weNAt21QIip2RAK2PdoOZQ"><span style="font-size:1.0pt;text-decoration:none"><img border="0" width="41" height="28" id="m_9196842005373473009m_2358127156346129984_x0000_i1031" src="https://ci6.googleusercontent.com/proxy/NwNPZxJPsgD5xzSG5WStcBSB59fogm5hVjun_dllmXBzS_kBtLneCquyw0QDpBMVsiK06HuTWqyPvCgH-ICEgSR-hMlEAeJukDQayZtvGVvzlCJHedq0J9NJ9TFM-y6qknY7owanEzQjAZFcg-rl1A=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/cta-1.jpg" alt="http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/cta-1.jpg" class="CToWUd"></span></a><u></u><u></u></p>
      </div>
      </td>
      <td width="31" style="width:23.25pt;padding:0in 0in 0in 0in">
      <div>
      <p class="MsoNormal" style="line-height:0%"><a href="https://www.facebook.com/FairmontThePalm" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/FairmontThePalm&amp;source=gmail&amp;ust=1544005651704000&amp;usg=AFQjCNFP0URXdL_QpLwpHSKvyWM1kNAtzg"><span style="font-size:1.0pt;text-decoration:none"><img border="0" width="31" height="28" id="m_9196842005373473009m_2358127156346129984_x0000_i1030" src="https://ci5.googleusercontent.com/proxy/gdris6mduiKeMzGVlpWuUvtkLhzijCt_P_wO3_3dd9J6xcxmb3qMEZQNRMSy39uXi3gFBVqr6BZPMPWvb7LD9t6_gpmAaumxXNJ7HbjAKBc7zxFJBesa5Xg9XMjE0IUhwc7Ttg0LYoxrEG1B9k3_MEV1Tw=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/facebook.jpg" alt="Facebook" class="CToWUd"></span></a><u></u><u></u></p>
      </div>
      </td>
      <td width="34" style="width:25.5pt;padding:0in 0in 0in 0in">
      <div>
      <p class="MsoNormal" style="line-height:0%"><a href="https://twitter.com/FairmontThePalm" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://twitter.com/FairmontThePalm&amp;source=gmail&amp;ust=1544005651704000&amp;usg=AFQjCNHX6pFPSKnjKXYBHejIoTWEkqojeQ"><span style="font-size:1.0pt;text-decoration:none"><img border="0" width="34" height="28" id="m_9196842005373473009m_2358127156346129984_x0000_i1029" src="https://ci5.googleusercontent.com/proxy/aDR070b7lQs7Fuxk_kEGTCmKxthm_QYA5RtrTCDvzoFfGBhZPpS9Wt73zwIz8MNUR5xyCxCnSNfaBrX9g7JdqzO4TpBYQOQN3v5czvfcRn3nXLjv-RE5ejcp9Mgpk1q0oA_rMehf_0OXZ3tu-6G0UhEE=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/twitter.jpg" alt="Twitter" class="CToWUd"></span></a><u></u><u></u></p>
      </div>
      </td>
      <td width="35" style="width:26.25pt;padding:0in 0in 0in 0in">
      <div>
      <p class="MsoNormal" style="line-height:0%"><a href="https://www.instagram.com/fairmontthepalm/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.instagram.com/fairmontthepalm/&amp;source=gmail&amp;ust=1544005651704000&amp;usg=AFQjCNHn1tktHxsnEfFw9_Hy6WNTi7c3og"><span style="font-size:1.0pt;text-decoration:none"><img border="0" width="35" height="28" id="m_9196842005373473009m_2358127156346129984_x0000_i1028" src="https://ci4.googleusercontent.com/proxy/LRTgjKvWVyAPpLLL5fLwxMt3mBHXCi6r2gRtqxNIFL9-pv5ovK3FEY9zKYCHrMIbG5hgpSfaqXPmOju86_veDmftTgG2ehryk13UG04z4l9XG6zZ045BTfeE-BFncwVdYb1msPGwXxffWCSB3SPXVF4KxHM=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/instagram.jpg" alt="Instagram" class="CToWUd"></span></a><u></u><u></u></p>
      </div>
      </td>
      <td width="34" style="width:25.5pt;padding:0in 0in 0in 0in">
      <div>
      <p class="MsoNormal" style="line-height:0%"><a href="https://www.youtube.com/user/FairmontThePalm" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.youtube.com/user/FairmontThePalm&amp;source=gmail&amp;ust=1544005651704000&amp;usg=AFQjCNGhdXZEX0AjBfITAcow3jtaYgDkBw"><span style="font-size:1.0pt;text-decoration:none"><img border="0" width="34" height="28" id="m_9196842005373473009m_2358127156346129984_x0000_i1027" src="https://ci3.googleusercontent.com/proxy/AF-bESVlyFlaMWTy4f1KKlWiVonUeS5hRY2iBomseEftvkdInzPQxtgwlX8GqLt_y2WtASorP4HyMVPWH7rqm-t138hswTf0Bc-Shl8BAuWjtpTKIRyAOnlpsTSQymD3sArR6y5vuapWoP8I52IgXWHF=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/youtube.jpg" alt="YouTube" class="CToWUd"></span></a><u></u><u></u></p>
      </div>
      </td>
      <td style="padding:0in 0in 0in 0in">
      <div>
      <p class="MsoNormal" style="line-height:0%"><a href="http://www.fairmont.com/palm-dubai/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://www.fairmont.com/palm-dubai/&amp;source=gmail&amp;ust=1544005651704000&amp;usg=AFQjCNH_zIcMRuvkgWWbbdyt9-aCujk1HA"><span style="font-size:1.0pt;text-decoration:none"><img border="0" width="426" height="28" id="m_9196842005373473009m_2358127156346129984_x0000_i1026" src="https://ci5.googleusercontent.com/proxy/aKTyssgIkHmploHTZ1SyTW_icPKKd8xili5OwKZzaydQYeB5dzkcqVIUBjcbDXqCRDrMe_7C_AoM7QFtMzyOKpP5mSt0TlPUqDzd4fFFxLkh2O6RmujxdMBROwDpmbvjuayAKGkhVAKO14rsIjyLDw=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/cta-2.jpg" alt="Fairmont.com" class="CToWUd"></span></a><u></u><u></u></p>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      <tr>
      <td style="padding:0in 0in 0in 0in">
      <div>
      <p class="MsoNormal" style="line-height:0%"><a href="http://www.fairmont.com/palm-dubai/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://www.fairmont.com/palm-dubai/&amp;source=gmail&amp;ust=1544005651704000&amp;usg=AFQjCNH_zIcMRuvkgWWbbdyt9-aCujk1HA"><span style="font-size:1.0pt;text-decoration:none"><img border="0" width="600" height="48" id="m_9196842005373473009m_2358127156346129984_x0000_i1025" src="https://ci5.googleusercontent.com/proxy/QYNZPu7nyWppy1Ejp_-a4MFM72fIJvLqloz6S5tqopSZnNmKKt5uPdJGN9eqCQ6pJwjDUuGhYZnETgFQYI_1syn6_iaHhjYWc2Vg8E5jwgePMypDWvDd7bnWVZtlG094NFShel1Sd5FeVskTRXovJTs=s0-d-e1-ft#http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/hero-5.jpg" alt="http://previewhub.com/jansenharris/fairmont/mailer/2018/festive-confirmation/images/hero-5.jpg" class="CToWUd"></span></a><u></u><u></u></p>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
            
            `,
    };
    sgMail.send(msg);
  },
}