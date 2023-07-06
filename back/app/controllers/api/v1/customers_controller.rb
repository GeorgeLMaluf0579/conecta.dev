# frozen_string_literal: true

module Api
  module V1
    class CustomersController < ApplicationController
      before_action :set_customer, only: %i[show update destroy]

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

      def update
        if @customer.update(name: customer_params[:name], email: customer_params[:email],
                            kind: Kind.find(customer_params[:kind_id]), 
                            country: Country.find(customer_params[:country_id]))
          render json: @customer, status: :ok
        else
          render json: { message: 'Invalid customer attributes' }, status: :unprocessable_entity
        end
      end

      def destroy
        @customer.destroy
      end

      def search
        @customers = CustomersServices.new.search(search_params[:name])
        render json: @customers, status: :ok
      end

      private

      def set_customer
        @customer = Customer.find(params[:id])
      end

      def customer_params
        params.permit(:name, :email, :kind_id, :country_id)
      end

      def search_params
        params.permit(:name)
      end
    end
  end
end
