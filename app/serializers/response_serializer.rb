class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :r1, :r2, :r3, :r4, :r5, :r6, :r7, :r8, :r9, :r10, :user

  def user
    ActiveModel::SerializableResource.new(object.user, each_serializer: UserSerializer)
  end
end
