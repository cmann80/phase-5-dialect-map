class User < ApplicationRecord
    has_many :user_locations
    has_many :places, through: :user_locations
    has_secure_password
    has_one :response
end
