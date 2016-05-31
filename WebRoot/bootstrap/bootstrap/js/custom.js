/**
 * Created by tang90 on 2016/5/29.
 */
$("#student_header").html('<nav class="navbar navbar-default" role="navigation"  id="head_nav"  >'+
    '<div >'+
    '<ul class="nav navbar-nav" >'+
    '<li><a href="student_home.html">Home</a></li>'+
    '<li  class="dropdown">'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">'+
    'Course <span class="caret"></span>'+
    '</a>'+
    '<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">'+
    '<li><a href="student_course_search.html">Serach course</a></li>'+
'<li><a href="registered_course.html">View registered course</a></li>'+
'<li><a href="#">Schedule</a></li>'+
    '</ul>'+
    '</li>'+
    '<li class="dropdown">'+

    '<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">'+
    'Grade <span class="caret"></span>'+
    '</a>'+
    '<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">'+
    '<li><a href="view_gpa.html">View gpa</a></li>'+
'<li><a href="transcript.html">View transcript</a></li>'+
'</ul>'+
'</li>'+
'</ul>'+
'<div class="navbar-right text-center " id="logout_drop"><span class="glyphicon glyphicon-log-out"></span><a href="#"  >Logout</a></div>'+
    '</div>'+
    '</nav>')

$("#admin_header").html('<nav class="navbar navbar-default" role="navigation"  id="head_nav"  >'+
    '<div >'+
    '<ul class="nav navbar-nav" >'+
    '<li><a href="admin_home.html">Home</a></li>'+
    '<li  class="dropdown">'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">'+
    'Course <span class="caret"></span>'+
    '</a>'+
    '<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">'+
    '<li><a href="student_course_search.html">Serach course</a></li>'+
    '<li><a href="admin_course_add.html">Add course</a></li>'+
    '</ul>'+
    '</li>'+
    '<li class="dropdown">'+

    '<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">'+
    'Student <span class="caret"></span>'+
    '</a>'+
    '<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">'+
    '<li><a href="admin_student_search.html">Search student</a></li>'+
    '<li><a href="admin_student_add.html">Add student</a></li>'+
    '</ul>'+
    '</li>'+
    '</ul>'+
    '<div class="navbar-right text-center " id="logout_drop"><span class="glyphicon glyphicon-log-out"></span><a href="#"  >Logout</a></div>'+
    '</div>'+
    '</nav>')

