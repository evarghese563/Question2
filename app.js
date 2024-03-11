
var li = document.getElementsByTagName("li");
li[0].textContent = "Check Palindrome"

function checkpalindrome (str){
    let x = str.length;
    let temp = x -1;
    flag = 0
    
    for(i=0; i<x/2;i++){
        
        if(str[i] != str[temp]){
            flag=1
        }
        temp-=1
    }

    if(flag == 0){
        return true;
    }else{
        return false;
    }

}


function palindrome(){
    var str = document.getElementById("firstfunc").value;
    li[1].textContent = str;
    
    let check = checkpalindrome(str)

    if(check == true){
        li[2].textContent = "Yes it is a palindrome"
    }else{
        li[2].textContent = "No it is not a palindrome"
    }
}