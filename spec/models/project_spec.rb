require "rails_helper"

RSpec.describe Project, type: :model do

  before do
    @project1 = Project.new(id: 1, name: "Projeto1")
    @project_admin = ProjectAdmin.new(id: 1, user_id: 7)
    @project_admin.project = @project1
    @project1.save

    @project2 = Project.new(id: 2, name: "Projeto2")
    @project2.save
  end

  describe "#search" do
    it "should return the search project" do
      search_project = Project.search("Projeto1")
      expect(search_project) ==  @project1
    end

    it "should return all existing projects" do
      projects = Project.all
      search_project = Project.search(nil)

      expect(search_project).to eq projects
    end
  end

  describe "#project_admin" do
    it "project_admin is not nil" do
      expect(@project_admin.project).to eq @project1
    end
  end

end
