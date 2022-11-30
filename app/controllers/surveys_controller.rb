class SurveysController < ApplicationController
    
    
    skip_before_action :authorize
    
    def show
        survey = Survey.find(params[:id])
        render json: survey, status: :ok

    end
end
