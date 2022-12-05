class UserLocationSerializer < ActiveModel::Serializer
  attributes :id, :user, :place
end
