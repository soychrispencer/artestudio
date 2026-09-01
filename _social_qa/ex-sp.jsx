var d=app.activeDocument;
var dest=Folder('/c/Users/chris/Desktop/Artestudio/_social_qa');
if(!dest.exists) dest.create();
function ex(i,n){ d.artboards.setActiveArtboardIndex(i); var o=new ExportOptionsPNG24(); o.artBoardClipping=true; o.transparency=false; o.horizontalScale=40; o.verticalScale=40; d.exportFile(new File(dest.fsName+'/'+n+'.png'), ExportType.PNG24, o); }
ex(0,'sp-story'); ex(1,'sp-post'); 'exported';
