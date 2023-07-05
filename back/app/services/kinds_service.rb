# frozen_string_literal: true

class KindsService
  def list_all
    kinds = Kind.all.order(description: :asc)

    kinds.map do |kind|
      KindSerializer.new(kind).to_json
    end
  end
end
