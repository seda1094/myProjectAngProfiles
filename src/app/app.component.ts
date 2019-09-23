import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fire';

  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase){
    this.items = db.list('items').valueChanges();
  }
  onSubmit(data:NgForm){
    this.db.list('items').push({name: data.value.name,
                                content: data.value.desc,
                                author: data.value.author,
                                noStudent: data.value.wasStudent});
                                console.log(data.value.wasStudent);
                                
  }
}
