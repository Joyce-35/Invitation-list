 function hello() {
    var NAME = prompt ("What is your name")
    var Age = prompt ("What is your age")
    var gender =prompt ("What is your gender")
    var ApproveAge = 18
     if (Age >= ApproveAge){
        alert (NAME + " you are welcome")
     }
        else {
        alert ("Sorry " + NAME + " you are not qualified")  
    }
}