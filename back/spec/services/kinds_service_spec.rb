# frozen_string_literal: true

require 'rails_helper'

RSpec.describe KindsService do
  describe '#list_all' do
    before do
      @kinds_list = create_list(:kind, 3)
    end

    subject(:service) { KindsService.new }
    it 'expect return all objects' do
      aggregate_failures do
        expect(service.list_all).not_to be_empty
        expect(service.list_all.count).to eq 3
      end
    end
  end
end
