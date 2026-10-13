package Gerenciador.de.Tarefas.Gerenciador.de.Tarefas.repositoty.entitis;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "cadastro")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Cadastro {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String nome;
    @Column(nullable = false,unique = true)
    private String email;
    @Column(nullable = false)
    private Integer telefone;
    @Column(nullable = false)
    private Date dataNascimento;
    @Column(nullable = false)
    private String senha;
    @Column(nullable = false)
    private String confirmacaoSenha;



}
