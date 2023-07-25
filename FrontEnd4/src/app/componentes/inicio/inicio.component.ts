import { Component, OnInit } from '@angular/core';
import { EquipoService, Equipo } from '../../services/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // variable
  ListarEquipo: Equipo[] = [];

  constructor(private EquipoService: EquipoService, private router: Router) { }

  ngOnInit(): void {
    this.listarEquipo();
  }

  listarEquipo() {
    this.EquipoService.getEquipos().subscribe(
      (res: any) => {
        this.ListarEquipo = res.equipos;
      },
      error => {
        console.log('Error al obtener los equipos:', error);
      }
    );
  }

  eliminar(id: string) {
    this.EquipoService.deleteEquipo(id).subscribe({
      next: () => {
        window.location.reload();
      },
      complete: () => {

      },
      error: () => {
      }
    });
  }

  modificar(id: string) {
    this.router.navigate(['/edit/' + id]);
  }
}
