# frozen_string_literal: true

module Api
  module V1
    class CountriesController < ApplicationController
      def index
        @countries = CountriesService.new.list_all
        render json: @countries, status: :ok
      end
    end
  end
end
