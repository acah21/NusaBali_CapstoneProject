class HomePresenter {
    constructor(view, model) {
        this._view = view;
        this._model = model;
        this.init();
    }

    async init() {
        try {
            // Load data from model
            const [testimonials, destinations] = await Promise.all([
                this._model.getTestimonials(),
                this._model.getDestinations()
            ]);
            
            // Update view with data
            this._view.renderContent();
            this._view.renderTestimonials(testimonials);
            this._view.renderDestinations(destinations);
            
            // Initialize map and other features
            this._view.initializeMap();
            this._view.bindExploreButton();
        } catch (error) {
            console.error('Error initializing home page:', error);
        }
    }
}

export default HomePresenter;