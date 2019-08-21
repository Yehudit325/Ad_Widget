class Controller {
	constructor(view) {
	    this.view = view;
	}
    
    init() {
        this.view.init();
    }

    getData() {
        
    }
}

const widget = new Controller(view);

widget.init();