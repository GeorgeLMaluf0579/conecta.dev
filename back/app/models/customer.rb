# frozen_string_literal: true

class Customer < ApplicationRecord
  validates_presence_of :name
  validates_presence_of :email

  belongs_to :kind
  belongs_to :country
end
