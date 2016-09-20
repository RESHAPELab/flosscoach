class AddAttributesToUser < ActiveRecord::Migration
  def change
  	add_column :users, :programming_language, :text
  	add_column :users, :operational_systems, :text
  	add_column :users, :contributed_projects, :text
  end
end
