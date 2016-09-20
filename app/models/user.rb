require "bcrypt"

class User < ActiveRecord::Base
 	has_and_belongs_to_many :projects
	has_many :project_admin

	validates_presence_of :email, :name
	validates_presence_of :password,  :if => :password
	validates_uniqueness_of :email
	validates_length_of :password, minimum: 6, :if => :password
	validates_confirmation_of :password, :if => :password
	validates_acceptance_of :terms

	before_create :confirmation_token
	def password=(new_password)
		@password = new_password
		self.encrypted_password = BCrypt::Password.create(@password)
	end

	def password
		@password
	end

	def valid_password?(password_to_validate)
		BCrypt::Password.new(encrypted_password) == password_to_validate
	end



	def email_activate
	    self.email_confirmed = true
	    self.confirm_token = nil
	    save!(:validate => false)
	  end

	#TODO: Refactor
	def self.find_or_create_with_omniauth(auth)
	    user = self.find_or_create_by(:provider => auth.provider,:uid => auth.uid)
	    user.assign_attributes({ name: user.name || auth.info.name,
	    	email: user.email || auth.info.email || "#{auth.info.name}@flosscoach.com",
	    	photo_url: user.photo_url || auth.info.image,
	    	fb_token: auth.credentials.token,
	    	password: "abababbbb", password_confirmation: "abababbbb"})
	    user.save!
	    user
	end


	private
	def confirmation_token
      if self.confirm_token.blank?
          self.confirm_token = SecureRandom.urlsafe_base64.to_s
      end
    end


end
