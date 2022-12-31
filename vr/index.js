AFRAME.registerComponent('cursor-listener', {
  schema: {
    url: { type: 'string' }
  },

  init: function () {
    var url = this.data.url
    this.el.addEventListener('click', function (evt) {
      window.open(url)
    });
  }
});
