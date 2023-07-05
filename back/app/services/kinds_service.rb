# frozen_string_literal: true

class KindsService
  def list_all
    kinds = Kind.all.order(description: :asc)
  end
end
