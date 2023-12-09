import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/Infrastructure/environments/environment';
import { Usuario } from '../../Application/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiBase: string=environment.apiBase;

  constructor(private http:HttpClient) { }
    signIn(usuario:any){
      console.log(usuario);
      
      return this.http.post<any>(this.apiBase+'/usuarios/login', usuario);
    }
    register(usuario: Usuario){
      console.log(usuario);
      
      return this.http.post(this.apiBase+'/usuarios', usuario);
    }
    obtenerUsuarioPorID(idUsuario:number){
      return this.http.get<Usuario[]>(`${this.apiBase}/usuarios/${idUsuario}`);
    }
}
