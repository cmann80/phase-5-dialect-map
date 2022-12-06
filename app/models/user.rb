class User < ApplicationRecord
    has_many :user_locations, dependent: :destroy
    has_many :places, through: :user_locations, dependent: :destroy
    has_secure_password
    has_one :response, dependent: :destroy
end
