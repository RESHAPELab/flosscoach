require "rails_helper"

RSpec.describe ProjectsController, type: :controller do

  before do
  	@user1 = User.new(id: 1, name: "user1")
    @user1.save

    @project1 = Project.new(id: 1, name: "project1")
    @project1.save
  end

  describe "#create_project_admin" do
    it "creates a project admin with the current user id and project id" do
			controller.create_project_admin(@user1, @project1)
			projectAdmin = ProjectAdmin.find(1)
			expect(projectAdmin) != nil
    end
  end

end
