class CreateResponses < ActiveRecord::Migration[7.0]
  def change
    create_table :responses do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :r1
      t.string :r2
      t.string :r3
      t.string :r4
      t.string :r5
      t.string :r6
      t.string :r7
      t.string :r8
      t.string :r9
      t.string :r10

      t.timestamps
    end
  end
end
