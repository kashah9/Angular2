System.register(['angular2/core', './course.service', './auto-grow.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, course_service_1, auto_grow_directive_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                // creating the reference for Service...
                // courseService is a parameter for type CourseService...
                // CourseService is a dependency and create class creates the instance of it and injected into constructor of it. DI
                function CoursesComponent(courseService) {
                    //title: string = "title of courses page"; Similar statement 
                    this.title = "Title of courses page:";
                    this.msg = "Write something!";
                    this.courses = courseService.getCourses();
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        //Use Tilted quotes to define the template in multiple lines...
                        // {{}} <== this is one way binding to change view according to component property changes. 
                        //[value] = "msg" is one way binding but (input) = "..." <-- this is two way binding and change view accordingly. 
                        template: "\n            <h2> Courses </h2>\n            {{title}} \n\n            <input type=\"text\" autoGrow [value]=\"msg\" (input) = \"msg=$event.target.value\"/>\n\n            <input type=\"text\" [(ngModel)] = \"msg\"/>\n            <input type=\"button\" class = \"btn btn-primary\" (click) = \"msg = ''\" value=\"Clear\"/>\n            Preview: {{ msg }}\n            \n            <ul>\n                <li *ngFor = \"#course of courses\">\n                {{course}}\n                </li>\n            </ul>\n            ",
                        providers: [course_service_1.CourseService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map