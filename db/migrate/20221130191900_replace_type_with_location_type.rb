class ReplaceTypeWithLocationType < ActiveRecord::Migration[7.0]
  def change
    delete_column
  end
end
