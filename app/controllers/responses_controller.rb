class ResponsesController < ApplicationController

    def create
        response = Response.create!(response_params)
        render json: response, status: created
    end

    def update
        response = Response.find(params[:id])
        response.update!(response_params)
        render json: response, status: updated
    end

    private

    def response_params
        params.permit(:user_id, :r1, :r3, :r4, :r5, :r6, :r7, :r8, :r9, :r10)
    end

end
