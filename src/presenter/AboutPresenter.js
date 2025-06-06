class AboutPresenter {
    constructor(view, model) {
        this._view = view;
        this._model = model;
        this.init();
    }

    async init() {
        try {
            this._view.showLoading();
            const [teamMembers, aboutImages] = await Promise.all([
                this._model.getTeamMembers(),
                this._model.getAboutImages()
            ]);
            
            this._view.renderTeamMembers(teamMembers);
            this._view.renderAboutImages(aboutImages);
            this._view.hideLoading();
        } catch (error) {
            this._view.showError('Failed to load about page content');
            console.error(error);
        }
    }
}

export default AboutPresenter;