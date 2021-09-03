import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls:['./card.component.scss']
})
export class CardComponent implements OnInit{ 
    title:string='My carsssd title'
    text:string='aaaa'
    
    ngOnInit(){
        
    }

    getInfo():string{
        return 'this is my info'
    }
    changeTitle(){
        this.title = "title changed"
    }
}