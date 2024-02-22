package com.example.server.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.server.domain.KnowledgeContent;

@Repository
public interface KnowledgeContentRepository extends JpaRepository<KnowledgeContent, Long> {
    List<KnowledgeContent> findByKnowledgeTopic_AgeRangeChildTrue();
    List<KnowledgeContent> findByKnowledgeTopic_AgeRangeTeenTrue();
    List<KnowledgeContent> findByKnowledgeTopic_AgeRangeParentTrue();
}
