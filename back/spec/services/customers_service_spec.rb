# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CustomersServices do
  describe "#list_all" do
    before do
      @customers_list = create_list(:customer, 2)
    end

    subject(:service) { CustomersServices.new }
    it 'expect return all objects' do
      aggregate_failures do
        expect(service.list_all).not_to be_empty
        expect(service.list_all.count).to eq 2
      end
    end
  end
end