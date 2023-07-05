# frozen_string_literal: true

class KindsService
  def list_all
    Kind.all.order(description: :asc)
  end
end
