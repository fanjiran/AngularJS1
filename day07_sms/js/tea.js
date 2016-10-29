/**
 * Created by fanfan on 2016/9/21.
 * 教师信息模块
 */
angualar.module("app.teaModule",[]);
.controller("TeacherConttroller",function($scope){
    $scope.name = "教师信息管理"
})
.factory("TeacherService",function(){
    //学生服务
    return{

    }
});