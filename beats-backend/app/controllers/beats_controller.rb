class BeatsController < ApplicationController
    def index
        beats = Beat.all 
        render json: beats
    end
end
