class CulturePresenter {
    constructor(view, model) {
        this._view = view;
        this._model = model;
        this.init();
        this.bindEvents();
    }

    async init() {
        try {
            this._view.showLoading();
            const cultures = await this._model.getCultures();
            this._view.render(cultures);
        } catch (error) {
            this._view.showError('Failed to load cultural content');
            console.error(error);
        }
    }

    bindEvents() {
        // Delegate event handling for learn more buttons
        if (this._view.contentArea) {
            this._view.contentArea.addEventListener('click', async (e) => {
                if (e.target.classList.contains('btn-learn-more')) {
                    const cultureId = e.target.dataset.id;
                    await this.showCultureDetail(cultureId);
                } else if (e.target.classList.contains('btn-back')) {
                    await this.init();
                }
            });
        }
    }

    async showCultureDetail(id) {
        try {
            this._view.showLoading();
            const culture = await this._model.getCultureById(id);
            if (culture) {
                this._view.renderDetail(culture);
            } else {
                this._view.showError('Culture item not found');
            }
        } catch (error) {
            this._view.showError('Failed to load culture details');
            console.error(error);
        }
    }

    async filterByCategory(category) {
        try {
            this._view.showLoading();
            const cultures = await this._model.getCulturesByCategory(category);
            this._view.render(cultures);
        } catch (error) {
            this._view.showError('Failed to filter cultures');
            console.error(error);
        }
    }
}

export default CulturePresenter;
