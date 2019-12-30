var per = 0;
var link = 0;
function link(){
    per = 0;
    if(document.getElementById('#admin').checked){
         per += 8;
     }
    if(document.getElementById('#audit').checked){
         per += 128;
    }
    if(document.getElementById('#insight').checked){
          per += 524288;
    }
    if(document.getElementById('#server').checked){
           per += 32;
    }
    if(document.getElementById('#role').checked){
       per += 268435456;
    }
    if(document.getElementById('#channel').checked){
           per += 16;
    }
    if(document.getElementById('#kick').checked){
        per += 2;
    }
    if(document.getElementById('#ban').checked){
        per += 4;
    }
    if(document.getElementById('#invite').checked){
        per += 1;
    }
    if(document.getElementById('#nick').checked){
        per += 67108864;
    }
    if(document.getElementById('#mnick').checked){
        per += 134217728;
    }
    if(document.getElementById('#memoji').checked){
        per += 1073741824;
    }
    if(document.getElementById('#webhook').checked){
        per += 536870912;
    }
    if(document.getElementById('#view').checked){
        per += 1024;
    }
    if(document.getElementById('#send').checked){
        per += 2048;
    }
    if(document.getElementById('#tts').checked){
        per += 4096;
    }
    if(document.getElementById('#mmsg').checked){
        per += 8192;
    }
    if(document.getElementById('#link').checked){
        per += 16384;
    }
    if(document.getElementById('#file').checked){
        per += 32768;
    }
    if(document.getElementById('#history').checked){
        per += 65536;
    }
    if(document.getElementById('#mention').checked){
        per += 131072;
    }
    if(document.getElementById('#emoji').checked){
        per += 262144;
    }
    if(document.getElementById('#react').checked){
        per += 64;
    }
    if(document.getElementById('#connect').checked){
        per += 1048576;
    }
    if(document.getElementById('#speak').checked){
        per += 2097152;
    }
    if(document.getElementById('#mmute').checked){
        per += 4194304;
    }
    if(document.getElementById('#smute').checked){
        per += 8388608;
    }
    if(document.getElementById('#move').checked){
        per += 16777216;
    }
    if(document.getElementById('#vact').checked){
        per += 33554432;
    }
    if(document.getElementById('#priority').checked){
        per += 256;
    }
    link = 'https://discordapp.com/oauth2/authorize?client_id='+document.getElementById('#botid').value+'&permissions='+per+'&scope=bot';
    document.getElementById('#link').innerHTML = link;
    document.getElementById('#a').innerHTML = '아래 링크를 복사하거나 <a href = '+link+'>여기</a>를 클릭해 이동해주세요';
}
