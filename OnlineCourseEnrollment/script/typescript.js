var AutoincrementUserID = 1000;
var AutoincrementCourseID = 100;
// let usernamestatus=false;
// let useragestatus=false;
// let usernumberstatus=false;
var user = /** @class */ (function () {
    function user(name, age, mobileno) {
        AutoincrementUserID++;
        this.userid = "UI" + AutoincrementUserID.toString();
        this.username = name;
        this.userage = age;
        this.usernumber = mobileno;
    }
    return user;
}());
var course = /** @class */ (function () {
    function course(cname, reqday) {
        AutoincrementCourseID++;
        this.courseid = "CI" + AutoincrementCourseID.toString();
        this.coursename = cname;
        this.requireday = reqday;
    }
    return course;
}());
var UserList = new Array();
UserList.push(new user("kiruthika", 22, 6381256002));
UserList.push(new user("Manikandan", 44, 9994159586));
var CourseList = new Array();
//This function shows only main page
function maindiv() {
    var maindiv1 = document.getElementById("maindiv");
    var newuserdiv1 = document.getElementById("newuserdiv");
    var logindiv1 = document.getElementById("logindiv");
    var optiondiv1 = document.getElementById("optiondiv");
    var Availablediv1 = document.getElementById("Availablediv");
    maindiv1.style.display = "block";
    newuserdiv1.style.display = "none";
    logindiv1.style.display = "none";
    optiondiv1.style.display = "none";
    Availablediv1.style.display = "none";
}
//This function shows only newuser registration page
function newuserpage() {
    var maindiv1 = document.getElementById("maindiv");
    var newuserdiv1 = document.getElementById("newuserdiv");
    var logindiv1 = document.getElementById("logindiv");
    var optiondiv1 = document.getElementById("optiondiv");
    var Availablediv1 = document.getElementById("Availablediv");
    maindiv1.style.display = "none";
    newuserdiv1.style.display = "block";
    logindiv1.style.display = "none";
    optiondiv1.style.display = "none";
    Availablediv1.style.display = "none";
}
//This function check the user input is valid or invalid
function checkuser() {
    var usernamestatus = document.getElementById("username").value;
    var useragestatus = document.getElementById("age").value;
    var usernumberstatus = document.getElementById("phonenumber").value;
    UserList.push(new user(usernamestatus, +useragestatus, +usernumberstatus));
    if (usernamestatus == null && useragestatus == null && usernumberstatus == null) {
        alert("Enter a valid input");
    }
    else {
        alert("Success");
    }
}
//This function show only login page
function login() {
    var maindiv1 = document.getElementById("maindiv");
    var newuserdiv1 = document.getElementById("newuserdiv");
    var logindiv1 = document.getElementById("logindiv");
    var optiondiv1 = document.getElementById("optiondiv");
    var Availablediv1 = document.getElementById("Availablediv");
    maindiv1.style.display = "none";
    newuserdiv1.style.display = "none";
    logindiv1.style.display = "block";
    optiondiv1.style.display = "none";
    Availablediv1.style.display = "none";
    //Available user 
    var available = document.getElementById("availableuser");
    available.innerHTML = "<h2>Available User</h2>";
    for (var i = 0; i < UserList.length; i++) {
        available.innerHTML += "User Name : ".concat(UserList[i].username, " | User Id : ").concat(UserList[i].userid, "<br>");
    }
    checkuserid();
}
//This function is check exisiting userid present or not in user class
function checkuserid() {
    var confirmstatus = false;
    var confirmID = document.getElementById("userid").value;
    for (var i = 0; i < UserList.length; i++) {
        if (confirmID == UserList[i].userid) {
            confirmstatus = true;
        }
        else {
            confirmstatus = false;
        }
        if (confirmstatus) {
            alert("Valid User");
        }
        else {
            alert("Invalid User");
        }
    }
}
//This function only show the option: Available course/Enroll Course
function option() {
    var maindiv1 = document.getElementById("maindiv");
    var newuserdiv1 = document.getElementById("newuserdiv");
    var logindiv1 = document.getElementById("logindiv");
    var optiondiv1 = document.getElementById("optiondiv");
    var Availablediv1 = document.getElementById("Availablediv");
    maindiv1.style.display = "none";
    newuserdiv1.style.display = "none";
    logindiv1.style.display = "none";
    optiondiv1.style.display = "block";
    Availablediv1.style.display = "none";
}
//This function show the available course option
function available() {
    var maindiv1 = document.getElementById("maindiv");
    var newuserdiv1 = document.getElementById("newuserdiv");
    var logindiv1 = document.getElementById("logindiv");
    var optiondiv1 = document.getElementById("optiondiv");
    var Availablediv1 = document.getElementById("Availablediv");
    maindiv1.style.display = "none";
    newuserdiv1.style.display = "none";
    logindiv1.style.display = "none";
    optiondiv1.style.display = "none";
    Availablediv1.style.display = "block";
}
//This function show enroll course history
function enrolledhistory() {
    var maindiv1 = document.getElementById("maindiv");
    var newuserdiv1 = document.getElementById("newuserdiv");
    var logindiv1 = document.getElementById("logindiv");
    var optiondiv1 = document.getElementById("optiondiv");
    var Availablediv1 = document.getElementById("Availablediv");
    maindiv1.style.display = "none";
    newuserdiv1.style.display = "none";
    logindiv1.style.display = "none";
    optiondiv1.style.display = "none";
    Availablediv1.style.display = "none";
    var enrollname = document.getElementById("course").value;
    var enrollday = document.getElementById("RequiredDate").value;
    CourseList.push(new course(enrollname, +enrollday));
    var namelabel = document.getElementById("Coursename");
    var daylabel = document.getElementById("day");
    var totaldaylabel = document.getElementById("totalday");
    for (var i = 0; i < CourseList.length; i++) {
        namelabel.innerHTML = "Course Name : ".concat(CourseList[i].coursename);
        daylabel.innerHTML = "Required day : ".concat(CourseList[i].requireday, "<br>");
    }
    for (var i = 0; i < CourseList.length; i++) {
        totaldaylabel.innerHTML += CourseList[i].requireday;
        alert("Total Day is:" + totaldaylabel.innerHTML);
    }
}
