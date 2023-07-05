class Customer < ApplicationRecord
  belongs_to :kind
  belongs_to :country
end
