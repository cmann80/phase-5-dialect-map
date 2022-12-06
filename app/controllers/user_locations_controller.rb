class UserLocationsController < ApplicationController

    skip_before_action :authorize, only: :index

    def index
        user_locations = UserLocation.all
        render json: user_locations
    end
    
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
        params.permit(:user_id, :place_id, :location_type)
    end

end


# create a custom action that collects an array of objects, with the location name and type
# then, iterate through the params array 