# frozen_string_literal: true

class CountriesService
  def list_all
    Country.all.order(name: :asc)
  end
end
