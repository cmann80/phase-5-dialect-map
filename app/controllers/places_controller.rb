class PlacesController < ApplicationController
    def create
        params[:places].each do |place|
            place = Place.find_or_create_by(location: place[:location])
            UserLocation.create(
                user_id: session[:user_id],   
                location_type: place[:location_type], 
                place_id: place.id
            )
        end 
render json: {}
    end

    def destroy
        place.delete :place_id
        head :no_content
    end




end
