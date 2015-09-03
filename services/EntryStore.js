export class EntryStore {
  contructor(){
    this.myAppEntry = [];
  }
  add(item){
    this.myAppEntry.unshift({text:item, done:false});
  }
}
