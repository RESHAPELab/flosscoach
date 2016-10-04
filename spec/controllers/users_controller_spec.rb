require "rails_helper"

RSpec.describe UsersController, type: :controller do

	before do
    @user = User.new(id: 100, email: 'email1@gmail.com', password: 'name1', name: 'oldname')
	  @user.save
	  @another_user = User.new(id: 200, email: 'email2@gmail.com', password: 'name2')
	  @another_user.save
	  # instantiate other user with the mandatory params
    @other_user = {id: 300, email: 'email3@gmail.com', password: 'name3'}               
  end


   describe "POST" do
    context 'with valid params' do
      subject { post :create, :user => @other_user }
      it "should create user show page" do
        post :create, :user => { :email => 'email3@gmail.com', :password => 'anewuserpassword'}
        expect(response).to have_http_status(:success)
      end
    end
    context 'with invalid params' do
      it "should not create user with invalid params" do
        post :create, :user => { :email => @user.email, :password => 'anewuserpassword'}
        expect(response).to render_template(:new)
      end
    end
end

end