class Billboard < ApplicationRecord
    has_many :artists, dependent: :destroy

    validates :name, :genre, :description, presence: true
    validates :genre, uniqueness: true
end
