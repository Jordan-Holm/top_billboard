class Song < ApplicationRecord
  belongs_to :artist

  validates :name, :length, presence: true
end
