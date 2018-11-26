function password() {
    var password = prompt('Please Enter The Password', ' ');
    var count = 0;
    var ans = "h0n0rs";
    while (count < 100) {
        if (password.toLowerCase() == ans) {
           window.open("https://docs.google.com/document/d/1oQfFP9QBKwIfCvuAvDpQkZTEkbhuod2IgOYl8iJlmS8/edit?usp=sharing");
            break;
        } else {
            password = prompt('Access Denied - Password Incorrect, Please Try Again.');
            if (password.toLowerCase() == ans) {
                window.open("https://docs.google.com/document/d/1oQfFP9QBKwIfCvuAvDpQkZTEkbhuod2IgOYl8iJlmS8/edit?usp=sharing");
                break;
            } else {
                count++
            }
        }
    }

}