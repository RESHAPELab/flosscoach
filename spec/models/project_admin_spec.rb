require "rails_helper"

RSpec.describe ProjectAdmin, type: :model do
	it "#belongs_to project" do
    t = ProjectAdmin.reflect_on_association(:project)
    expect(t.macro.should) == :has_many
  end

	it "#belongs_to user" do
	  t = ProjectAdmin.reflect_on_association(:user)
	  expect(t.macro.should) == :has_one
  end
end
