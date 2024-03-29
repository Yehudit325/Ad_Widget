class Controller {
	constructor(view) {
        this.view = view;
	}
    
    init() {
        this.getItemData();
    }

    getItemData() {
        const url = "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?"
        + "app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2F"
        + "digiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday"
        + "-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible"
        + "=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article"
        + "%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init"
        fetch(url)
        .then(response => response.json())
        .then(data => this.handleItemData(data))
        .catch(error => console.error('Error:', error));
    }

    handleItemData(data) {
        data.list.forEach(this.pushItems);
        this.view.init()
    }

    pushItems(item) {
        items.push({image: item.thumbnail[0].url,
                    title: item.name,
                    branding: item.branding,
                    url: item.url,
                    catagory: item.categories[0],
                    id: item.id
                    });
    } 

    getItems() {
        return items;
    }
}

