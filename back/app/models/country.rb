# frozen_string_literal: true
class Country < ApplicationRecord
  validates_presence_of :name
end
