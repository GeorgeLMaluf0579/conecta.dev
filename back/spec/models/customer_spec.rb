require 'rails_helper'

RSpec.describe Customer, type: :model do
  describe '#validations' do
    let(:resource) { create(:customer) }
    context 'with valid attributes' do
      it { expect(resource).to be_valid }
    end

    context 'without valid attributes' do
      describe 'fail missing country' do
        let(:resource) { build(:customer, country: nil) }
        it { expect(resource).to be_invalid }
      end

      describe 'fail missing kind' do
        let(:resource) { build(:customer, kind: nil) }
        it { expect(resource).to be_invalid }
      end
    end
  end
end
