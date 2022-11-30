class ReplaceTypeWithLocationType < ActiveRecord::Migration[7.0]
  def change
    remove_column :user_locations, :type
    add_column :user_locations, :location_type, :string
  end
end
