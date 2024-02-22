package com.example.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.server.domain.KnowledgeTopic;

@Repository
public interface KnowledgeTopicRepository extends JpaRepository<KnowledgeTopic, Long> {
    
}
