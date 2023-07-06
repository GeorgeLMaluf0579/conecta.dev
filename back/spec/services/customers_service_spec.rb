# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CustomersServices do
  subject(:service) { CustomersServices.new }

  describe "#list_all" do
    before do
      @customers_list = create_list(:customer, 2)
    end

    it 'expect return all objects' do
      aggregate_failures do
        expect(service.list_all).not_to be_empty
        expect(service.list_all.count).to eq 2
      end
    end
  end

  describe "#build" do
    let(:params) { { name: 'Jonh Doe', email: 'john_doe@example.com', 
                     kind_id: 1, country_id: 1} }
    it 'expect return a new customer' do
      aggregate_failures do
        expect(service.build(params)).not_to be_blank
        expect(service.build(params).name).to eq params[:name]
      end
    end
  end
end