import { Component } from '@angular/core';

@Component({
  selector: 'poke-team',
  templateUrl: './poke-team.component.html',
  styleUrls: ['./poke-team.component.scss']
})
export class PokeTeamComponent {
   
  show: boolean = true;

  showTeam(){
    if(this.show){
       this.show = false;
    }
    else{
      this.show = true;
    }
  }
}
