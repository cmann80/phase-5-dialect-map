class CreateUserLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :user_locations do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :place, null: false, foreign_key: true
      t.string :type

      t.timestamps
    end
  end
end
