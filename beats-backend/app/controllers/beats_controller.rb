class BeatsController < ApplicationController
    def index
        beats = Beat.all 
        render json: beats
    end
    def create 
        beat = Beat.new(
            name: params[:name], 
            kicks: params[:kicks], 
            eight: params[:eight],
            claps: params[:claps],
            hats: params[:hats]
        )
        beat.save
        render json: beat 
    end
end
