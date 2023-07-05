# frozen_string_literal: true

require 'rails_helper'

RSpec.describe "Api::V1::Countries", type: :request do
  describe "GET /index" do
    it 'returns http success' do
      get api_v1_countries_path
      expect(response).to have_http_status(:success)
    end
  end
end
