class Airline < ApplicationRecord
  has_many :reviews
  before_create :slugify # before creating an instance variable, creating its slug and save.

  def slugify
    self.slug = name.parameterize
  end

  def avg_score
    return 0 unless reviews.count.positive?
    reviews.average(:score).round(2).to_f
  end
end
