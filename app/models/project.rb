class Project < ActiveRecord::Base

  belongs_to :languages
  belongs_to :operational_systems
  belongs_to :tools
  has_many :widgets
  has_many	:project_admin, :through => :user
  has_many	:project_admin

  has_and_belongs_to_many :owners, class_name: 'User'

  def self.search(search)
    if search
      Project.where('name LIKE ?', "%#{search}%")
    else
      Project.all
    end
  end
end

