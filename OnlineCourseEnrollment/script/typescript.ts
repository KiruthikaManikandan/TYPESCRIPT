let AutoincrementUserID=1000;
let AutoincrementCourseID=100;

// let usernamestatus=false;
// let useragestatus=false;
// let usernumberstatus=false;


class user{
    username:string;
    userage:number;
    usernumber:number;
    userid:string;
    constructor(name:string,age:number,mobileno:number)
    {
        AutoincrementUserID++;
        this.userid="UI"+AutoincrementUserID.toString();
        this.username=name;
        this.userage=age;
        this.usernumber=mobileno;
    }
}
class course{
    courseid:string;
    coursename:string;
    requireday:number;
    constructor(cname:string,reqday:number){
        AutoincrementCourseID++;
        this.courseid="CI"+AutoincrementCourseID.toString();
        this.coursename=cname;
        this.requireday=reqday;
   }

}
let UserList:Array<user>=new Array<user>();
UserList.push(new user("kiruthika",22,6381256002))
UserList.push(new user("Manikandan",44,9994159586));

let CourseList:Array<course>=new Array<course>();

//This function shows only main page
function maindiv()
{
    let maindiv1=document.getElementById("maindiv")as HTMLDivElement;
    let newuserdiv1=document.getElementById("newuserdiv")as HTMLDivElement;
    let logindiv1=document.getElementById("logindiv")as HTMLDivElement;
    let optiondiv1=document.getElementById("optiondiv")as HTMLDivElement;
    let Availablediv1=document.getElementById("Availablediv")as HTMLDivElement;
    maindiv1.style.display="block";
    newuserdiv1.style.display="none";
    logindiv1.style.display="none";
    optiondiv1.style.display="none";
    Availablediv1.style.display="none";   
}
//This function shows only newuser registration page
function newuserpage()
{
    let maindiv1=document.getElementById("maindiv")as HTMLDivElement;
    let newuserdiv1=document.getElementById("newuserdiv")as HTMLDivElement;
    let logindiv1=document.getElementById("logindiv")as HTMLDivElement;
    let optiondiv1=document.getElementById("optiondiv")as HTMLDivElement;
    let Availablediv1=document.getElementById("Availablediv")as HTMLDivElement;
    maindiv1.style.display="none";
    newuserdiv1.style.display="block";
    logindiv1.style.display="none";
    optiondiv1.style.display="none";
    Availablediv1.style.display="none";   
}
//This function check the user input is valid or invalid
function checkuser()
{
    let usernamestatus=(document.getElementById("username")as HTMLInputElement).value;
    let useragestatus=(document.getElementById("age")as HTMLInputElement).value;
    let usernumberstatus=(document.getElementById("phonenumber")as HTMLInputElement).value;
    UserList.push(new user(usernamestatus,+useragestatus,+usernumberstatus));
    
    if(usernamestatus==null&& useragestatus==null&& usernumberstatus==null)
     {
         alert("Enter a valid input");
     }
     else
     {
        alert("Success");
     }
}
 
  
//This function show only login page
function login()
{
    let maindiv1=document.getElementById("maindiv")as HTMLDivElement;
    let newuserdiv1=document.getElementById("newuserdiv")as HTMLDivElement;
    let logindiv1=document.getElementById("logindiv")as HTMLDivElement;
    let optiondiv1=document.getElementById("optiondiv")as HTMLDivElement;
    let Availablediv1=document.getElementById("Availablediv")as HTMLDivElement;
    maindiv1.style.display="none";
    newuserdiv1.style.display="none";
    logindiv1.style.display="block";
    optiondiv1.style.display="none";
    Availablediv1.style.display="none";
    //Available user 
    let available=document.getElementById("availableuser")as HTMLLabelElement;
    available.innerHTML = "<h2>Available User</h2>";
    for (let i = 0; i < UserList.length; i++)
    {

        available.innerHTML+= `User Name : ${UserList[i].username} | User Id : ${UserList[i].userid}<br>`;
    }
    checkuserid();
}
//This function is check exisiting userid present or not in user class
function checkuserid()
{
    let confirmstatus=false;
    let confirmID=(document.getElementById("userid")as HTMLInputElement).value;
    for(let i=0;i<UserList.length;i++)
    {
        if(confirmID==UserList[i].userid)
        {
            confirmstatus=true;

        }
        else
        {
            confirmstatus=false;
        }
        if(confirmstatus)
        {
            alert("Valid User");
        }
        else
        {
            alert("Invalid User");
        }

    }
    
}
//This function only show the option: Available course/Enroll Course
function option()
{
    let maindiv1=document.getElementById("maindiv")as HTMLDivElement;
    let newuserdiv1=document.getElementById("newuserdiv")as HTMLDivElement;
    let logindiv1=document.getElementById("logindiv")as HTMLDivElement;
    let optiondiv1=document.getElementById("optiondiv")as HTMLDivElement;
    let Availablediv1=document.getElementById("Availablediv")as HTMLDivElement;
    maindiv1.style.display="none";
    newuserdiv1.style.display="none";
    logindiv1.style.display="none";
    optiondiv1.style.display="block";
    Availablediv1.style.display="none";
}
//This function show the available course option
function available()
{
    let maindiv1=document.getElementById("maindiv")as HTMLDivElement;
    let newuserdiv1=document.getElementById("newuserdiv")as HTMLDivElement;
    let logindiv1=document.getElementById("logindiv")as HTMLDivElement;
    let optiondiv1=document.getElementById("optiondiv")as HTMLDivElement;
    let Availablediv1=document.getElementById("Availablediv")as HTMLDivElement;
    maindiv1.style.display="none";
    newuserdiv1.style.display="none";
    logindiv1.style.display="none";
    optiondiv1.style.display="none";
    Availablediv1.style.display="block";
}
//This function show enroll course history
function enrolledhistory()
{
    let maindiv1=document.getElementById("maindiv")as HTMLDivElement;
    let newuserdiv1=document.getElementById("newuserdiv")as HTMLDivElement;
    let logindiv1=document.getElementById("logindiv")as HTMLDivElement;
    let optiondiv1=document.getElementById("optiondiv")as HTMLDivElement;
    let Availablediv1=document.getElementById("Availablediv")as HTMLDivElement;
    maindiv1.style.display="none";
    newuserdiv1.style.display="none";
    logindiv1.style.display="none";
    optiondiv1.style.display="none";
    Availablediv1.style.display="none";
    
    let enrollname=(document.getElementById("course")as HTMLSelectElement).value;
    let enrollday=(document.getElementById("RequiredDate")as HTMLInputElement).value;
    
    CourseList.push(new course(enrollname,+enrollday));

    let namelabel=(document.getElementById("Coursename")as HTMLLabelElement);
    let daylabel=(document.getElementById("day")as HTMLLabelElement);
    let totaldaylabel=(document.getElementById("totalday")as HTMLLabelElement);

    for(let i=0;i<CourseList.length;i++)
    {
         namelabel.innerHTML=`Course Name : ${CourseList[i].coursename}`;
         daylabel.innerHTML=`Required day : ${CourseList[i].requireday}<br>`;
    }
    for(let i=0;i<CourseList.length;i++){
        totaldaylabel.innerHTML+=CourseList[i].requireday;
        alert("Total Day is:"+totaldaylabel.innerHTML);
  }   
}