package com.example.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.domain.KnowledgeContent;
import com.example.server.services.KnowledgeContentService;
import com.example.server.services.KnowledgeService;
import com.example.server.services.KnowledgeTopicService;

@RestController
@RequestMapping("/api/knowledge/")
public class KnowledgeController {

    @Autowired
    private KnowledgeService knowledgeService;

    @GetMapping("/{age-range}")
    public ResponseEntity<List<KnowledgeContent>> getKnowledgeByAgeRange(@PathVariable("age-range") String ageRange) {
        if (ageRange.equals("Child")) {
            return ResponseEntity.ok(knowledgeService.getContentForChildren());
        } else if (ageRange.equals("Teen")) {
            return ResponseEntity.ok(knowledgeService.getContentForTeens());
        }
        return ResponseEntity.ok(knowledgeService.getContentForParents());
    }
}
