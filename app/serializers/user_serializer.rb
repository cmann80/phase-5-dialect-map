class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_locations, :response
end
