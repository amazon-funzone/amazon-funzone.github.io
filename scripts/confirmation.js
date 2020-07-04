window.onload = function() {
    var email = localStorage.getItem("emailorno");
    document.getElementById("userinfo").innerHTML = email + "<a class='textlinks' href='./index.html'> Change</a>";
    document.getElementById("emailstorage").value = email;
}

function navtosignup() {
    window.location = "https://www.amazon.in/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=inflex&ignoreAuthState=1&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%2F%3Fie%3DUTF8%26ref_%3Dnav_youraccount_switchacct&prevRID=146G7QDSZMB34ZDJV862&openid.assoc_handle=inflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&ref_=ap_sw_aa&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&disableLoginPrepopulate=1&switch_account=signin&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0";
}