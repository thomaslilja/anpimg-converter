module.exports = {
  activate: function() {
    atom.commands.add('atom-text-editor', 'anpimg-converter:convert-to-anp', this.img2anp);
    atom.commands.add('atom-text-editor', 'anpimg-converter:convert-to-image', this.anp2img);
  },

  img2anp: function() {
    var editor = atom.workspace.getActiveTextEditor();
    editor.scan(/img class=\"anpimg\"/g, function(a) {
      a.replace('anpimg');
    });
  },

  anp2img: function() {
    var editor = atom.workspace.getActiveTextEditor();
    editor.scan(/<anpimg/g, function(a) {
      a.replace('<img class="anpimg"');
    });
  }
};
