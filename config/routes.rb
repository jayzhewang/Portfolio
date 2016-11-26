Rails.application.routes.draw do
  resources :portfolio_contact, only: [:create], defaults: { format: :json }
  root 'static_pages#base'
end
