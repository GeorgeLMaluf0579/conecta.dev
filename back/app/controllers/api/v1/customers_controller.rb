# frozen_string_literal: true

module Api
  module V1
    class CustomersController < ApplicationController
      before_action :set_customer, only: %i[show destroy]

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

      def create
        @customer = CustomersServices.new.build(customer_params)
        if @customer.save
          render json: @customer, status: :created
        else
          render json: { message: 'Invalid customer attributes' }, status: :unprocessable_entity
        end
      end

      def destroy
        @customer.destroy
      end

      private

      def set_customer
        @customer = Customer.find(params[:id])
      end

      def customer_params
        params.permit(:name, :email, :kind_id, :country_id)
      end
    end
  end
end
