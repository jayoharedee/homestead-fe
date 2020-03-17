let aws = require('aws-sdk')
let ses = new aws.SES({
  region: 'us-east-1'
})
let myEmailAddress = 'homestead95@gmail.com'

exports.handler = async event => {
  let emailParams = {
    Destination: {
      ToAddresses: [myEmailAddress]
    },
    Message: {
      Body: {
        Text: {
          Data: `
          Thank you for your interest in a free quote with Homestead Roofs. A representative will be in touch ASAP.
          `
        }
      },
      Subject: {
        Data: 'Thanks For Your Interest'
      }
    },
    Source: myEmailAddress
  }

  try {
    let email = await ses.sendEmail(emailParams).promise()
  } catch (err) {
    console.log(err)
    return err
  }

  return 'ok'
}
