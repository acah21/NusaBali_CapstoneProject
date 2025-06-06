class DestinationPresenter {
    constructor(view, model) {
        this._view = view;
        this._model = model;
        this.init();
    }

    async init() {
        try {
            const destinations = await this._model.getDestinations();
            this._view.render(destinations);
        } catch (error) {
            this._view.showError('Failed to load destinations');
        }
    }

    async showDestinationDetail(id) {
        try {
            const destination = await this._model.getDestinationById(id);
            if (destination) {
                this._view.renderDetail(destination);
            } else {
                this._view.showError('Destination not found');
            }
        } catch (error) {
            this._view.showError('Failed to load destination details');
        }
    }
}

export default DestinationPresenter;
