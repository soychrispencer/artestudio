#target illustrator
var doc = app.activeDocument;
var dest = Folder('/c/Users/chris/Desktop/Artestudio/_social_qa');
if (!dest.exists) dest.create();
function exportAB(idx, name) {
  doc.artboards.setActiveArtboardIndex(idx);
  var opts = new ExportOptionsPNG24();
  opts.artBoardClipping = true;
  opts.transparency = false;
  opts.horizontalScale = 40;
  opts.verticalScale = 40;
  var f = new File(dest.fsName + '/' + name + '.png');
  doc.exportFile(f, ExportType.PNG24, opts);
}
exportAB(0, 'qa-post');
exportAB(1, 'qa-stories');
dest.fsName;
