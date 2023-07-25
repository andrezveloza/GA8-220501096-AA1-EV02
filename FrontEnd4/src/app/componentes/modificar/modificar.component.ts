import { Component, OnInit } from '@angular/core';
import { Equipo, EquipoService} from '../../services/equipo.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  equipo:Equipo={
    id_equipo:'',
    nombre:'',
    logo:''
  };

  constructor(private EquipoService:EquipoService,
    private router:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit():void {
    const id_entrada = <string>this.activeRoute.snapshot.params['id'];

    console.log('id de entrada: ' + id_entrada);

    if(id_entrada){
      this.EquipoService.getUnEquipo(id_entrada).subscribe({
        next: (res) => {
          if (Array.isArray(res) && res.length > 0) {
            this.equipo = res[0];
            console.log(res[0]);
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  modificar()
  {
    this.EquipoService.editEquipo(this.equipo, this.equipo.id_equipo).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/inicio']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
