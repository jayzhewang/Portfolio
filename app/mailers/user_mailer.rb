class UserMailer < ApplicationMailer
  def guest_message
    mail(to: 'zwang91521@hotmail.com', subject: 'portfolio guest message')
  end
end
