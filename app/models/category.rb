class Category < ApplicationRecord
  validates_uniqueness_of :name
end
