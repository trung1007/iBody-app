package com.example.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.server.domain.KnowledgeContent;
import com.example.server.repositories.KnowledgeContentRepository;

@Service
public class KnowledgeContentService {

    @Autowired
    private KnowledgeContentRepository knowledgeContentRepository;

    public ResponseEntity<List<KnowledgeContent>> getAll() {
        return ResponseEntity.ok(knowledgeContentRepository.findAll());
    }
}
