class PortfolioContactController < ApplicationController
  def create
    debugger
  # PortfolioMailer.new_portfolio_contact(comment).deliver_now
  end

private
  def portfolio_contact_params
    params.require(:message).permit(:name, :email, :message)
  end
end
