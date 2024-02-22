package com.example.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.server.domain.KnowledgeTopic;
import com.example.server.repositories.KnowledgeTopicRepository;

@Service
public class KnowledgeTopicService {
    @Autowired
    private KnowledgeTopicRepository knowledgeTopicRepository;

    public ResponseEntity<List<KnowledgeTopic>> getAll() {
        return ResponseEntity.ok(knowledgeTopicRepository.findAll());
    }
}
