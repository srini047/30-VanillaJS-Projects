function encrypt() {
    var inputEmail = document.getElementById('email').value;
    var input = document.getElementById('password').value;

    console.log('Username: ', inputEmail);
    console.log('Password: ', input)

    var encrypted = CryptoJS.AES.encrypt(input, "secret-key").toString();

    var decrypted = CryptoJS.AES.decrypt(encrypted, "secret-key").toString(CryptoJS.enc.Utf8);

    console.log("Encrypted Password: ", encrypted);
    console.log("Decrypted Password: ", decrypted)
}
