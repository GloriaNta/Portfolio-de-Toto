function isMailValid(mail){
    if(mail.length<8) return false;
    if(mail.indexOf('@')<0) return false;
    if(mail.split('@')[1].indexOf('.')<0) return false;
    return true;
}

if (isMailValid("bob@gmail.com") == true){
    console.log("Mail validé");
}else{
    console.log("Erreur");
}
