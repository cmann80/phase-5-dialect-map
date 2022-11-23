class SurveysController < ApplicationController

    def show
        survey = Survey.find(params[:id])
        render json: survey, status: :ok

    end
end
