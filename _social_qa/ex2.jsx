var doc=app.activeDocument; var dest=Folder('/c/Users/chris/Desktop/Artestudio/_social_qa');
function ex(i,n){doc.artboards.setActiveArtboardIndex(i); var o=new ExportOptionsPNG24(); o.artBoardClipping=true; o.transparency=false; o.horizontalScale=55; o.verticalScale=55; doc.exportFile(new File(dest.fsName+'/'+n+'.png'), ExportType.PNG24, o);}
ex(0,'v2-post'); ex(1,'v2-stories'); 'done';
