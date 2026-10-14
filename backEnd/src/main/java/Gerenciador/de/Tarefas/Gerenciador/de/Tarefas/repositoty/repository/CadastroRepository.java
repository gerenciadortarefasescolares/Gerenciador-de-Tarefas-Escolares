package Gerenciador.de.Tarefas.Gerenciador.de.Tarefas.repositoty.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface Cadastro extends JpaRepository<Cadastro,Long> {
 Optional<Cadastro>findByEmail(String email);
}
