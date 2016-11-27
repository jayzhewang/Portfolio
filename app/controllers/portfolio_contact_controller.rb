class PortfolioContactController < ApplicationController
  def create
    PortfolioMailer.new_portfolio_contact(portfolio_contact_params).deliver_now
    @response = { message: 'delivered' }
    render :response
  end

private
  def portfolio_contact_params
    params.require(:message).permit(:name, :email, :message)
  end
end
