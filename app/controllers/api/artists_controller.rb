class Api::ArtistsController < ApplicationController
    before_action :set_billboard

    before_action :set_artist, only: [:show, :update, :destroy]
    def index
        render json: @billboard.artists
    end

    def show
        render json: @artist
    end

    def create
        @artist = @billboard.artists.new(artist_params)

        if @artist.save(artist_params)
            render json: @artist
        else
            render json: { errors: @artist.errors } status: :unprocessable_entity
        end 
    end

    def update

        if @artist.update(artist_params)
            render json: @artist
        else
            render json: { errors: @artist.errors } status: :unprocessable_entity
        end
    end

    def destroy
        @artist.destroy
        render json: [ message: 'artist profile deleted' ]
    end

    private

        def artist_params
            params.require(:artist).permit(:name, :listeners, :description)
        end

        def set_artist
            @artist = @billboard.artists.find(params[:id])
        end

        def set_billboard
            @billboard = Billboard.find(params[:id])
        end

end
