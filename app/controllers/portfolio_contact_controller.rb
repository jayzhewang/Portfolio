class PortfolioContactController < ApplicationController
  def create
    portfolio_contact_params.each do |key, value|
      if value.length == 0
        render status: 400
      end
    end
    debugger
    PortfolioMailer.new_portfolio_contact(portfolio_contact_params).deliver_now
    @response = { message: 'delivered' }
    render :response
  end

private
  def portfolio_contact_params
    params.require(:message).permit(:name, :email, :message)
  end
end
