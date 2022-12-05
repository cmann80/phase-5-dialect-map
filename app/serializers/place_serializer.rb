class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :location, :user_locations, :users
end
