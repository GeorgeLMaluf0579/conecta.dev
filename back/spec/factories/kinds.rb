FactoryBot.define do
  factory :kind do
    description { Faker::Name.name[0..40] }
  end
end
