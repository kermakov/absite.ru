var UA=navigator.userAgent;
var isIE=UA.indexOf("compatible")>-1&&UA.indexOf("MSIE")>-1&&UA.indexOf("Opera")==-1;

function setCookie(c_name,value,expiredays,path)
{
var exdate=new Date();
exdate.setDate(exdate.getDate()+expiredays);
if(isIE){document.cookie=c_name+ "=" +escape(value)+";path=/"+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());}
else{document.cookie=c_name+ "=" +escape(value)+((path) ? ";path="+path : "")+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());}
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function ShowA(id)
{
var c=document.getElementById(id);
c.style.display=(c.style.display=="block")?"none":"block"
}

function AddLL(id)
{
  if(readCookie('j'+id)!=null)
  {
    var s=document.getElementById('load');
    if(s.innerHTML.length==0)
    {
    var l=document.createElement('span');
    l.setAttribute('onclick','LoadGame();_gaq.push([\'_trackEvent\', \'J\', \'load\', \''+id+'\']);return false;');
    l.className='a';
    l.title='Ранее вы сохраняли решение этого японского кроссворда. Нажмите, чтобы загрузить его';
    l.innerHTML='Загрузить';
    s.appendChild(l);
    s.innerHTML+=' | ';
    }
  }
}