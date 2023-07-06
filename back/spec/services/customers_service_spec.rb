# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CustomersServices do
  subject(:service) { CustomersServices.new }

  describe '#list_all' do
    before do
      @customers_list = create_list(:customer, 2)
    end

    after do
      DatabaseCleaner.clean
    end

    it 'expect return all objects' do
      aggregate_failures do
        expect(service.list_all).not_to be_empty
        expect(service.list_all.count).to eq 2
      end
    end
  end

  describe '#build' do
    let(:country) { create(:country) }
    let(:kind) { create(:kind) }
    context 'with valid params' do
      let(:params) do
        { name: 'Jonh Doe', email: 'john_doe@example.com',
          kind_id: kind.id, country_id: country.id }
      end
      it 'expect return a new customer' do
        aggregate_failures do
          expect(service.build(params)).not_to be_blank
          expect(service.build(params).name).to eq params[:name]
        end
      end
    end
  end

  describe '#search' do
    before :each do
      @customers_list = create_list(:customer, 2)
      @customer = create(:customer, name: 'John Wick')
    end

    after :each do
      DatabaseCleaner.clean
    end

    it 'expect return only one customer' do
      aggregate_failures do
        expect(service.search('John W')).not_to be_blank
        expect(service.search('John W').count).to eq 1
      end
    end

    it 'return all customers' do
      aggregate_failures do
        expect(service.search('')).not_to be_blank
        expect(service.search('').count).to eq 3
      end
    end

    it 'no customers found' do
      aggregate_failures do
        expect(service.search('abcdefgh')).to be_blank
        expect(service.search('abcdefgh').count).to eq 0
      end
    end
  end
end
