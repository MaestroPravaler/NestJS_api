import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {
  isNomeDeUsuarioUnico(nomeDeUsuario: string): Promise<boolean> {
      throw new Error("Method not implemented.");
  }
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
    const usuarioEncontrado = this.usuarios.find(usuario => usuario.nomeDeUsuario == nomeDeUsuario);

    return usuarioEncontrado;
  }
}