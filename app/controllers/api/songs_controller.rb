class Api::SongsController < ApplicationController
    before_action :set_artist
    before_action :set_song, only: [ :show, :update, :destroy ]

    def index
        render json: @artist.songs
    end

    def show
        render json: @song
    end

    def create
        @song = @artist.songs.new(song_params)

        if @song.save(song_params)
            render json: @song
        else
            render json: { errors: @song.errors } status: :unprocessable_entity
    end

    def update

        if @song.update(song_params)
            render json: @song
    end

    def destroy
        @song.destroy
        render json: [ message: 'song deleted' ]
    end

    private

        def song_params
            params.require(:song).permit(:name, :length)  
        end

        def set_song
            @song = artist.songs.find(params[:id])
        end

        def set_artist
            @artist = Artist.find(params[:id])
        end
end
