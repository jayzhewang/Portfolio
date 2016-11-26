class PortfolioMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.portfolio_mailer.new_portfolio_contact.subject
  #
  def new_portfolio_contact(message)
    @message = message
    mail to: `#{ENV['MAIL_RECEIVER']}`, subject: "New Portfolio Contact Message"
  end
end
