//password
//emailid
//contact
//gender
//dropdown

function checkAll()
{
    //window.alert("Hi");

    //let uname = document.getElementById("fName").value;

    /*-------------------------------------------ENTER THE NAME--------------------------------------*/
    let uname =document.myForm.fName.value;
    let regName = "[a-zA-Z]{3,20}";

    if(uname.trim() == "")
    {
        window.alert("This is is Required");
        document.getElementById("fName").focus();
        return false;
    }

    if(!uname.match(regName))
    {
        window.alert("Username must contain only character min - 3 and max - 20");
        document.getElementById("fName").focus();
        return false;
    }


    if(uname.trim() == "")
    {
        window.alert("This Field is Required");
        document.getElementById("fName").focus();
        return false;
    }
/* -------------------------------------SELECT QQUALIFICATIONS-------------------------------------------*/
    let uedu = document.myForm.edu;

    if(uedu[0].checked == false && uedu[1].checked == false && uedu[2].checked == false && uedu[3].checked == false)
    {
        window.alert("Please Select Your Qualification");
        return false;
    }

    /* --------------------------------------------ENTER CONTACT----------------------------------------*/

    let ucon = document.myForm.con.value;
    let regCon = "^[0-9]{10}$"
    if((ucon.trim()==""))
    {
        window.alert("Please Enter Your Contact");
        document.getElementById("con").focus();
        return false;
    }
    if(!ucon.match(regCon))
    {
        window.alert("Please Enter Valid Contact");
        document.getElementById("con").focus();
        return false;
    }

 /* --------------------------------------------Re - ENTER CONTACT---------------------------------------*/

    let Recon = document.myForm.ReCon.value;

    if(Recon.trim()=="")
    {
        window.alert("Please Re-Enter Your Contact");
        document.getElementById("ReCon").focus();
        return false;
    }
  
    if(!(Recon.match(ucon)))
    {
        window.alert("Contact Should not match");
        document.getElementById("Re-con").focus();
        return false;
    }

    /*----------------------------------------ENTER THE EMAIL-ID-----------------------------------------*/

    let email1 = document.myForm.email.value;
    let regEmail = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

    if(email1.trim()=="")
    {
        window.alert("Please Enter Your Email");
        document.getElementById("email").focus();
        return false;
    }

    if(!email1.match(regEmail))
    {
        window.alert("Please Enter Valid Email-Id");
        document.getElementById("email1").focus();
        return false;
    }

/*--------------------------------------------ENTER PASSWORD--------------------------------------------*/
  

    let pass1 = document.myForm.pass.value;
    // let regPass = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,15}$/;
    let regPass = "^[a-zA-Z]{3,6}";

    if(pass1.trim()=="")
    {
        window.alert("Please Enter Your Password");
        document.getElementById("pass").focus();
        return false;
    }
    if(!pass1.match(regPass))
    {
        window.alert("Please Enter Valid Password");
        document.getElementById("pass1").focus();
        return false;
    }

//    -------------------------------------------------------------------------------

    let dob = document.myForm.date1.value;
    if(dob.trim()=="")
    {
        window.alert("Please Enter your DOB");
        document.getElementById("date1").focus();
        return false;
    }


    

}



