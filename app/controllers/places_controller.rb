class PlacesController < ApplicationController
    def create
        place = Place.create!(place_params)
        render json: place, status: :created
    end

    def destroy
        place.delete :place_id
        head :no_content
    end

    private

    def place_params
        params.permit(:location)
    end
end
