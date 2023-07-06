# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Country, type: :model do
  let(:resource) { create(:country) }

  describe '#validations' do
    it 'with valid attributes' do
      expect(resource).to be_valid
    end
  end
end
