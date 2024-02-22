package com.example.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.server.domain.KnowledgeContent;
import com.example.server.repositories.KnowledgeContentRepository;

@Service
public class KnowledgeService {

    @Autowired
    private KnowledgeContentRepository knowledgeContentRepository;

    public List<KnowledgeContent> getContentForChildren() {
        return knowledgeContentRepository.findByKnowledgeTopic_AgeRangeChildTrue();
    }

    public List<KnowledgeContent> getContentForTeens() {
        return knowledgeContentRepository.findByKnowledgeTopic_AgeRangeTeenTrue();
    }

    public List<KnowledgeContent> getContentForParents() {
        return knowledgeContentRepository.findByKnowledgeTopic_AgeRangeParentTrue();
    }
}
