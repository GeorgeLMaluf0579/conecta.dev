# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Kind, type: :model do
  let(:resource) { create(:kind) }

  describe '#validations' do
    it 'with valid attributes' do
      expect(resource).to be_valid
    end
  end
end
