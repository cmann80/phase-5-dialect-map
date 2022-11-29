class UserLocationsController < ApplicationController

    def create
        user_location = UserLocation.create!(user_location_params)
            render json: user_location, status: :created
    end

    def update
        user_location = UserLocation.find(params[:id])
        user_location.update!(user_location_params)
        render json: user_location, status: :accepted
    end

    private

    def user_location_params
        params.permit(:user_id, :place_id, :type)
    end

end
