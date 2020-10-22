class BeatsController < ApplicationController
    def index
        beats = Beat.all 
        render json: beats
    end
    def create 
        beat = Beat.new(
            name: params[:name], 
            kicks: params[:kicks], 
            snares: params[:snares],
            claps: params[:claps]
        )
        beat.save
        render json: beat 
    end
end
