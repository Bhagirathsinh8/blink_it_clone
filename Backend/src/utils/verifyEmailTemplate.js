const verifyEmailTemplate = ({ name, url}) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height:1.5;">
      <p>Dear ${name},</p>
      <p>Thank you for registering with <b>BMart</b>.</p>
      <a href="${url}" 
         style="display:inline-block; margin-top:10px; padding:10px 20px; 
                background:yellow; color:black; font-weight:bold; 
                text-decoration:none; border-radius:5px;">
        Verify Email
      </a>
      <p style="margin-top:20px;">If you didn’t create this account, you can ignore this email.</p>
    </div>
  `;
};

export default verifyEmailTemplate;
