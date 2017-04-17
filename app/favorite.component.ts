import {Component, Input} from 'angular2/core';

@Component({
    selector: 'Favorite',
    template: `
    <i 
        class ="glyphicon"
        [class.glyphicon-star-empty] = "!isFavorite"
        [class.glyphicon-star] = "isFavorite"
        (click) = "onClick()">
    </i>
    `,
    inputs: ['isFavorite: is-favorite'] 
})

export class FavoriteComponent{
    
    @Input('is-favorite') isFavorite = false; // input decorator made var public. Default is private. is-favorite is alias for public usage of isFavorite property. 

    onClick(){
        this.isFavorite = !this.isFavorite;
    }
}
