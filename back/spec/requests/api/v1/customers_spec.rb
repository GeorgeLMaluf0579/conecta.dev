# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Api::V1::Customers', type: :request do
  describe '#index' do
    it 'returns http success' do
      get api_v1_customers_path
      expect(response).to have_http_status(:success)
    end
  end

  describe '#show' do
    let(:customer) { create(:customer) }

    it 'when exists customer id' do
      aggregate_failures do
        get api_v1_customer_path(id: customer.id)
        expect(response).to have_http_status(:success)
        expect(response.body).to eq(CustomerSerializer.new(customer).to_json)
      end
    end
  end

  describe '#create' do
    after do
      Customer.destroy_all
      Kind.destroy_all
      Country.destroy_all
    end

    let(:country) { create(:country, name: 'Brazil') }
    let(:kind) { create(:kind, description: 'standard') }

    let(:params) do
      { name: 'John Doe', email: 'john_doe@example.com',
        kind_id: kind.id, country_id: country.id }
    end

    it 'with valid params' do
      aggregate_failures do
        post api_v1_customers_path, params: params
        expect(response).to have_http_status(:created)
        expect(JSON.parse(response.body)['name']).to eq 'John Doe'
      end
    end
  end

  describe '#update' do
    before do
      @customer = create(:customer, name: 'John Doe', email: 'johndoe@example.com' )
    end

    after do
      Customer.destroy_all
      Kind.destroy_all
      Country.destroy_all
    end
    
    let(:country) { create(:country, name: 'Brazil') }
    let(:kind) { create(:kind, description: 'professional') }
    let(:params) do
      { name: 'Fulano de Tal', email: 'fulanodetal@exemplo.com',
        kind_id: kind.id, country_id: country.id }
    end

    it 'with valid params' do
      aggregate_failures do
        put api_v1_customer_path(@customer.id), params: params
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)['name']).to eq 'Fulano de Tal'
      end
    end
  end

  describe '#destroy' do
    before :all do
      @customer = create(:customer)
    end

    after :all do
      Customer.destroy_all
      Kind.destroy_all
      Country.destroy_all
    end

    it 'returns a no content' do
        delete api_v1_customer_path(id: @customer.id)
        expect(response).to have_http_status(:no_content)
    end

    it 'destroy the specified customer' do
      expect { 
        delete api_v1_customer_path(id: @customer.id)
      }.to change(Customer, :count).by(-1)
    end
  end
end
