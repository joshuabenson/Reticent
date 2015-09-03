import {Component, Tenplate, bootstrap, Foreach} from angular2/angular2;
import {MyAppStore} from 'services/MyAppStore';
@Component({
  selector: 'todo-app',
  componentServices: [
    MyAppStore
  ] 
})
@Template({
  url: 'templates/todo.html',
  directives: [Foreach]
})
class TodoApp {

  myAppStore : MyAppStore;

  constructor(myAppStore: MyAppStore) {
    this.entryStore = entryStore;
  }

  add($event, newentry){
    if($event.which === 13) {
      this.myAppStore.add(newentry.value);
      newentry.value = '';
    }
  }

  toggleEntryState(entry){
    entry.done = !entry.done;
  }

}

bootstrap(TodoApp);
