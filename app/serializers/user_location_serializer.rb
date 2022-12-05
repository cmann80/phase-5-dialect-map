class UserLocationSerializer < ActiveModel::Serializer
  attributes :id, :user, :place, :location_type
end
