Template[getTemplate('postCategories')].helpers({
  categoryLink: function(){
    return getCategoryUrl(this.slug);
  }
})