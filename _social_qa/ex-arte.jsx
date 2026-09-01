var doc=app.activeDocument;
if (String(doc.name).indexOf('ArteStudio')<0) throw new Error('wrong doc');
var dest=Folder('/c/Users/chris/Desktop/Artestudio/_social_qa');
if(!dest.exists) dest.create();
function ex(i,n){
  doc.artboards.setActiveArtboardIndex(i);
  var o=new ExportOptionsPNG24(); o.artBoardClipping=true; o.transparency=false;
  o.horizontalScale=50; o.verticalScale=50;
  doc.exportFile(new File(dest.fsName+'/'+n+'.png'), ExportType.PNG24, o);
}
ex(0,'arte-post'); ex(1,'arte-stories');
'done';
