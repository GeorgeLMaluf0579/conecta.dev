# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CountriesService do
  describe "#list_all" do
    before :all do
      @countries_list = create_list(:country, 3)
    end

    subject(:service) { CountriesService.new }
    it 'expect return all objects' do
      aggregate_failures do
        expect(service.list_all).not_to be_empty
        expect(service.list_all.count).to eq 3
      end
    end
  end
end
