# frozen_string_literal: true

module Api
  module V1
    class CustomersController < ApplicationController
      def index
        @customers = CustomersServices.new.list_all
        render json: @customers, status: :ok
      end
    end
  end
end
