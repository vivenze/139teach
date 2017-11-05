/**
 * Created by Administrator on 2017/9/9 0009.
 */

function boxchecked(c){
    var img=document.getElementById("labelimg");
    if(c.checked){
        img.style.display='block';
    }else{
        img.style.display='none';
    }

}

function checktea(d){
    var cfli=document.getElementsByClassName("c-fli");
    var cdiv=document.getElementsByClassName("cdiv");
    var checkone=document.getElementsByClassName("checkone");
    for(var i=0;i<cfli.length;i++){
        if(cfli[i].checked){
            cdiv[i].className=" ";
            checkone[0].style.display='none';
            d.value="зЂВс";
        }
    }
}