import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'


@Component({
    selector: 'courses',

    //Use Tilted quotes to define the template in multiple lines...
    // {{}} <== this is one way binding to change view according to component property changes. 
    //[value] = "msg" is one way binding but (input) = "..." <-- this is two way binding and change view accordingly. 

    template: `
            <h2> Courses </h2>
            {{title}} 

            <input type="text" autoGrow [value]="msg" (input) = "msg=$event.target.value"/>

            <input type="text" [(ngModel)] = "msg"/>
            <input type="button" class = "btn btn-primary" (click) = "msg = ''" value="Clear"/>
            Preview: {{ msg }}
            
            <ul>
                <li *ngFor = "#course of courses">
                {{course}}
                </li>
            </ul>
            `,
            providers: [CourseService],
            directives: [AutoGrowDirective]
})
export class CoursesComponent {
    //title: string = "title of courses page"; Similar statement 
    title =  "Title of courses page:";
    msg = "Write something!"

    courses;

    // creating the reference for Service...
    // courseService is a parameter for type CourseService...
    // CourseService is a dependency and create class creates the instance of it and injected into constructor of it. DI
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
    

}