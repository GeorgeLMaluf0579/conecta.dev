Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :kinds, only: :index
      resources :countries, only: :index
      resources :customers, only: %i[index show create destroy]
    end
  end
end
