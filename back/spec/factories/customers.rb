# frozen_string_literal: true

FactoryBot.define do
  factory :customer do
    name { Faker::Name.name[0..40] }
    email { Faker::Internet.email[0..255] }
    kind { create(:kind, description: 'standard' ) }
    country { create(:country, name: 'Brazil') }
  end
end
