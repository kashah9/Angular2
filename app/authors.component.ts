import {Component} from 'angular2/core';
import {AutoGrowDirective} from './auto-grow.directive';
import {AuthorService} from './author.service'

@Component({
    selector: 'authors1',
    template:   ` 
                <authors></authors>
                <ul>
                    <li *ngFor= "#author of authors">
                        {{author}}
                    </li>
                </ul>
                <input type = "text" autoGrow>
                `,
    providers: [AuthorService],
    directives: [AutoGrowDirective]
})
export class AuthorsComponent {

    authors;
    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
} 