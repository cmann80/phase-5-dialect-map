class SurveysController < ApplicationController
    
    
    skip_before_action :authorize
    
    def show
        survey = Survey.first
        render json: survey, status: :ok

    end
end
