class CreateProjectAdmins < ActiveRecord::Migration
  def change
    create_table :project_admins do |t|
      t.belongs_to :user
    	t.belongs_to :project
    	t.index [:user, :project]
      t.timestamps null: false
    end
  end
end
