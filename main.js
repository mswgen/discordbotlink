var per = 0;
var link = 0;
var link = function(){
    per = 0;
    if(document.querySelector('#admin').checked){
         per += 8;
     }
    if(document.querySelector('#audit').checked){
         per += 128;
    }
    if(document.querySelector('#insight').checked){
          per += 524288;
    }
    if(document.querySelector('#server').checked){
           per += 32;
    }
    if(document.querySelector('#role').checked){
       per += 268435456;
    }
    if(document.querySelector('#channel').checked){
           per += 16;
    }
    if(document.querySelector('#kick').checked){
        per += 2;
    }
    if(document.querySelector('#ban').checked){
        per += 4;
    }
    if(document.querySelector('#invite').checked){
        per += 1;
    }
    if(document.querySelector('#nick').checked){
        per += 67108864;
    }
    if(document.querySelector('#mnick').checked){
        per += 134217728;
    }
    if(document.querySelector('#memoji').checked){
        per += 1073741824;
    }
    if(document.querySelector('#webhook').checked){
        per += 536870912;
    }
    if(document.querySelector('#view').checked){
        per += 1024;
    }
    if(document.querySelector('#send').checked){
        per += 2048;
    }
    if(document.querySelector('#tts').checked){
        per += 4096;
    }
    if(document.querySelector('#mmsg').checked){
        per += 8192;
    }
    if(document.querySelector('#link').checked){
        per += 16384;
    }
    if(document.querySelector('#file').checked){
        per += 32768;
    }
    if(document.querySelector('#history').checked){
        per += 65536;
    }
    if(document.querySelector('#mention').checked){
        per += 131072;
    }
    if(document.querySelector('#emoji').checked){
        per += 262144;
    }
    if(document.querySelector('#react').checked){
        per += 64;
    }
    if(document.querySelector('#connect').checked){
        per += 1048576;
    }
    if(document.querySelector('#speak').checked){
        per += 2097152;
    }
    if(document.querySelector('#mmute').checked){
        per += 4194304;
    }
    if(document.querySelector('#smute').checked){
        per += 8388608;
    }
    if(document.querySelector('#move').checked){
        per += 16777216;
    }
    if(document.querySelector('#vact').checked){
        per += 33554432;
    }
    if(document.querySelector('#priority').checked){
        per += 256;
    }
    link = 'https://discordapp.com/oauth2/authorize?client_id='+document.querySelector('#botid').value+'&permissions='+per+'&scope=bot';
    document.querySelector('#link').innerHTML = link;
    document.querySelector('#a').innerHTML = '아래 링크를 복사하거나 <a href = '+link+'>여기</a>를 클릭해 이동해주세요';
};
