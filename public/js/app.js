function Post(title, body, tags, link) {
	this.title = title;
	this.body = body;
	this.tags = tags;
	this.link = link;

	this.items = localStorage.getItem("posts");
	this.key = "posts";
	   //  // reset the form and add autofocus back to first input
    // $Book[0].reset();
    // $('#add-post-modal').focus();
  };

function SaveRender() {

}

Post.prototype = new SaveRender();
Post.prototype.constructor = Post;

SaveRender.prototype.saveToLs = function(obj) {
	if (this.items) {
		items_json = JSON.parse(this.items);
	} else {
		items_json = [];
	}

	items_json.push(obj);

	localStorage.setItem(this.key, JSON.stringify(items_json));
}

SaveRender.prototype.renderTemplate = function(source, target) {
	var items_json = JSON.parse(this.items);

	var templatePost = _.template($(source).html());

	$(target).append(templatePost(this));

	// _.each(items_json, function(ad) {
	// 	$(target).append(templateBook(ad));
	// })
}


$("#save-post").on("click", function() {
	var temp = new Post($("#title").val(), $("#body").val(), $("#tags").val(), $("#link").val());
	console.log(temp);
	temp.renderTemplate("#template-source", "#target");
	temp.saveToLs(temp);
})

function pageLoad() {
	var items_json = JSON.parse(localStorage.getItem("posts"));

	var templatePost = _.template($("#template-source").html());

	//$(target).append(templateBook(this));

	_.each(items_json, function(ad) {
		$("#target").append(templatePost(ad));
	});
}

pageLoad();
