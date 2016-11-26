class PortfolioContactController < ApplicationController
  def create

  # PortfolioMailer.new_portfolio_contact(comment).deliver_now
  end

private
  def portfolio_contact_params
    params.require(:portfolio_contact).permit(:name, :email, :message)
  end
end
