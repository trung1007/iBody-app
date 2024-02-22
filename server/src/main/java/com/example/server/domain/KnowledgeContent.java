package com.example.server.domain;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Data
@Table(name = "KnowledgeContent")
@AllArgsConstructor
@NoArgsConstructor
public class KnowledgeContent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ContentID")
    private Long contentId;

    @ManyToOne
    @JoinColumn(name = "TopicID", nullable = false)
    private KnowledgeTopic knowledgeTopic;

    @Column(name = "ContentType", nullable = false, length = 50)
    private String contentType;

    @Column(name = "Content", columnDefinition = "TEXT")
    private String content;
}
