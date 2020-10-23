class CreateBeats < ActiveRecord::Migration[6.0]
  def change
    create_table :beats do |t|
      t.string :name
      t.integer :user_id 
      t.json :kicks, default: []
      t.json :eight, default: []
      t.json :claps, default: []
      t.json :hats, default: []
      t.timestamps
    end
  end
end
