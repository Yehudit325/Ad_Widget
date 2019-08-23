class View {

	init() {
        this.renderItems();
    }

    renderItems() {
        const itemList = controller.getItems();
        const widget = document.getElementById("widget");
        widget.innerHTML = ''; // clear HTML from the DOM
        for (let i = 0; i < itemList.length; ++i) {
            // Create item container div
            let item = document.createElement('div');
            item.className = "item-container";
            item.id = "item-id-" + itemList[i].id;

            let itemPic = document.createElement('div');
            itemPic.className = "item-pic";

            //create a element
            var a = document.createElement('a');
            a.href = itemList[i].url;

            // Create image element
            let pic = document.createElement('img');
            pic.src = itemList[i].image;
            pic.alt = itemList[i].title;
            itemPic.append(pic);

            
            // Create text elements
            let title = document.createElement('span'); 
            title.innerText = itemList[i].title + "\n";
            title.className = "title";
            let branding = document.createElement('span'); 
            branding.innerText = itemList[i].branding;
            branding.className = "branding";

            // Append child nodes accordigly      
            a.append(itemPic, title, branding);
            item.append(a);
            widget.append(item);
        }
    }
    
}
