FactoryBot.define do
  factory :country do
    name { Faker::Address.country[0..40] }
  end
end
