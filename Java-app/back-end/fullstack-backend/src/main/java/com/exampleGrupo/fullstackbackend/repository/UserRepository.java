package com.exampleGrupo.fullstackbackend.repository;

import com.exampleGrupo.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
