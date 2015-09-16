class FrontPagesController < ApplicationController
	def index
		gon.giantbomb = ENV['giantbomb_key']
	end

	def about
	end

end
