# frozen_string_literal: true

class Kind < ApplicationRecord
  validates_presence_of :description
end
