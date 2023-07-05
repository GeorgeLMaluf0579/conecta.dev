# frozen_string_literal: true

module Api
  module V1
    class KindsController < ApplicationController
      def index
        @kinds = KindsService.new.list_all
        render json: @kinds, status: :ok
      end
    end
  end
end

