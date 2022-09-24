import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {
  private usuarios = [{
    id: 1,
    nomeDeUsuario: 'joao',
    nomeCompleto: 'João da Silva',
    email: 'jj@jj.com',
    senha: '123456',
    dataDeEntrada: new Date()
  }
  ];
  
  public cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    
    return usuario;
  }
  
  public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
    return this.usuarios.find(usuario => usuario.nomeDeUsuario === nomeDeUsuario);
  }
}