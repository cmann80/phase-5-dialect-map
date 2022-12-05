class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_locations, :response

  def user_locations
    ActiveModel::SerializableResource.new(object.user_locations, each_serializer: UserLocationSerializer)
  end
end
