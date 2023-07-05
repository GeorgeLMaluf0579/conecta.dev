class CreateKinds < ActiveRecord::Migration[6.1]
  def change
    create_table :kinds do |t|
      t.string :description, limit: 40

      t.timestamps
    end
  end
end
