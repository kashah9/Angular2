import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'

@Component({
    selector: 'my-app',
    template: ` 
                <div on-click = "divClick()" class="container">
                <h2>{{ titleHello }}</h2>
                <img [src] = "imageUrl" />

                
                <!-- class binding with other classes -->
                <button on-click = "onClick($event)"
                
                class = "btn btn-primary" 
                [class.active] = "isActive" 
            
                [style.backgroundColor] = "isActive ? 'gray' : 'blue'">
                Submit </button>

                <div class="jumbotron"><courses></courses>
                <authors1></authors1>
                
                <Favorite
                [is-favorite]="post.isFavorite"></Favorite>
                </div>
                </div>`,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent]
})
export class AppComponent { 
    post = {
        title: "Title",
        isFavorite: true 
    }
    titleHello = "Something New!";
    imageUrl = "http://cdn.collider.com/wp-content/uploads/2016/10/the-boss-baby-slice-600x200.jpg";
    //isActive = false;

    onClick($event){
        console.log("Hello from button click", $event);
        $event.stopPropagation(); // to stop calling the div click every time i click on button which is also part of div 
    }
    divClick(){
        console.log("Hello from div click");
    }
}