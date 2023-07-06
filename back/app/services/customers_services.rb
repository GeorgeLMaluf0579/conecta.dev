# frozen_string_literal: true

class CustomersServices
  def list_all
    Customer.all.order(id: :asc)
  end

  def build(params)
    Customer.new(name: params[:name],
                 email: params[:email],
                 kind: Kind.find(params[:kind_id]),
                 country: Country.find(params[:country_id]))
  end
end
