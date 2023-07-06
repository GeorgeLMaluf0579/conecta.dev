# frozen_string_literal: true

class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :country do
    object.country.name
  end
  belongs_to :kind do
    object.kind.description
  end
end