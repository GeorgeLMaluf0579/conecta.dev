# frozen_string_literal: true

module Api
  module V1
    class CustomersController < ApplicationController
      before_action :set_customer, only: %i[show]

      def index
        @customers = CustomersServices.new.list_all
        render json: @customers, status: :ok
      end

      def show
        if @customer.blank?
          render json: { message: 'Customer not found' }, status: :unprocessable_entity
        else
          render json: @customer, status: :ok
        end
      end

      private
      def set_customer
        @customer = Customer.find(params[:id])
      end
    end
  end
end
