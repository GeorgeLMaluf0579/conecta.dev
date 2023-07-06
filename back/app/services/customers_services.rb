# frozen_string_literal: true

class CustomersServices
  def list_all
    Customer.all.order(id: :asc)
  end
end
