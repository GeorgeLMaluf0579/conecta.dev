# frozen_string_literal: true

FactoryBot.define do
  factory :country do
    name { Faker::Address.country[0..40] }
  end
end
